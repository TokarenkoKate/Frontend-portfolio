import { UiHStack } from "@/components/ui/ui-stack/ui-hstack/ui-hstack";
import { UiVStack } from "@/components/ui/ui-stack/ui-vstack/ui-vstack";
import { UiText } from "@/components/ui/ui-text/ui-text";
import { gitContributions } from "@/data/git-contributions";

export const AboutGit = () => {
  return (
    <UiVStack className="about__contributions" max align="normal">
      <UiHStack className="about__section-header">
        <UiText variant="heading-xs" accent>
          Git contributions
        </UiText>
      </UiHStack>
      <UiVStack className="about__section-body">
        <table>
          <tbody>
            {gitContributions.map((row, rowIndex) => {
              return (
                <tr className="about__contributions-row" key={rowIndex}>
                  {row.map((dayLevel, dayIndex) => (
                    <td
                      key={`${rowIndex}_${dayIndex}`}
                      className="about__contributions-day"
                      data-level={dayLevel}
                    />
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </UiVStack>
    </UiVStack>
  );
};
