import { useState } from "preact/hooks";
import { ProjectRow } from "../project-row/ProjectRow";
import { Tooltip } from "../../primitives";
import { simplifiedProjectList } from "~/data/projects";

export const ProjectRowsContainer = () => {
  const [content, setContent] = useState<string | null>(null);

  const handleMouseLeave = () => {
    setContent(null);
  };
  const handleMouseEnter = (description: string) => {
    setContent(description);
  };
  return (
    <div>
      {simplifiedProjectList.map((project) => (
        <ProjectRow
          key={project.slug}
          {...project}
          handleMouseEnter={() => handleMouseEnter(project.description)}
          handleMouseLeave={handleMouseLeave}
        />
      ))}
      {content && <Tooltip content={content}></Tooltip>}
    </div>
  );
};
