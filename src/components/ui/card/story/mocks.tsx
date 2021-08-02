import Button from '@play-to-learn/components.ui.button';
import FlexBox from '@play-to-learn/components.ui.flex-box';
import Icon from '@play-to-learn/components.ui.icon';
import Text from '@play-to-learn/components.ui.text';
import UsersList from '@play-to-learn/components.ui.users-list';
import React from 'react';

export const Footer = () => (
  <FlexBox
    style={{
      width: '100%',
    }}
    direction={'row'}
  >
    <FlexBox>
      <Button>Начать</Button>
    </FlexBox>
    <FlexBox
      direction={'row'}
      align={'center'}
      style={{
        marginLeft: '25px',
        height: '100%',
      }}
      flex={1}
    >
      <Icon name={'RiChat1Fill'} /> <Text type={'Body-Small'}>(5)</Text>
    </FlexBox>
    <FlexBox
      style={{
        height: '100%',
      }}
      direction={'row'}
      flex={1}
      align={'center'}
      justify={'flex-end'}
    >
      <Text inline type={'Body-Small'}>
        Сейчас играют:
      </Text>
      <FlexBox
        style={{
          marginLeft: '17px',
        }}
      >
        <UsersList
          data={[
            {
              image: 'https://via.placeholder.com/20',
              placeholder: 'RI',
            },
            {
              image: 'https://via.placeholder.com/20',
              placeholder: 'RI',
            },
            {
              image: 'https://via.placeholder.com/20',
              placeholder: 'RI',
            },
            {
              image: 'https://via.placeholder.com/20',
              placeholder: 'RI',
            },
            {
              image: 'https://via.placeholder.com/20',
              placeholder: 'RI',
            },
            {
              image: 'https://via.placeholder.com/20',
              placeholder: 'RI',
            },
          ]}
        />
      </FlexBox>
    </FlexBox>
  </FlexBox>
);
