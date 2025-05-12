import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { UiTag } from "@/components/ui/ui-tag/ui-tag";
import { UiText } from "@/components/ui/ui-text/ui-text";
import { ProjectCardFeature } from "./project-card-feature";

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  features: string[];
};

export const ProjectCard = ({
  title,
  image,
  description,
  technologies,
  features,
}: ProjectCardProps) => {
  return (
    <UiVStack className="project-card">
      <img
        src={image}
        className="project-card__image"
        alt={`Promo image of ${title} project`}
      />
      <UiVStack className="project-card__body">
        <UiText className="project-card__title" variant="heading-xs">
          {title}
        </UiText>
        <UiText className="project-card__description" tone="secondary">
          {description}
        </UiText>
        <UiHStack className="project-card__technologies">
          {technologies.map((technology) => (
            <UiTag key={technology}>{technology}</UiTag>
          ))}
        </UiHStack>
        <UiVStack as="ul" className="project-card__features">
          {features.map((feature) => {
            return (
              <li key={feature}>
                <ProjectCardFeature feature={feature} />
              </li>
            );
          })}
        </UiVStack>
      </UiVStack>
    </UiVStack>
  );
};
