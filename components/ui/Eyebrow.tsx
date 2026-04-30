interface EyebrowProps {
  children:   React.ReactNode;
  center?:    boolean;
  className?: string;
}

export default function Eyebrow({ children, center = false, className = '' }: EyebrowProps) {
  return (
    <p
      className={[
        'inline-block font-mono text-[13px] font-semibold tracking-[0.18em] uppercase',
        'text-vardent-g3 mb-5',
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
