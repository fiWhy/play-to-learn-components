import { AutomationEnchancementProps } from '@play-to-learn/components.hocs.automation-enchancement';

export interface MainProps extends AutomationEnchancementProps {
  image?: string;
  fallbackColor: string;
  position?: 'x' | 'horizontal' | 'y' | 'vertical';
  size: 'l' | 'm' | 's';
}
