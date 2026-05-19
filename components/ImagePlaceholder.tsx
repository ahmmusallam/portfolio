type Props = {
  label: string;
  caption?: string;
  aspect?: string;
};

export default function ImagePlaceholder({ label, caption, aspect = 'aspect-[16/9]' }: Props) {
  return (
    <div className={`relative ${aspect} border border-ink-800 bg-ink-900/30 overflow-hidden corner-marks`}>
      <span />
      <div className="absolute inset-0 grid place-items-center">
        <div className="text-center px-6">
          <p className="mono-label">Placeholder · {label}</p>
          {caption && <p className="text-ink-500 text-sm mt-2 max-w-md">{caption}</p>}
        </div>
      </div>
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
    </div>
  );
}
