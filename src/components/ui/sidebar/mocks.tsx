import React, { FC } from 'react';
import FlexBox from '@play-to-learn/components.ui.flex-box';
import Text from '@play-to-learn/components.ui.text';

export const HeaderComponent: FC = () => {
  return (
    <FlexBox
      style={{
        height: `100%`,
        width: `100%`,
      }}
      justify={'center'}
      align={'center'}
      direction={'row'}
    >
      <Text type={'Heading-2'}>Header</Text>
    </FlexBox>
  );
};
