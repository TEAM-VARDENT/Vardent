interface FormInputProps {
  label:        string;
  name:         string;
  type?:        string;
  placeholder?: string;
  required?:    boolean;
  dark?:        boolean;
  children?:    React.ReactNode;
}

export default function FormInput({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  dark = false,
  children,
}: FormInputProps) {
  const inputClass = [
    'block w-full px-[18px] py-[13px]',
    'border rounded-[8px]',
    'font-body text-[16px]',
    'outline-none appearance-none',
    'mb-5 transition-all duration-200',
    dark
      ? 'input-dark'
      : [
          'bg-vardent-bg text-vardent-ink',
          'border-[rgba(15,94,61,0.12)]',
          'focus:border-vardent-g3 focus:shadow-[0_0_0_3px_rgba(22,138,90,0.1)] focus:bg-white',
          'placeholder:text-vardent-ink4',
        ].join(' '),
  ]
    .filter(Boolean)
    .join(' ');

  const labelClass = [
    'block font-body text-[15px] font-medium mb-[7px] tracking-[0.01em]',
    dark ? 'text-white/[0.62]' : 'text-vardent-ink3',
  ].join(' ');

  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label}
      </label>
      {children ? (
        <select id={name} name={name} required={required} className={inputClass}>
          {children}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          className={inputClass}
        />
      )}
    </div>
  );
}
