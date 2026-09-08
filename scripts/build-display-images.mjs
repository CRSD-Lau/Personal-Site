import { mkdir } from "node:fs/promises";
import sharp from "sharp";

const author = "Neil Mitchell";
const xmp = `<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xmp="http://ns.adobe.com/xap/1.0/" xmlns:portfolio="https://neilmitchell.ca/ns/metadata/1.0/"><dc:creator><rdf:Seq><rdf:li>${author}</rdf:li></rdf:Seq></dc:creator><xmp:CreatorTool>${author}</xmp:CreatorTool><portfolio:LastModifiedBy>${author}</portfolio:LastModifiedBy></rdf:Description></rdf:RDF></x:xmpmeta>`;
await mkdir("public/images", { recursive: true });
for (const [source, name, widths] of [
  ["public/profile.webp", "portrait", [320, 480, 640, 960]],
  ["public/works/deep-live-cam/social-preview.png", "deep-live-cam", [400, 640, 960, 1280]],
]) {
  for (const width of widths) {
    const path = `public/images/${name}-${width}.webp`;
    const output = await sharp(source)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 86, effort: 6 })
      .withExif({ IFD0: { Artist: author, Software: author } })
      .withXmp(xmp)
      .toFile(path);
    const metadata = await sharp(path).metadata();
    if (
      !metadata.exif?.includes(Buffer.from(author)) ||
      !metadata.xmp?.includes(Buffer.from(author))
    ) {
      throw new Error(`Missing author/modifier metadata: ${path}`);
    }
    console.log(`${path}: ${output.width} x ${output.height}, ${output.size} bytes`);
  }
}
