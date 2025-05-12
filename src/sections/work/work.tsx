import { useState } from "react";
import WorkIcon from "@/assets/icons/work.svg";
import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { SectionHeader } from "@/components/section-header/section-header";
import { WorkPositions } from "./work-positions";
import { WorkResponsibilities } from "./work-responsibilities";
import { workExperienceItems } from "@/data/general";
import "./work.scss";

export const Work = () => {
  const [activeWorkPositionIndex, setActiveWorkPositionIndex] = useState(0);

  const onSetActivePosition = (positionIndex: number) => {
    setActiveWorkPositionIndex(positionIndex);
  };

  return (
    <UiVStack className="work panel" as="section">
      <SectionHeader
        title="Working experience"
        icon={WorkIcon}
        className="work__header"
      />
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
