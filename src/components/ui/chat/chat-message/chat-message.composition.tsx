import React from 'react';
import Character from '@play-to-learn/components.ui.character';

import { Default } from './chat-message.stories';

export const ChatMessageDefault = () => (
  <Default
    from={() => <Character type={'robot'} size={50} />}
    date={new Date()}
  />
);
