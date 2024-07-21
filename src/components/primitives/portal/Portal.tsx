import { createPortal } from "preact/compat";
import type { ComponentChildren } from "preact";

interface Props {
  children: ComponentChildren;
}

export const Portal = ({ children }: Props) => {
  const container = document.body;
  return createPortal(children, container);
};
