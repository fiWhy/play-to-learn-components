import React from 'react';

import ColoredTreasureBox from './icon-components/colored-treasure-box';
import * as icons from 'react-icons/ri';
import { IconBaseProps } from 'react-icons';

export const iconsList = {
  ...icons,
  ColoredTreasureBox: (props: IconBaseProps) => (
    <ColoredTreasureBox {...props} />
  ),
};
