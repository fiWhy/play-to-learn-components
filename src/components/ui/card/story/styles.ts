import { styled } from '@play-to-learn/components.theme.palette';
import FlexBox from '@play-to-learn/components.ui.flex-box';
import Card from '@play-to-learn/components.ui.card.main';

export const ContentWrapperStyled = styled(FlexBox)`
  flex: 1;
`;

export const TitleWrapperStyled = styled(FlexBox)`
  margin-bottom: 30px;
`;

export const FooterWrapperStyled = styled(FlexBox)`
  height: 37px;
  width: 100%;
`;

export const InfoWrapperStyled = styled(FlexBox)`
  flex: 1;
  margin-left: 30px;
  height: 100%;
  width: 100%;
`;

export const StoryImageStyled = styled(Card)``;

export const StoryWrapperStyled = styled(FlexBox)`
  width: 100%;

  &.adventure {
    height: 252px;
  }

  &.story {
    height: 190px;
  }
`;
