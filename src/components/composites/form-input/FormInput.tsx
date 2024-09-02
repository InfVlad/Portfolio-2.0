import { Input } from "../../primitives";
import { useState } from "preact/hooks";
import type { JSX } from "preact";
import type { HTMLAttributes } from "preact/compat";

interface Props extends HTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  errorMessage: string;
  isLast?: boolean;
  onChange: (e: JSX.TargetedEvent<HTMLInputElement>) => void;
}

export const FormInput = ({
  name,
  label,
  errorMessage,
  isLast,
  onChange,
  ...inputProps
}: Props) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = (e: JSX.TargetedFocusEvent<HTMLInputElement>) => {
    setFocused(true);
  };
  return (
    <div className="mb-4 flex flex-col">
      <label htmlFor={name} className="mb-4 text-lg font-bold text-white">
        {label}
      </label>
      <Input
        name={name}
        onBlur={handleFocus}
        onFocus={() => isLast && setFocused(true)}
        onChange={onChange}
        {...inputProps}
        data-focused={focused.toString()}
        className="peer"
      />
      <span
        id={`${name}-error`}
        data-focused={focused.toString()}
        className='mt-1 hidden pl-1 text-sm text-red-300 data-[focused="true"]:peer-invalid:block'
      >
        {errorMessage}
      </span>
    </div>
  );
};
