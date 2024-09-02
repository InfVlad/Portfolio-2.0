import type { ComponentChildren } from "preact";
type Props = {
  children: ComponentChildren;
  href: string;
  className?: string;
};

export const NavbarLink = ({ children, href }: Props) => {
  return (
    <li className="h-[inherit]">
      <a
        href={href}
        className="flex h-[inherit] cursor-pointer items-center gap-x-2 transition-all duration-300 ease-in-out hover:scale-125 hover:px-3 hover:text-secondary-blue"
      >
        {children}
      </a>
    </li>
  );
};
