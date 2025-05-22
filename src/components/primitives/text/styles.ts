import { cva } from "class-variance-authority";

export const textVariants = cva("text-white", {
  variants: {
    variant: {
      base: "",
      heading:
        "text-xl font-semibold lg:text-4xl md:text-3xl text-primary-text",
      subtitle: "text-sm font-light text-secondary-text",
      description: "mt-4 text-primary-text",
      gradient:
        "inline-block bg-gradient-to-r from-primary-blue via-secondary-blue to-primary-lila bg-clip-text text-transparent",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});
