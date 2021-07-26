import React from 'react';

import { Default } from './avatar.stories';

export const AvatarDefault = () => (
  <Default
    src={'https://cs5-1.4pda.to/16630063.png'}
    type={'big'}
    placeholder={'DB'}
  />
);

export const AvatarWithPlaceholder = () => (
  <Default type={'big'} placeholder={'DB'} />
);
