import { House, Briefcase, User, Mail } from "lucide-preact";
import { useHideOnScroll } from "~/hooks/useHideOnScroll";
import { cn } from "~/utils/cn";
import { AnimatedButtonContainer } from "../animated-button-container/AnimatedButtonContainer";
import { NavbarLink } from "./NavbarLink";

export const Navbar = () => {
  const isScrollingUp = useHideOnScroll();

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full border-b border-b-bline bg-primary-bg transition-all duration-500 ease-in-out",
        isScrollingUp === "up" && "drop-shadow-dark",
        isScrollingUp === "down" && "-translate-y-full",
      )}
    >
      <nav className="container flex w-[95%] items-center justify-between py-2">
        <div className="w-[7.8125rem]">
          <a href="/">
            <img src="/favicon.svg" alt="site's icon" height={25} width={47} />
          </a>
        </div>
        <ul className="flex h-[3.125rem] items-center justify-center gap-x-4 rounded-3xl border border-bline px-4 font-semibold text-white">
          <NavbarLink href="/">
            <House size={20} />
            Home
          </NavbarLink>
          <NavbarLink href="/projects">
            <Briefcase size={20} />
            Projects
          </NavbarLink>
          <NavbarLink href="/about">
            <User size={20} />
            About
          </NavbarLink>
        </ul>
        <a href="/contact" className="h-[3.125rem] w-fit rounded-3xl">
          <AnimatedButtonContainer className="mb-0">
            <Mail size={20} />
            Contact
          </AnimatedButtonContainer>
        </a>
      </nav>
    </header>
  );
};
