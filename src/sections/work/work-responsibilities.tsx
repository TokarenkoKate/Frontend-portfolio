import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/components/ui/ui-text/ui-text";

type WorkResponsibilitiesProps = {
  responsibilities: string[];
};

export const WorkResponsibilities = ({
  responsibilities,
}: WorkResponsibilitiesProps) => {
  return (
    <UiVStack className="work__responsibilities">
      <UiText variant="heading-sm" className="work__responsibilities-title">
        Responsibilities:
      </UiText>
      <UiVStack as="ul" className="work__responsibilities-list">
        {responsibilities.map((responsibility) => {
          return (
            <li key={responsibility}>
              <UiText variant="body-lg">{responsibility}</UiText>
            </li>
          );
        })}
      </UiVStack>
    </UiVStack>
  );
};
