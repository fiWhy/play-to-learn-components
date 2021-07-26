import React from 'react';

import { Default, Circle } from './button.stories';

export const ButtonDefault = () => <Default />;

export const ButtonCircle = () => <Circle btnType={'circle'} />;

export const ButtonCircleWithTip = () => <Circle tip={20} btnType={'circle'} />;
