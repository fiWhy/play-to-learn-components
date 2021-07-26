import React from 'react';
import Icon from '@play-to-learn/components.ui.icon';

import { Default } from './inventory.stories';

export const InventoryDefault = () => (
  <Default
    perPage={10}
    items={[
      ...Array(5)
        .fill(1)
        .map(() => ({
          description: 'Test',
          view: () => <Icon secondary name={'RiPinterestFill'} />,
        })),
    ]}
  />
);
