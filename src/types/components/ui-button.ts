import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

export type UiButtonVariant = "background" | "outlined";
export type UiButtonDirection = "left" | "middle" | "right";

type ExternalNavigationProps = Pick<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "rel"
>;

export interface UiButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ExternalNavigationProps {
  children?: ReactNode | string;
  variant?: UiButtonVariant;
  round?: boolean;
  disabled?: boolean;
  asLink?: boolean;
  className?: string;
  direction?: UiButtonDirection;
}
