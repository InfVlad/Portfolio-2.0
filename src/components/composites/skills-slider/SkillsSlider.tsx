import { useRef } from "preact/hooks";
import { useIntersection } from "~/hooks/useIntersection";
import { useAnimatedValue } from "~/hooks/useAnimatedValue";
import { skillsList } from "~/data/skillsList";

export const SkillsSlider = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(ref, "0px 0px -200px 0px");
  const numberOfElements = skillsList.length;
  const translateZ = useAnimatedValue(150, 350, 400, isVisible);

  return (
    <section
      class="bg-gray-4 autoShow relative flex min-h-[20rem] w-full flex-col overflow-hidden text-center"
      style={{
        "--viewEnd": "70%",
        "--viewStart": "10%",
      }}
    >
      <div
        class="slider"
        ref={ref}
        style={{
          "--quantity": numberOfElements,
        }}
      >
        {skillsList.map(({ title, image }, index) => (
          <div
            className="item"
            style={{
              "--position": index,
              "--translateZ": `${translateZ}px`,
            }}
            title={title}
          >
            <img
              src={image}
              alt={title}
              height={80}
              width={80}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
