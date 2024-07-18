import type { HTMLAttributes } from "preact/compat";
import type { VariantProps } from "class-variance-authority";
import type { textVariants } from "./styles";

export type TagElementTypes = "p" | "h1" | "h2" | "h3" | "h4" | "h5";

export interface TextProps
  extends HTMLAttributes<HTMLParagraphElement | HTMLHeadingElement>,
    VariantProps<typeof textVariants> {
  element?: TagElementTypes;
}
