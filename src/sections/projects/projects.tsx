import SkillsIcon from "@/assets/icons/skills.svg";
import { SectionHeader } from "@/components/section-header/section-header";
import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { ProjectsGrid } from "./projects-grid";
import "./projects.scss";

export const Projects = () => {
  return (
    <UiVStack className="projects panel" as="section">
      <SectionHeader
        title="Featured projects"
        icon={SkillsIcon}
        className="projects__header"
      />
      <ProjectsGrid />
    </UiVStack>
  );
};
