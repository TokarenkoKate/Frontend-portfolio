import type { PropsWithChildren } from "react";

export type UiTagVariant = "dashed" | "solid";

export type UiTagProps = PropsWithChildren<{
  variant: UiTagVariant;
}>;
