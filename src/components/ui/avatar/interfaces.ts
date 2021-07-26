import { HTMLAttributes } from 'react';

import { AutomationEnchancementProps } from '@play-to-learn/components.hocs.automation-enchancement';

export type AvatarType = 'small' | 'middle' | 'big';

export interface AvatarProps
  extends AutomationEnchancementProps,
    HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  type?: AvatarType;
  placeholder: string;
}
