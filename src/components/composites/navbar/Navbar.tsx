import { House, Briefcase, User, Mail } from "lucide-preact";
import { useHideOnScroll } from "@hooks/useHideOnScroll";
import { cn } from "@utils/cn";

export const Navbar = () => {
  const isScrollingUp = useHideOnScroll();

  return (
    <header
      className={cn(
        "fixed left-0 top-0 z-50 w-full bg-primary-bg transition-all duration-300 ease-in-out",
        isScrollingUp === "up" && "drop-shadow-dark",
        isScrollingUp === "down" && "-translate-y-full",
      )}
    >
      <div className="container flex w-[95%] items-center justify-between py-2">
        <div className="w-[7.8125rem]">
          <a href="">
            <img src="/favicon.svg" alt="site's icon" />
          </a>
        </div>
        <ul className="flex h-[3.125rem] items-center justify-center gap-x-4 rounded-3xl border border-bline px-4 text-white">
          <li className="flex h-[inherit] cursor-pointer items-center gap-x-2 transition-all duration-300 ease-in-out hover:scale-125 hover:px-3 hover:text-secondary-blue">
            <House className="size-[0.625rem]" />
            Home
          </li>
          <li className="flex h-[inherit] cursor-pointer items-center gap-x-2 transition-all duration-300 ease-in-out hover:scale-125 hover:px-3 hover:text-secondary-blue">
            <Briefcase className="size-[0.625rem]" />
            Projects
          </li>
          <li className="flex h-[inherit] cursor-pointer items-center gap-x-2 transition-all duration-300 ease-in-out hover:scale-125 hover:px-3 hover:text-secondary-blue">
            <User className="size-[0.625rem]" />
            About
          </li>
        </ul>
        <a
          href="http://_"
          className="flex h-[3.125rem] items-center gap-x-3 rounded-3xl border border-bline px-4 text-white hover:text-secondary-blue"
        >
          <Mail className="size-[0.625rem]" />
          Contact
        </a>
      </div>
    </header>
  );
};
