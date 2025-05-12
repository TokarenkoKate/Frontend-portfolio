import WorkIcon from "@/assets/icons/work.svg";
import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { UiIcon } from "@/components/ui/ui-icon/ui-icon";
import { UiText } from "@/components/ui/ui-text/ui-text";
import { WorkPositions } from "./work-positions";
import { WorkResponsibilities } from "./work-responsibilities";
import "./work.scss";
import { useState } from "react";
import { workExperienceItems } from "@/data/general";

export const Work = () => {
  const [activeWorkPositionIndex, setActiveWorkPositionIndex] = useState(0);

  const onSetActivePosition = (positionIndex: number) => {
    setActiveWorkPositionIndex(positionIndex);
  };

  return (
    <UiVStack className="work">
      <UiHStack className="work__header" align="center" max>
        <UiIcon Svg={WorkIcon} />
        <UiText className="work__title" variant="heading-sm" accent>
          Working experience
        </UiText>
      </UiHStack>
      <UiHStack className="work__body">
        <WorkPositions
          activeWorkPositionIndex={activeWorkPositionIndex}
          onClickWorkPosition={onSetActivePosition}
        />
        <WorkResponsibilities
          responsibilities={
            workExperienceItems[activeWorkPositionIndex].responsibilities
          }
        />
      </UiHStack>
    </UiVStack>
  );
};
