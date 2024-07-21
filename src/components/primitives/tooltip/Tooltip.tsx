import { createPortal } from "preact/compat";
import { useRef, useEffect, useState } from "preact/hooks";
import type { ComponentChildren, JSX } from "preact";

interface Props {
  children?: ComponentChildren;
  content?: string;
  offset?: { x: number; y: number };
}

const getRandomColor = () => {
  const color = Math.ceil(Math.random() * 3);
  switch (color) {
    case 1:
      return "bg-primary-blue";
    case 2:
      return "bg-secondary-blue";
    case 3:
      return "bg-primary-lila";
    default:
      return "bg-secondary-blue";
  }
};

export const Tooltip = ({
  children,
  content,
  offset = { x: 20, y: 20 },
}: Props) => {
  const element = useRef({});

  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    function handler(e: JSX.TargetedMouseEvent<HTMLElement>) {
      if (element?.current) {
        const x = e.clientX + offset.x,
          y = e.clientY + offset.y;
        //@ts-expect-error
        element.current.style.transform = `translate(${x}px, ${y}px)`;
        //@ts-expect-error
        element.current.style.visibility = "visible";
      }
    }
    document.addEventListener(
      "mousemove",
      handler as EventListenerOrEventListenerObject,
    );
    return () =>
      document.removeEventListener(
        "mousemove",
        handler as EventListenerOrEventListenerObject,
      );
  }, [offset.x, offset.y]);

  useEffect(() => {
    setBgColor(getRandomColor());
  }, []);

  if (children) {
    return createPortal(
      <div
        className="tooltip"
        //@ts-expect-error
        ref={element}
      >
        {children}
      </div>,
      document.body,
    );
  }
  return createPortal(
    <div
      className="tooltip"
      //@ts-expect-error
      ref={element}
    >
      <div
        className={`tooltip-content rounded-3xl px-3 py-2 font-semibold leading-tight text-white ${bgColor}`}
      >
        {content}
      </div>
    </div>,
    document.body,
  );
};
