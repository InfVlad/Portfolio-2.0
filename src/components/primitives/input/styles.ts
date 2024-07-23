import { cva } from "class-variance-authority";

export const inputVariants = cva("", {
  variants: {
    variant: {
      base: 'text-white border border-bline rounded-lg bg-primary-bg px-3 py-2 invalid:data-[focused="true"]:border-red-400',
    },
  },
  defaultVariants: {
    variant: "base",
  },
});
