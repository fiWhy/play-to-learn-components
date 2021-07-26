import { AutomationEnchancementProps } from '@play-to-learn/components.hocs.automation-enchancement';
import { IconBaseProps } from 'react-icons';

import { iconsList } from './constants';

export type IconNames = Exclude<
  keyof typeof iconsList,
  'IconTree' | 'IconType'
>;

export interface IconProps extends AutomationEnchancementProps, IconBaseProps {
  name: IconNames;
  secondary?: boolean;
}
