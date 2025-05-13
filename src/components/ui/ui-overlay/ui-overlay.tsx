import classNames from "classnames";
import "./ui-overlay.scss";

interface UiOverlayProps {
  className?: string;
  onClick?: VoidFunction;
}

export const UiOverlay = ({ className, onClick }: UiOverlayProps) => {
  return (
    <div className={classNames("ui-overlay", className)} onClick={onClick} />
  );
};
