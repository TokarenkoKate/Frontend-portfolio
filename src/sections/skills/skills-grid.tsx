import { skillsItems } from "@/data/general";
import { SkillCard } from "./skill-card";

export const SkillsGrid = () => {
  return (
    <div className="skills__grid">
      {skillsItems.map(({ title, icon, tags }) => (
        <SkillCard {...{ title, icon, tags }} key={title} />
      ))}
    </div>
  );
};
