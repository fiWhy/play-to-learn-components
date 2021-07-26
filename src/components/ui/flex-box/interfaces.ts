import React from 'react';
import { AutomationEnchancementProps } from '@play-to-learn/components.hocs.automation-enchancement';

export interface FlexBoxElementProps {
  justify?: 'center' | 'flex-start' | 'flex-end';
  align?: 'center' | 'flex-start' | 'flex-end';
  direction?: 'row' | 'column';
  flex?: number;
  colSpace?: number | string;
  rowSpace?: number | string;
}

export interface FlexBoxProps
  extends AutomationEnchancementProps,
    FlexBoxElementProps,
    React.HTMLAttributes<HTMLDivElement> {}
