const DEFAULT_SIZE_PX = 24;

export default function Icon({
  src,
  alt,
  size = DEFAULT_SIZE_PX,
}: {
  src: string;
  alt: string;
  size?: number;
}) {
  return (
    <img
      className="icon"
      role="icon"
      style={{ objectFit: "contain" }}
      src={src}
      alt={alt}
      width={size + "px"}
      height={size + "px"}
    />
  );
}
