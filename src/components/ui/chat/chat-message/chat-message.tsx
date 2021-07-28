import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';
import { renderConditionalElement } from '@play-to-learn/components.utils.render';
import Text from '@play-to-learn/components.ui.text';
import { format } from 'date-fns';
import cn from 'classnames';

import React, { FC } from 'react';

import { ChatMessageProps } from './interfaces';
import {
  AvatarWrapperStyled,
  ChatMessageWrapperStyled,
  DateWrapperStyled,
  InfoWrapperStyled,
  MessageWrapperStyled,
  DialogBoxWrapperStyled,
} from './styles';

const ChatMessage: FC<ChatMessageProps> = ({
  children,
  className,
  elementId,
  from,
  date,
  position = 'left',
}) => {
  return (
    <ChatMessageWrapperStyled
      direction={'row'}
      flex={1}
      elementId={elementId}
      className={cn(className, {
        [position]: true,
      })}
    >
      <AvatarWrapperStyled>
        {renderConditionalElement(from)}
      </AvatarWrapperStyled>
      <InfoWrapperStyled flex={1} direction={'row'}>
        <DialogBoxWrapperStyled>
          <DateWrapperStyled align={'flex-end'}>
            <Text type={'Body-Small'}>{format(date, 'kk:mm')}</Text>
          </DateWrapperStyled>
          <MessageWrapperStyled>{children}</MessageWrapperStyled>
        </DialogBoxWrapperStyled>
      </InfoWrapperStyled>
    </ChatMessageWrapperStyled>
  );
};

export default automationEnchancement<ChatMessageProps>(
  ChatMessage,
  'chat-message'
);
