import type { CSSProperties } from "react";
import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import { workExperienceItems } from "@/data/general";
import { WorkPosition } from "./work-position";

type WorkPositionsProps = {
  activeWorkPositionIndex: number;
  onClickWorkPosition: (positionIndex: number) => void;
};

export const WorkPositions = ({
  activeWorkPositionIndex,
  onClickWorkPosition,
}: WorkPositionsProps) => {
  const styleVariables = {
    "--working-position-index": activeWorkPositionIndex,
  } as CSSProperties;

  return (
    <UiHStack max>
      <UiVStack
        as="ul"
        className="work__positions"
        style={styleVariables}
        align="normal"
        max
      >
        {workExperienceItems.map((workPosition, workPositionIndex) => {
          return (
            <WorkPosition
              workPosition={workPosition}
              onClickWorkPosition={onClickWorkPosition}
              workPositionIndex={workPositionIndex}
              key={workPosition.title}
            />
          );
        })}
      </UiVStack>
      <div className="work__positions-tab-panel" />
    </UiHStack>
  );
};
