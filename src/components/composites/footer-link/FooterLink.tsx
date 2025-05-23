import type { AnchorHTMLAttributes } from "preact/compat";

interface FooterLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

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
