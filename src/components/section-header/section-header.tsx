import classNames from "classnames";
import { UiIcon } from "../ui/ui-icon/ui-icon";
import { UiHStack } from "../ui/ui-stack/ui-hstack/ui-hstack";
import { UiText } from "../ui/ui-text/ui-text";
import "./section-header.scss";

type SectionHeaderProps = {
  title: string;
  icon: React.FC<React.SVGProps<SVGElement>>;
  className?: string;
};

export const SectionHeader = ({
  title,
  icon,
  className,
}: SectionHeaderProps) => {
  return (
    <UiHStack
      className={classNames("section-header", className)}
      align="center"
      max
    >
      <UiIcon Svg={icon} className="section-header__icon" />
      <UiText variant="heading-sm" accent className="section-header__title">
        {title}
      </UiText>
    </UiHStack>
  );
};
