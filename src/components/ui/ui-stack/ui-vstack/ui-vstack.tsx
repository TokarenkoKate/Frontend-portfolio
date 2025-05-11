import { forwardRef } from "react";
import type { UiFlexProps } from "@/types/components/ui-flex";
import { UiFlex } from "../ui-flex/ui-flex";

type VStackProps = Omit<UiFlexProps, "direction">;

export const UiVStack = forwardRef<HTMLElement, VStackProps>(function UiHStack(
  props,
  ref
) {
  return <UiFlex {...props} direction="column" ref={ref} />;
});
