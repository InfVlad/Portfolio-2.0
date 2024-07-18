import { cva } from "class-variance-authority";

export const textVariants = cva("text-white", {
  variants: {
    variant: {
      base: "",
      gradient:
        "inline-block bg-gradient-to-r from-primary-blue via-secondary-blue to-primary-lila bg-clip-text text-transparent",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});
