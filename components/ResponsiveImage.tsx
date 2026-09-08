type ResponsiveImageProps = {
  base: string;
  widths: readonly number[];
  width: number;
  height: number;
  sizes: string;
  alt: string;
  preload?: boolean;
  className?: string;
};

// Static export has no image server. These checked-in variants work without JS.
export default function ResponsiveImage({
  base,
  widths,
  width,
  height,
  sizes,
  alt,
  preload = false,
  className,
}: ResponsiveImageProps) {
  const srcSet = widths.map((size) => `${base}-${size}.webp ${size}w`).join(", ");
  return (
    <>
      {preload && <link rel="preload" as="image" imageSrcSet={srcSet} imageSizes={sizes} />}
      {/* Pre-generated srcSet replaces the unavailable Next.js optimization endpoint. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={`${base}-${widths[widths.length - 1]}.webp`}
        srcSet={srcSet}
        sizes={sizes}
        width={width}
        height={height}
        alt={alt}
        loading={preload ? "eager" : "lazy"}
        fetchPriority={preload ? "high" : "auto"}
        decoding="async"
        className={className}
      />
    </>
  );
}
