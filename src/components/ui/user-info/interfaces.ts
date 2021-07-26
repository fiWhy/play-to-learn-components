import { AutomationEnchancementProps } from '@play-to-learn/components.hocs.automation-enchancement';

export interface UserInfoProps extends AutomationEnchancementProps {
  image: string;
  placeholder: string;
  healthTotal: number;
  healthActual: number;
  staminaTotal: number;
  staminaActual: number;
  name: string;
}
