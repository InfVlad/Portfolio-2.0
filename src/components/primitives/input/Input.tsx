import { forwardRef } from "preact/compat";
import type { InputProps } from "./types";
import { inputVariants } from "./styles";
import { cn } from "~/utils/cn";

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, name, ...props }, ref) => {
    return (
      <>
        <input
          {...props}
          className={cn(inputVariants({ variant, className }))}
          ref={ref}
          name={name}
          id={name}
          // aria-invalid={isError}
          aria-describedby={`${name}-error`}
        />
      </>
    );
  },
);

Input.displayName = "Input";

export { Input };
