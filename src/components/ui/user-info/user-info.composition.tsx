import React from 'react';

import { Default } from './user-info.stories';

export const UserInfoDefault = () => (
  <Default
    image={'https://via.placeholder.com/150'}
    placeholder={'AU'}
    name={'Anonymous User'}
    healthTotal={200}
    healthActual={120}
    staminaTotal={100}
    staminaActual={89}
  />
);
