import { AutomationEnchancementProps } from '@play-to-learn/components.hocs.automation-enchancement';
import { ConditionalElement } from '@play-to-learn/components.utils.render';

export interface StoryProps extends AutomationEnchancementProps {
  title: string;
  image?: string;
  fallbackColor: string;
  footer?: ConditionalElement;
  type: 'story' | 'adventure';
}
