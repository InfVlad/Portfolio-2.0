import { useRef } from "preact/hooks";
import { useIntersection } from "~/hooks/useIntersection";
import { CoreServiceCard } from "~/components/composites/core-service-card/CoreServiceCard";
import { services } from "~/data/coreServices";

export const CoreServiceContainer = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(ref, "0px 0px -15% 0px");
  return (
    <section ref={ref} class="autoShow flex flex-wrap gap-4">
      {services.map((service, index) => (
        <CoreServiceCard {...service} isVisible={isVisible} index={index} />
      ))}
    </section>
  );
};
