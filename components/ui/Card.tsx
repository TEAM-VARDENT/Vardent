interface CardProps {
  children:  React.ReactNode;
  className?: string;
  hover?:    boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <div
      className={[
        'bg-white border border-[rgba(15,94,61,0.10)]',
        'rounded-[20px]',
        hover
          ? 'transition-all duration-[250ms] hover:-translate-y-[3px] hover:shadow-vardent-md hover:border-[rgba(15,94,61,0.2)]'
          : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </div>
  );
}
