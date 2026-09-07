import sharp from "sharp";

// The reviewed, opaque master is kept separately from the transparent favicon.
const source = "public/icons/install-v2-512.png";
const authorMetadata = {
  IFD0: { Artist: "Neil Mitchell" },
};
const xmp = `<?xpacket begin="\uFEFF" id="W5M0MpCehiHzreSzNTczkc9d"?>
<x:xmpmeta xmlns:x="adobe:ns:meta/"><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
<rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:xmp="http://ns.adobe.com/xap/1.0/" xmlns:portfolio="https://neilmitchell.ca/ns/metadata/1.0/">
<dc:creator><rdf:Seq><rdf:li>Neil Mitchell</rdf:li></rdf:Seq></dc:creator>
<xmp:CreatorTool>Neil Mitchell</xmp:CreatorTool><portfolio:LastModifiedBy>Neil Mitchell</portfolio:LastModifiedBy>
</rdf:Description></rdf:RDF></x:xmpmeta><?xpacket end="w"?>`;

function withAuthor(pipeline) {
  return pipeline.withExif(authorMetadata).withXmp(xmp);
}

for (const [size, filename] of [
  [192, "install-v2-192.png"],
  [180, "apple-touch-v2.png"],
]) {
  await withAuthor(sharp(source).resize(size, size)).png().toFile(`public/icons/${filename}`);
}

// Keep the complete portrait inside the central 80% circle that Android masks preserve.
const portrait = await sharp(source).resize(384, 384).png().toBuffer();
const circle = Buffer.from(
  '<svg width="384" height="384"><circle cx="192" cy="192" r="192" fill="white"/></svg>',
);
const circularPortrait = await sharp(portrait)
  .composite([{ input: circle, blend: "dest-in" }])
  .png()
  .toBuffer();
await withAuthor(
  sharp({ create: { width: 512, height: 512, channels: 3, background: "#000000" } }).composite([
    { input: circularPortrait, left: 64, top: 64 },
  ]),
)
  .removeAlpha()
  .png()
  .toFile("public/icons/install-maskable-v2-512.png");

console.log("Generated opaque install icons and Apple touch icon from the reviewed master.");
