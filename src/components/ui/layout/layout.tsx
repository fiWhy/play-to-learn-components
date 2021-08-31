import React, { FC } from 'react';
import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';
import { renderConditionalElement } from '@play-to-learn/components.utils.render';
import Sidebar from '@play-to-learn/components.ui.sidebar';
import FlexBox from '@play-to-learn/components.ui.flex-box';

import { LayoutProps } from './interfaces';
import {
  LayoutWrapperStyled,
  HeaderWrapperStyled,
  ContentWrapperStyled,
  FooterWrapperStyled,
  SidebarWrapperStyled,
  LeftPartWrapperStyled,
  MainWrapperStyled,
} from './styles';

const Layout: FC<LayoutProps> = ({
  children,
  className,
  elementId,
  renderHeader,
  renderSidebar,
  isSidebarOpen,
}) => {
  return (
    <LayoutWrapperStyled data-testid={elementId} className={className}>
      <MainWrapperStyled>
        <LeftPartWrapperStyled>
          {renderHeader && (
            <HeaderWrapperStyled>
              {renderConditionalElement(renderHeader)}
            </HeaderWrapperStyled>
          )}
          <ContentWrapperStyled>{children}</ContentWrapperStyled>
        </LeftPartWrapperStyled>
        {renderSidebar && (
          <SidebarWrapperStyled>
            <Sidebar>{renderConditionalElement(renderSidebar)}</Sidebar>
          </SidebarWrapperStyled>
        )}
      </MainWrapperStyled>

      <FooterWrapperStyled></FooterWrapperStyled>
    </LayoutWrapperStyled>
  );
};

export default automationEnchancement<LayoutProps>(Layout, 'layout');
