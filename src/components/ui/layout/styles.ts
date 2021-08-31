import { styled } from '@play-to-learn/components.theme.palette';

export const HeaderWrapperStyled = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 150px;
  width: 860px;
  margin: 0 auto;
`;
export const FooterWrapperStyled = styled.section`
  display: flex;
`;
export const ContentWrapperStyled = styled.main`
  display: flex;
  height: 100%;
  width: 700px;
  margin: 0 auto;
`;
export const LeftPartWrapperStyled = styled.section`
  flex-direction: column;
  display: flex;
  height: 100%;
  flex: 1;
`;
export const SidebarWrapperStyled = styled.aside`
  transform: translate3d(0 0, 0);
  display: flex;
  height: 100%;
  position: fixed;
  transition: transform .3s;
  will-change: transform;
`;

export const MainWrapperStyled = styled.section`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const LayoutWrapperStyled = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;
