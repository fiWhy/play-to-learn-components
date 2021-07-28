import React, { FC } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';
import { renderConditionalElement } from '@play-to-learn/components.utils.render';

import { SidebarProps } from './interfaces';
import {
  SidebarWrapperStyled,
  HeaderWrapperStyled,
  BodyWrapperStyled,
  SidebarInnerStyled,
} from './styles';

const Sidebar: FC<SidebarProps> = ({
  children,
  className,
  elementId,
  header,
}) => {
  return (
    <SidebarWrapperStyled elementId={elementId} className={className}>
      <SidebarInnerStyled>
        {header && (
          <HeaderWrapperStyled direction={'row'}>
            {renderConditionalElement(header)}
          </HeaderWrapperStyled>
        )}
        <BodyWrapperStyled>
          <SimpleBar>{children}</SimpleBar>
        </BodyWrapperStyled>
      </SidebarInnerStyled>
    </SidebarWrapperStyled>
  );
};

export default automationEnchancement<SidebarProps>(Sidebar, 'sidebar');
