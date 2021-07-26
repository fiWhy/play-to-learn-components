import { styled } from '@play-to-learn/components.theme.palette';
import FlexBox from '@play-to-learn/components.ui.flex-box';
import Icon from '@play-to-learn/components.ui.icon';
import Text from '@play-to-learn/components.ui.text';

export const TreasureIconStyled = styled(Icon)`
  padding-left: 19px;
`;

export const ArrowIconStyled = styled(Icon)`
  padding-left: 10px;
  color: ${({ theme }) => theme.color.secondary.white};
`;

export const InventoryButtonStyled = styled(FlexBox)`
  position: absolute;
  z-index: 1;
  left: 100%;
  top: 0;
  width: 89px;
  height: 57px;
  border-radius: 0 10px 10px 0;
  transform: translateX(0);
  transition: transform 0.3s;

  background: ${({ theme }) => theme.color.secondary.dark01};
  cursor: pointer;

  & > div {
    height: 100%;
    align-items: center;
  }
`;

export const PaginationNumbersTextStyled = styled(Text)`
  padding: 0 8px;
`;

export const PaginationArrowStyled = styled(Icon)`
  cursor: pointer;
`;

export const InventoryCellStyled = styled(FlexBox)<{ filled?: boolean }>`
  width: 60px;
  height: 60px;
  background: ${({ theme }) => theme.color.secondary.dark03};
  border-radius: ${({ theme }) => theme.radius.cell};
  margin-bottom: 22px;

  &:nth-of-type(2n + 2) {
    margin-left: 25px;
  }

  cursor: ${({ filled }) => (filled ? 'pointer' : 'inherit')};
`;

export const InventoryCellsWrapperStyled = styled(FlexBox)`
  padding: 0 30px;
  margin: 22px 0 73px;
  flex-wrap: wrap;
`;

export const InventoryHeaderStyled = styled(FlexBox)`
  padding: 33px 0 19px 0;
  width: 100%;
  align-items: center;
`;

export const InventoryPaginationStyled = styled(FlexBox)`
  width: 100%;
`;

export const InventoryBodyStyled = styled(FlexBox)`
  background: ${({ theme }) => theme.color.secondary.dark01};
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: border-radius 1;
`;

export const InventoryWrapperStyled = styled(FlexBox)`
  position: relative;
  z-index: 2;
  transform: translateX(-205px);
  transition: 0.3s transform;
  width: 205px;
  &.open {
    transform: translateX(0px);

    ${InventoryButtonStyled} {
      transform: translateX(-89px);
    }

    ${InventoryBodyStyled} {
      box-shadow: ${({ theme }) => theme.shadow.main};
      border-radius: 0 20px 20px 0;
    }
  }
`;
