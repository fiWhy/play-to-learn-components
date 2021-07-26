import { AutomationEnchancementProps } from '@play-to-learn/components.hocs.automation-enchancement';
import { TextType } from '@play-to-learn/components.theme.palette';

export interface TextProps extends AutomationEnchancementProps {
  maxLength?: number;
  type: TextType;
  className?: string;
  bold?: boolean;
  expandable?: boolean;
  inline?: boolean;
  italic?: boolean;
  light?: boolean;
  title?: string;
  ellipsis?: boolean;
  lineClamp?: boolean;
  highlight?: string[];
  secondary?: boolean;
}

export interface TextStyleProps {
  inline?: boolean;
  type: TextType;
  ellipsis?: boolean;
  maxLength: number;
  expanded: boolean;
  secondary?: boolean;
}
