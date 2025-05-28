import { Brush, MonitorCog, Network, SearchCheck } from "lucide-preact";
import type { CoreService } from "~/types/coreService";

export const services: CoreService[] = [
  {
    title: "Fullstack Development",
    description:
      "Crafting robust applications, ensuring optimized and maintainable code.",
    Icon: MonitorCog,
  },
  {
    title: "REST APIs & GraphQL",
    description:
      "Building and integrating REST APIs and GraphQL for efficient back-end communication.",
    Icon: Network,
  },
  {
    title: "SEO Optimization",
    description: "Boosting application visibility with the best SEO practices.",
    Icon: SearchCheck,
  },
  {
    title: "Engaging UI",
    description:
      "Bring to life engaging and user-friendly interfaces with smooth animations.",
    Icon: Brush,
  },
];
