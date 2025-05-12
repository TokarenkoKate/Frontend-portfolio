import { projectsItems } from "@/data/general";
import { ProjectCard } from "./project-card";

export const ProjectsGrid = () => {
  return (
    <div className="projects__grid">
      {projectsItems.map(
        ({ title, technologies, description, features, image }) => (
          <ProjectCard
            title={title}
            technologies={technologies}
            description={description}
            features={features}
            image={image}
            key={title}
          />
        )
      )}
    </div>
  );
};
