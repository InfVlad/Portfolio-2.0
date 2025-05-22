import type { InputHTMLAttributes } from "preact/compat";

import type { inputVariants } from "./styles";
import type { VariantProps } from "class-variance-authority";

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}
