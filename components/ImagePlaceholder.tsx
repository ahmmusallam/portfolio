import Image from 'next/image';

type Props = {
  label: string;
  caption?: string;
  aspect?: string;
  rounded?: boolean;
  src?: string;
  width?: number;
  height?: number;
};

export default function ImagePlaceholder({
  label,
  caption,
  aspect = 'aspect-[16/9]',
  rounded = true,
  src,
  width,
  height,
}: Props) {
  const radius = rounded ? 'rounded-3xl' : '';
  const border = rounded ? 'border border-ink-800' : '';

  // Render a real image when a source is provided, at its natural aspect ratio.
  if (src) {
    return (
      <div className={`relative ${radius} ${border} overflow-hidden bg-ink-900/30`}>
        <Image
          src={src}
          alt={caption || label}
          width={width ?? 1600}
          height={height ?? 1000}
          sizes="(min-width: 768px) 80vw, 100vw"
          className="w-full h-auto"
        />
      </div>
    );
  }

  return (
    <div className={`relative ${aspect} ${radius} ${border} bg-ink-900/30 overflow-hidden`}>
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center px-6">
          <p className="mono-label">Placeholder · {label}</p>
          {caption && <p className="text-ink-500 text-sm mt-2 max-w-md">{caption}</p>}
        </div>
      </div>
    </div>
  );
}
