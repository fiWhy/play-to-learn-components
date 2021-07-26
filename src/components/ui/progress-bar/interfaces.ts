import { AutomationEnchancementProps } from '@play-to-learn/components.hocs.automation-enchancement';

export interface ProgressBarProps extends AutomationEnchancementProps {
  total: number;
  actual: number;
  color: string;
}
