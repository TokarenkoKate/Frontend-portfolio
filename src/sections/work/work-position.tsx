import { UiIcon } from "@/components/ui/ui-icon/ui-icon";
import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/components/ui/ui-text/ui-text";

type WorkPositionProps = {
  workPosition: {
    title: string;
    company: string;
    duration: string;
    responsibilities: string[];
    icon: React.FC<React.SVGProps<SVGElement>>;
  };
  workPositionIndex: number;
  onClickWorkPosition: (positionIndex: number) => void;
};

export const WorkPosition = ({
  workPosition,
  workPositionIndex,
  onClickWorkPosition,
}: WorkPositionProps) => {
  const { title, company, duration, icon } = workPosition;

  const onClick = () => {
    onClickWorkPosition(workPositionIndex);
  };

  return (
    <UiVStack
      className="work-position-card"
      as="li"
      justify="between"
      onClick={onClick}
      max
    >
      <UiHStack align="center" className="work-position-card__header">
        <UiIcon Svg={icon} className="work-position-card__icon" />
        <UiText variant="body-lg">{title}</UiText>
      </UiHStack>
      <UiVStack max>
        <div className="work-position-card__divider" />
        <UiVStack className="work-position-card__column" align="normal" max>
          <UiHStack className="work-position-card__row" justify="between">
            <UiText>Company</UiText>
            <UiText>{company}</UiText>
          </UiHStack>
          <UiHStack className="work-position-card__row" justify="between">
            <UiText>Duration</UiText>
            <UiText>{duration}</UiText>
          </UiHStack>
        </UiVStack>
      </UiVStack>
    </UiVStack>
  );
};
