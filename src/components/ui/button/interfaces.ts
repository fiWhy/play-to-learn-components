import { HTMLAttributes } from 'react';
import { AutomationEnchancementProps } from '@play-to-learn/components.hocs.automation-enchancement';

export type BtnType = 'default' | 'rounded' | 'circle';

export interface ButtonProps
  extends AutomationEnchancementProps,
    HTMLAttributes<HTMLButtonElement> {
  btnType?: BtnType;
  tip?: number | string;
}
