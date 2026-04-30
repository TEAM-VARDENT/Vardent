import Link from 'next/link';

type Variant = 'primary' | 'ghost' | 'nav';

interface ButtonProps {
  href?:     string;
  onClick?:  () => void;
  variant?:  Variant;
  children:  React.ReactNode;
  type?:     'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary: [
    'inline-flex items-center gap-2',
    'bg-vardent-g2 text-white',
    'px-8 py-[15px] rounded-[8px]',
    'font-body text-[15px] font-medium tracking-[0.01em]',
    'border-none cursor-pointer no-underline',
    'shadow-[0_4px_16px_rgba(15,94,61,0.28)]',
    'transition-all duration-200',
    'hover:bg-vardent-g3 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(15,94,61,0.36)]',
    'disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none',
  ].join(' '),

  ghost: [
    'inline-flex items-center gap-2',
    'bg-transparent text-vardent-ink2',
    'px-8 py-[15px] rounded-[8px]',
    'font-body text-[15px] font-medium',
    'border border-[rgba(15,94,61,0.10)] cursor-pointer no-underline',
    'transition-all duration-200',
    'hover:border-vardent-g3 hover:text-vardent-g2 hover:bg-vardent-tint',
  ].join(' '),

  nav: [
    'inline-flex items-center',
    'bg-vardent-g2 text-white',
    'px-6 py-[10px] rounded-[8px]',
    'font-body text-[14px] font-medium',
    'shadow-[0_2px_8px_rgba(15,94,61,0.28)]',
    'transition-all duration-200',
    'hover:bg-vardent-g3 hover:-translate-y-px hover:shadow-[0_4px_14px_rgba(15,94,61,0.36)]',
    'no-underline',
  ].join(' '),
};

export default function Button({
  href,
  onClick,
  variant = 'primary',
  children,
  type = 'button',
  disabled,
  className = '',
}: ButtonProps) {
  const cls = `${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith('http') || href.startsWith('mailto');
    if (isExternal) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
