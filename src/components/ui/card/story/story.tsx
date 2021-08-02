import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';
import Text from '@play-to-learn/components.ui.text';
import { renderConditionalElement } from '@play-to-learn/components.utils.render';
import cn from 'classnames';
import React, { FC } from 'react';

import { StoryProps } from './interfaces';
import {
  ContentWrapperStyled,
  FooterWrapperStyled,
  InfoWrapperStyled,
  StoryImageStyled,
  StoryWrapperStyled,
  TitleWrapperStyled,
} from './styles';

const Story: FC<StoryProps> = ({
  children,
  className,
  elementId,
  image,
  fallbackColor,
  title,
  footer,
  type,
}) => {
  return (
    <StoryWrapperStyled
      direction={'row'}
      elementId={elementId}
      className={cn(className, {
        [type]: true,
      })}
    >
      <StoryImageStyled
        position={'vertical'}
        size={type === 'adventure' ? 'm' : 's'}
        image={image}
        fallbackColor={fallbackColor}
      />
      <InfoWrapperStyled direction={'column'}>
        {type === 'adventure' && (
          <TitleWrapperStyled>
            <Text type={'Heading-2'}>{title}</Text>
          </TitleWrapperStyled>
        )}
        <ContentWrapperStyled>{children}</ContentWrapperStyled>
        {type === 'story' && footer && (
          <FooterWrapperStyled align={'flex-end'}>
            {renderConditionalElement(footer)}
          </FooterWrapperStyled>
        )}
      </InfoWrapperStyled>
    </StoryWrapperStyled>
  );
};

export default automationEnchancement<StoryProps>(Story, 'story');
