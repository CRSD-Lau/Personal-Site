import { readFile, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, resolve, sep } from "node:path";
import { promisify } from "node:util";
import { gzip } from "node:zlib";

const root = resolve("out");
const requestedPort = Number.parseInt(process.argv[2] ?? process.env.PORT ?? "4174", 10);
const port = Number.isFinite(requestedPort) ? requestedPort : 4174;
const compress = promisify(gzip);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".webp": "image/webp",
  ".woff2": "font/woff2",
  ".xml": "application/xml; charset=utf-8",
};

const server = createServer(async (request, response) => {
  try {
    const url = new URL(request.url ?? "/", "http://localhost");
    const requestPath = decodeURIComponent(url.pathname);
    const relativePath = requestPath.endsWith("/") ? `${requestPath}index.html` : requestPath;
    const htmlFallback = extname(requestPath)
      ? undefined
      : resolve(root, `.${requestPath.replace(/\/$/, "")}.html`);
    const candidates = [resolve(root, `.${relativePath}`), htmlFallback].filter(Boolean);
    let filePath;

    for (const candidate of candidates) {
      if (candidate !== root && !candidate.startsWith(`${root}${sep}`)) {
        response.writeHead(403).end("Forbidden");
        return;
      }

      try {
        const candidateStat = await stat(candidate);
        const resolvedPath = candidateStat.isDirectory()
          ? resolve(candidate, "index.html")
          : candidate;
        await stat(resolvedPath);
        filePath = resolvedPath;
        break;
      } catch {
        // Try the Next.js flat-route HTML fallback before returning a 404.
      }
    }

    if (!filePath) throw new Error("Static file not found");
    const body = await readFile(filePath);
    const contentType = contentTypes[extname(filePath)] ?? "application/octet-stream";
    const acceptsGzip = (request.headers["accept-encoding"] ?? "")
      .split(",")
      .some((encoding) =>
        /^gzip(?:\s*;\s*q=(?!0(?:\.0*)?(?:\s|$))[\d.]+)?$/i.test(encoding.trim()),
      );
    const shouldCompress =
      acceptsGzip &&
      body.length > 1024 &&
      /^(text\/|application\/(javascript|json|xml|manifest\+json))/.test(contentType);
    const responseBody = shouldCompress ? await compress(body) : body;
    response.writeHead(200, {
      "Cache-Control": "no-store",
      "Content-Type": contentType,
      Vary: "Accept-Encoding",
      ...(shouldCompress ? { "Content-Encoding": "gzip" } : {}),
      "Content-Length": responseBody.length,
    });
    response.end(responseBody);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not found");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`Static portfolio preview: http://127.0.0.1:${port}`);
});
