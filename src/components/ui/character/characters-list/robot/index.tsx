import React, { FC } from 'react';
import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';

import {
  RobotStyled,
  EyesWrapperStyled,
  ScreenStyled,
  EyeStyled,
} from './styles';
import { CommonCharacterProps } from '../../interfaces';

const Robot: FC<CommonCharacterProps> = ({ size }) => {
  return (
    <RobotStyled size={size} className="blink">
      <EyesWrapperStyled>
        <ScreenStyled>
          <EyeStyled className="left " />
          <EyeStyled className="right " />
        </ScreenStyled>
      </EyesWrapperStyled>
    </RobotStyled>
  );
};

export default automationEnchancement<CommonCharacterProps>(
  Robot,
  'robot-character'
);
