import { memo } from 'react';
import { cn } from '@/utils';

const Input = ({
  label,
  name,
  value,
  className = '',
  onChange,
  error,
  type = 'text',
  disabled = false,
  ...props
}) => (
  <div className={cn('mb-4', className)}>
    {label && (
      <label htmlFor={name} className="block font-semibold mb-1">
        {label}
      </label>
    )}

    <input
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      disabled={disabled}
      aria-invalid={!!error}
      aria-describedby={error ? `${name}-error` : undefined}
      className={cn(
        'w-full border px-3 py-2 rounded outline-none transition',
        error && 'border-red-500'
      )}
      {...props}
    />

    {error && (
      <p id={`${name}-error`} className="text-red-500 text-sm mt-1">
        {error}
      </p>
    )}
  </div>
);

export default memo(Input);
