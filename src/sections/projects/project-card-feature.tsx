import { UiText } from "@/components/ui/ui-text/ui-text";
import classNames from "classnames";

export const ProjectCardFeature = ({ feature }: { feature: string }) => {
  const parts = feature.split(/(\[\[.*?\]\])/g);

  return parts.map((part, index) => {
    const accentText = part.match(/^\[\[(.*?)\]\]$/);

    return (
      <UiText
        key={index}
        as="span"
        className={classNames("project-card__feature", {
          "project-card__feature_highlight": accentText,
        })}
      >
        {accentText ? accentText[1] : part}
      </UiText>
    );
  });
};
