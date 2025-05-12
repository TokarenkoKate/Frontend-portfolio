import classNames from "classnames";
import { UiHStack } from "../ui-stack/ui-hstack/ui-hstack";
import { UiText } from "../ui-text/ui-text";
import type { UiTagProps } from "@/types/components/ui-tag";
import "./ui-tag.scss";

export const UiTag = ({ children, variant = "solid" }: UiTagProps) => {
  return (
    <UiHStack className={classNames("ui-tag", variant)}>
      <UiText>{children}</UiText>
    </UiHStack>
  );
};
