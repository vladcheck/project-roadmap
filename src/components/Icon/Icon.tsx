export default function Icon({
  src,
  alt,
  size,
}: {
  src: string;
  alt: string;
  size: number;
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
