import React, { FC, useRef, useMemo } from 'react';
import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';
import classnames from 'classnames';

import { TextProps } from './interfaces';
import {
  Heading1Styled,
  Heading2Styled,
  Heading3Styled,
  ParagraphStyled,
} from './styles';

const Text: FC<TextProps> = (
  {
    children,
    elementId,
    className,
    maxLength = 140,
    inline,
    type = 'Body-Default',
    light,
    italic,
    bold,
    title,
    ellipsis,
    lineClamp,
    secondary,
  },
  ref
) => {
  const textRef = useRef(ref);

  const TextElement: any = useMemo(() => {
    switch (type) {
      case 'Heading-1':
        return Heading1Styled;
      case 'Heading-2':
        return Heading2Styled;
      case 'Heading-3':
        return Heading3Styled;
      default:
        return ParagraphStyled;
    }
  }, [type]);

  return (
    <TextElement
      inline={inline}
      title={title}
      ellipsis={ellipsis}
      maxLength={maxLength}
      lineClamp={lineClamp}
      data-testid={elementId}
      secondary={secondary}
      className={classnames([
        className,
        {
          bold,
          light,
          italic,
        },
      ])}
      ref={textRef}
      type={type}
    >
      {children}
    </TextElement>
  );
};

export default automationEnchancement<TextProps>(Text, 'text');
