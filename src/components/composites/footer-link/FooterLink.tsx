import type { HTMLAttributes } from "preact/compat";

interface FooterLinkProps extends HTMLAttributes<HTMLAnchorElement> {}

export const FooterLink = ({ children, ...anchorProps }: FooterLinkProps) => {
  return (
    <li>
      <a
        className="transition-colors duration-200 hover:text-secondary-blue"
        {...anchorProps}
      >
        {children}
      </a>
    </li>
  );
};
