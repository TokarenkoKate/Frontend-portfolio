import { projectsItems } from "@/data/general";
import { ProjectCard } from "./project-card";

export const ProjectsGrid = () => {
  return (
    <div className="projects__grid">
      {projectsItems.map(
        ({ title, technologies, description, features, image, link }) => (
          <ProjectCard
            title={title}
            technologies={technologies}
            description={description}
            features={features}
            image={image}
            link={link}
            key={title}
          />
        )
      )}
    </div>
  );
};
