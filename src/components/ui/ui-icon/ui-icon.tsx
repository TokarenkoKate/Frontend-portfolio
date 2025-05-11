import { memo } from "react";
import classNames from "classnames";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.FC<React.SVGProps<SVGElement>>;
}

export const UiIcon = memo(function UiIcon(props: IconProps) {
  const { Svg, className, ...otherProps } = props;

  return <Svg className={classNames("ui-icon", className)} {...otherProps} />;
});
