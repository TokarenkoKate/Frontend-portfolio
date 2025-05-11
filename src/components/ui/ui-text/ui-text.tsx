import type { CSSProperties, ReactNode } from "react";
import classNames from "classnames";
import type {
  UiTextElement,
  UiTextVariant,
  UiTextTone,
  UiTextAlign,
} from "@/types/components/ui-text";
import "./ui-text.scss";

export interface UiTextProps {
  children: ReactNode;
  as?: UiTextElement;
  variant?: UiTextVariant;
  tone?: UiTextTone;
  align?: UiTextAlign;
  className?: string;
  lineClamp?: number;
}

export const UiText = (props: UiTextProps) => {
  const {
    children,
    as = "p",
    variant = "body-md",
    tone,
    align,
    lineClamp,
    className,
    ...restProps
  } = props;

  const classes = classNames(
    "ui-text",
    variant,
    tone,
    align,
    lineClamp,
    className
  );

  const styleVariables: CSSProperties = {
    "--no-of-lines": lineClamp,
  };

  const UiTextComponent = as;

  return (
    <UiTextComponent className={classes} style={styleVariables} {...restProps}>
      {children}
    </UiTextComponent>
  );
};
