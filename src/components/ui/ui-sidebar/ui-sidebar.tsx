import classNames from "classnames";
import type { ReactNode } from "react";
import { useUiSidebar } from "@/utils/hooks/use-sidebar";
import { UiOverlay } from "../ui-overlay/ui-overlay";
import { UiPortal } from "../ui-portal/ui-portal";
import "./ui-sidebar.scss";

interface UiSidebarProps {
  isOpen: boolean;
  lazy?: boolean;
  className?: string;
  onClose: VoidFunction;
  renderChildren(onClose: VoidFunction): ReactNode;
}

const ANIMATION_DELAY = 200;

export const UiSidebar = ({
  isOpen,
  lazy,
  className,
  onClose,
  renderChildren,
}: UiSidebarProps) => {
  const { close, isClosing, isMounting } = useUiSidebar({
    isOpen,
    onClose,
    animationDelay: ANIMATION_DELAY,
  });

  const mods = {
    opened: isOpen,
    isClosing: isClosing,
  };

  if (lazy && !isMounting) {
    return null;
  }

  return (
    <UiPortal>
      <div className={classNames("ui-sidebar", mods, className)}>
        <UiOverlay onClick={close} />
        <div className="ui-sidebar__content">{renderChildren(close)}</div>
      </div>
    </UiPortal>
  );
};
