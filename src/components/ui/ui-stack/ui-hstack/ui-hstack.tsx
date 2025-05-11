import { forwardRef, type PropsWithChildren } from "react";
import type { UiFlexProps } from "@/types/components/ui-flex";
import { UiFlex } from "../ui-flex/ui-flex";

type HStackProps = Omit<UiFlexProps, "direction">;

export const UiHStack = forwardRef<HTMLElement, PropsWithChildren<HStackProps>>(
  function UiHStack(props, ref) {
    return <UiFlex {...props} direction="row" ref={ref} />;
  }
);
