import type {
  DetailedHTMLProps,
  HTMLAttributes,
  PropsWithChildren,
  ElementType,
} from "react";

export type UiFlexJustify = "start" | "end" | "center" | "between";
export type UiFlexAlign = "start" | "end" | "center" | "normal";
export type UiFlexDirection = "row" | "column";

export type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export interface UiFlexProps extends DivProps, PropsWithChildren {
  className?: string;
  justify?: UiFlexJustify;
  align?: UiFlexAlign;
  direction: UiFlexDirection;
  max?: boolean;
  as?: ElementType;
}
