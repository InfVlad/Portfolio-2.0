import { Text } from "../../primitives";
import type { SimplifiedProject } from "~/types/projects";

interface Props extends Omit<SimplifiedProject, "slug" | "description"> {
  handleMouseEnter: () => void;
  handleMouseLeave: () => void;
}

export const ProjectRow = ({
  rol,
  technologies,
  title,
  url,
  year,
  handleMouseEnter,
  handleMouseLeave,
}: Props) => {
  return (
    <a
      href={url}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="autoShow group flex w-full justify-between border-b border-b-bline px-24 py-12"
    >
      <div className="space-y-1">
        <Text
          element="h5"
          className="text-2xl font-medium leading-none transition-all delay-100 duration-300 group-hover:translate-x-7 group-hover:text-primary-blue"
        >
          {title}
        </Text>
        <Text
          element="p"
          className="ease font-light text-gray-400 transition-all duration-300 group-hover:translate-x-7"
        >
          {year}
        </Text>
      </div>
      <div className="space-y-1 transition-all duration-300 group-hover:-translate-x-7">
        <Text element="h5" className="text-xl font-medium leading-none">
          {rol}
        </Text>
        <Text element="p" className="font-light text-gray-400">
          {technologies}
        </Text>
      </div>
    </a>
  );
};
