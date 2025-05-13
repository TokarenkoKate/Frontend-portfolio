import type { ReactNode, FC } from "react";
import { createPortal } from "react-dom";

interface UiPortalProps {
  children: ReactNode;
  element?: HTMLElement;
}

export const UiPortal: FC<UiPortalProps> = (props) => {
  const { children, element = document.body } = props;

  return createPortal(children, element);
};
