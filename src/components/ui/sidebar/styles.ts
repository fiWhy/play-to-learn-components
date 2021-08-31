import { css, styled } from '@play-to-learn/components.theme.palette';
import FlexBox from '@play-to-learn/components.ui.flex-box';

export const HeaderWrapperStyled = styled(FlexBox)`
  height: 77px;
  width: 100%;
  max-width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.secondary.grey04};
`;

export const BodyWrapperStyled = styled.div`
  padding: 25px 0 55px 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;

  ${({ theme }) => css`
    ${theme.text.type['Body-Default']}
  `}

  [data-simplebar] {
    padding: 0 45px;
  }
`;

export const SidebarInnerStyled = styled(FlexBox)`
  flex: 1;
  height: 100%;
  width: 100%;
`;

export const SidebarWrapperStyled = styled(FlexBox)`
  position: relative;
  overflow: hidden;
  width: 605px;
  height: 95%;
  color: ${({ theme }) => theme.color.secondary.white};
  background: ${({ theme }) => theme.color.secondary.dark01};
  box-shadow: ${({ theme }) => theme.shadow.sidebar};
  border-radius: ${({ theme }) =>
    `${theme.radius.sidebar} 0 0 ${theme.radius.sidebar}`};
`;
