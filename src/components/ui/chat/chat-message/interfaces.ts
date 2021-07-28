import { AutomationEnchancementProps } from '@play-to-learn/components.hocs.automation-enchancement';
import { ConditionalElement } from '@play-to-learn/components.utils.render';

export interface ChatMessageProps extends AutomationEnchancementProps {
  from: ConditionalElement;
  date: Date;
  position?: 'left' | 'right';
}
