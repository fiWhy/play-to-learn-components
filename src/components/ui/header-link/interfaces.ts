import { AutomationEnchancementProps } from '@play-to-learn/components.hocs.automation-enchancement';
import { IconName } from '@play-to-learn/components.ui.icon';
import { NavLinkProps } from 'react-router-dom';

export interface HeaderLinkProps
  extends AutomationEnchancementProps,
    NavLinkProps {
  icon: IconName;
  innerRef?: any;
}
