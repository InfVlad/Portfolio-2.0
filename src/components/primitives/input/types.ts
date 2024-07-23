import type { HTMLAttributes } from "preact/compat";
import type { inputVariants } from "./styles";
import type { VariantProps } from "class-variance-authority";

export interface InputProps
  extends HTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}
