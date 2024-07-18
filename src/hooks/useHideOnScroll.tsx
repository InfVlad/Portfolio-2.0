import { useEffect, useState } from "preact/hooks";

export const useHideOnScroll = () => {
  const [isScrollingUp, setIsScrollingUp] = useState<"up" | "down" | null>(
    null,
  );
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setIsScrollingUp(null);
        return;
      }

      if (currentScroll > lastScroll) {
        setIsScrollingUp("down");
      } else if (currentScroll < lastScroll) {
        setIsScrollingUp("up");
      }
      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return isScrollingUp;
};
