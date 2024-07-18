import { useEffect } from "preact/hooks";
import renderCanvas from "./renderCanvas";

export const LinesCanvas = () => {
  useEffect(() => {
    renderCanvas();
  }, []);
  return (
    <canvas class="pointer-events-none absolute inset-1 -z-50" id="canvas" />
  );
};
