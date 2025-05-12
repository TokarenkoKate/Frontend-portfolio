import { UiIcon } from "@/components/ui/ui-icon/ui-icon";
import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { UiTag } from "@/components/ui/ui-tag/ui-tag";
import { UiText } from "@/components/ui/ui-text/ui-text";

type SkillCardProps = {
  title: string;
  icon: React.FC<React.SVGProps<SVGElement>>;
  tags: string[];
};

export const SkillCard = ({ title, icon, tags }: SkillCardProps) => {
  return (
    <UiVStack className="skill-card" align="normal">
      <UiHStack className="skill-card__header" align="center">
        <UiHStack className="skill-card__icon" align="center" justify="center">
          <UiIcon Svg={icon} />
        </UiHStack>
        <UiText variant="body-lg">{title}</UiText>
      </UiHStack>
      <UiHStack className="skill-card__tags">
        {tags.map((tag) => {
          return (
            <UiTag variant="dashed" key={tag}>
              {tag}
            </UiTag>
          );
        })}
      </UiHStack>
      <div className="skill-card__side-panel skill-card__side-panel_left" />
      <div className="skill-card__side-panel skill-card__side-panel_right" />
    </UiVStack>
  );
};
