import React, { FC, useMemo } from 'react';
import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';

import { ProgressBarProps } from './interfaces';
import { ProgressBarWrapperStyled, ProgressBarStatusStyled } from './styles';

const ProgressBar: FC<ProgressBarProps> = ({
  className,
  elementId,
  color,
  actual,
  total,
}) => {
  const percentage = useMemo(() => (actual * 100) / total, [actual, total]);
  return (
    <ProgressBarWrapperStyled data-testid={elementId} className={className}>
      <ProgressBarStatusStyled
        style={{ width: `${percentage}%`, backgroundColor: color }}
      />
    </ProgressBarWrapperStyled>
  );
};

export default automationEnchancement<ProgressBarProps>(
  ProgressBar,
  'progress-bar'
);
