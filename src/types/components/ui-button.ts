import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type UiButtonVariant = "background" | "outlined" | "clear";
export type UiButtonDirection = "left" | "middle" | "right";
export type UiButtonSize = "small" | "medium";

type ExternalNavigationProps = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "rel"
>;

export interface UiButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ExternalNavigationProps {
  children?: ReactNode | string;
  variant?: UiButtonVariant;
  size?: UiButtonSize;
  round?: boolean;
  disabled?: boolean;
  asLink?: boolean;
  className?: string;
  direction?: UiButtonDirection;
}
