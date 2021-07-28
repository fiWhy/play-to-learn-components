import React, { FC, useMemo } from 'react';
import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';

import { CharacterProps } from './interfaces';
import { CharacterWrapperStyled } from './styles';
import Robot from './characters-list/robot';

const Character: FC<CharacterProps> = ({
  className,
  elementId,
  type,
  size,
}) => {
  const renderedCharacter = useMemo(() => {
    switch (type) {
      case 'robot':
        return <Robot size={size} />;
    }
  }, [type, size]);
  return (
    <CharacterWrapperStyled
      flexType={'inline-flex'}
      elementId={elementId}
      className={className}
    >
      {renderedCharacter}
    </CharacterWrapperStyled>
  );
};

export default automationEnchancement<CharacterProps>(Character, 'character');
