import { forwardRef } from "react";
import classNames from "classnames";
import type {
  UiFlexAlign,
  UiFlexDirection,
  UiFlexJustify,
  UiFlexProps,
} from "@/types/components/ui-flex";
import "./ui-flex.scss";

const justifyClasses: Record<UiFlexJustify, string> = {
  start: "justify-start",
  end: "justify-end",
  center: "justify-center",
  between: "justify-between",
};

const alignClasses: Record<UiFlexAlign, string> = {
  start: "align-start",
  end: "align-end",
  center: "align-center",
  normal: "align-normal",
};

const directionClasses: Record<UiFlexDirection, string> = {
  row: "direction-row",
  column: "direction-column",
};

export const UiFlex = forwardRef<HTMLElement, UiFlexProps>(function UiFlex(
  props,
  ref
) {
  const {
    as: Tag = "div",
    children,
    justify = "start",
    align = "start",
    direction = "row",
    className,
    ...restProps
  } = props;

  const classes = [
    justify && justifyClasses[justify],
    align && alignClasses[align],
    direction && directionClasses[direction],
    className,
  ];

  return (
    <Tag className={classNames("ui-flex", classes)} {...restProps} ref={ref}>
      {children}
    </Tag>
  );
});
