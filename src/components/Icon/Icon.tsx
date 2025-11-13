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
      role="icon"
      src={src}
      alt={alt}
      width={size + "px"}
      height={size + "px"}
    />
  );
}
