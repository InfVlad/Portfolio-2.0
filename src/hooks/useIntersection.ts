import { useEffect, useState } from "preact/hooks";

export const useIntersection = (
  element: preact.RefObject<HTMLElement>,
  rootMargin: string,
) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const current = element?.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin },
    );
    current && observer?.observe(current);

    return () => current && observer.unobserve(current);
  }, []);

  return isVisible;
};
