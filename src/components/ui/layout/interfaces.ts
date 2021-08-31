import { AutomationEnchancementProps } from '@play-to-learn/components.hocs.automation-enchancement';
import { ConditionalElement } from '@play-to-learn/components.utils.render';

export interface LayoutProps extends AutomationEnchancementProps {
  isSidebarOpen?: boolean;
  renderSidebar?: ConditionalElement;
  renderHeader?: ConditionalElement;
}
