type Props = {
  label: string;
  caption?: string;
  aspect?: string;
  rounded?: boolean;
};

export default function ImagePlaceholder({
  label,
  caption,
  aspect = 'aspect-[16/9]',
  rounded = true,
}: Props) {
  const radius = rounded ? 'rounded-3xl' : '';
  const border = rounded ? 'border border-ink-800' : '';
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
