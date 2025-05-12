import { forwardRef } from "react";
import classNames from "classnames";
import type { UiButtonProps } from "@/types/components/ui-button";
import "./ui-button.scss";

export type UiButtonRef = HTMLButtonElement | null;

export const UiButton = forwardRef<UiButtonRef, UiButtonProps>(
  function UiButton(props, buttonRef) {
    const {
      children,
      variant = "background",
      direction = "middle",
      round,
      className,
      asLink,
      href,
      target = "_blank",
      rel = "noopener noreferrer",
      ...restProps
    } = props;

    const mods = {
      [variant]: variant,
      [direction]: direction,
      round: round,
    };

    if (asLink) {
      if (href) {
        return (
          <a
            href={href}
            target={target}
            rel={rel}
            className={classNames("ui-button", mods, className)}
          >
            {children}
          </a>
        );
      }
    }

    return (
      <button
        type="button"
        className={classNames("ui-button", mods, className)}
        ref={buttonRef}
        {...restProps}
      >
        {children}
      </button>
    );
  }
);
