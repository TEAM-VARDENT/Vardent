interface EyebrowProps {
  children:   React.ReactNode;
  center?:    boolean;
  className?: string;
}

export default function Eyebrow({ children, center = false, className = '' }: EyebrowProps) {
  return (
    <p
      className={[
        'inline-block font-mono text-[11px] font-medium tracking-[0.16em] uppercase',
        'text-vardent-g3 mb-4',
        center ? 'text-center' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </p>
  );
}
