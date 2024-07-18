import { textVariants } from "./styles";
import type { TextProps } from "./types";
import { cn } from "@utils/cn";

export const Text = (props: TextProps) => {
  const { variant, className, element, ...HtmlTextProps } = props;
  const cvaProps = {
    variant,
    className,
  };
  const TextElement = element ? element : "p";

  return (
    <TextElement className={cn(textVariants(cvaProps))} {...HtmlTextProps} />
  );
};
