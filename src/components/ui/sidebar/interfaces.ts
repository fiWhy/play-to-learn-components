import { AutomationEnchancementProps } from '@play-to-learn/components.hocs.automation-enchancement';
import { ConditionalElement } from '@play-to-learn/components.utils.render';

export interface SidebarProps extends AutomationEnchancementProps {
  header?: ConditionalElement;
}
