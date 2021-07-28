import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';
import { Theme } from '@play-to-learn/components.theme.palette';
import Avatar from '@play-to-learn/components.ui.avatar';
import Text from '@play-to-learn/components.ui.text';
import React, { FC, useContext, useMemo } from 'react';
import { ThemeContext } from 'styled-components';
import { UserInfoProps } from './interfaces';
import {
  AvatarWrapperStyled,
  BarWrapperStyled,
  InfoWrapperStyled,
  NameWrapperStyled,
  PercentageWrapperStyled,
  ProgressBarStyled,
  UserInfoWrapperStyled,
} from './styles';

const UserInfo: FC<UserInfoProps> = ({
  name,
  image,
  placeholder,
  healthTotal,
  healthActual,
  staminaActual,
  staminaTotal,
  className,
  elementId,
}) => {
  const theme: Theme = useContext(ThemeContext);
  const percentageHealth = useMemo(
    () => (healthActual * 100) / healthTotal,
    [healthTotal, healthActual]
  );

  const percentageStamina = useMemo(
    () => (staminaActual * 100) / staminaTotal,
    [staminaTotal, staminaActual]
  );
  return (
    <UserInfoWrapperStyled
      elementId={elementId}
      className={className}
      direction={'row'}
    >
      <AvatarWrapperStyled>
        <Avatar type={'big'} src={image} placeholder={placeholder} />
      </AvatarWrapperStyled>
      <InfoWrapperStyled direction={'column'}>
        <NameWrapperStyled>
          <Text type={'Body-Extra-Small'} bold>
            {name}
          </Text>
        </NameWrapperStyled>
        <BarWrapperStyled direction={'row'} align={'center'}>
          <ProgressBarStyled
            total={healthTotal}
            actual={healthActual}
            color={theme.color.secondary.red01}
          />
          <PercentageWrapperStyled>
            <Text type={'Body-Extra-Small'}>{percentageHealth}%</Text>
          </PercentageWrapperStyled>
        </BarWrapperStyled>
        <BarWrapperStyled direction={'row'} align={'center'}>
          <ProgressBarStyled
            total={staminaTotal}
            actual={staminaActual}
            color={theme.color.secondary.blue03}
          />
          <PercentageWrapperStyled>
            <Text type={'Body-Extra-Small'}>{percentageStamina}%</Text>
          </PercentageWrapperStyled>
        </BarWrapperStyled>
      </InfoWrapperStyled>
    </UserInfoWrapperStyled>
  );
};

export default automationEnchancement<UserInfoProps>(UserInfo, 'user-info');
