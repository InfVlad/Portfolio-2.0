import { useState, useEffect } from "preact/hooks";

export const useAnimatedValue = (
  start: number,
  end: number,
  duration: number,
  isVisible: boolean,
) => {
  const [value, setValue] = useState(start);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrameId: number | null = null;
    let initialValue = isVisible ? start : end;
    let targetValue = isVisible ? end : start;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue =
        initialValue + (targetValue - initialValue) * progress;

      setValue(currentValue);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [start, end, duration, isVisible]);

  return value;
};
