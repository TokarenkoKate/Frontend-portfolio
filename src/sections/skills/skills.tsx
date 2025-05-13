import SkillsIcon from "@/assets/icons/skills.svg";
import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { SectionHeader } from "@/components/section-header/section-header";
import { SkillsGrid } from "./skills-grid";
import "./skills.scss";

export const Skills = () => {
  return (
    <UiVStack className="skills panel" as="section" align="center">
      <SectionHeader
        title="Skills"
        icon={SkillsIcon}
        className="skills__header"
      />
      <SkillsGrid />
    </UiVStack>
  );
};
