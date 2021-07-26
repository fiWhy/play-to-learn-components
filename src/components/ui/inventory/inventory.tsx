import { automationEnchancement } from '@play-to-learn/components.hocs.automation-enchancement';
import { useClickOutside } from '@play-to-learn/components.hooks.use-click-outside';
import Text from '@play-to-learn/components.ui.text';
import cn from 'classnames';
import React, {
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState,
} from 'react';
import { InventoryProcessItem, InventoryProps } from './interfaces';
import {
  ArrowIconStyled,
  InventoryBodyStyled,
  InventoryButtonStyled,
  InventoryHeaderStyled,
  InventoryPaginationStyled,
  InventoryWrapperStyled,
  PaginationArrowStyled,
  TreasureIconStyled,
  PaginationNumbersTextStyled,
  InventoryCellsWrapperStyled,
  InventoryCellStyled,
} from './styles';

const Inventory = forwardRef<HTMLDivElement, InventoryProps>(
  ({ className, elementId, items, perPage = 10 }, ref) => {
    const inventoryBodyRef = useRef<HTMLDivElement>(null);
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState(1);
    const totalPages = useMemo(
      () => Math.ceil((items.length || 1) / perPage),
      [items, perPage]
    );

    const handleToggleOpen = useCallback(() => {
      setOpen(!open);
    }, [open]);

    const handleClose = useCallback(() => {
      setOpen(false);
    }, []);

    const handleSetPrevPage = useCallback(() => {
      if (page > 1) {
        setPage(page - 1);
      }
    }, [page]);

    const handleSetNextPage = useCallback(() => {
      if (page < totalPages) {
        setPage(page + 1);
      }
    }, [page, totalPages]);

    useClickOutside(inventoryBodyRef, handleClose);

    const currentPageItems: InventoryProcessItem[] = useMemo(() => {
      const slicedItems = items.slice((page - 1) * perPage, page * perPage);
      return Array(perPage)
        .fill(1)
        .map((_, idx) => ({
          description: slicedItems[idx]?.description,
          view: slicedItems[idx]?.view || (() => <></>),
          filled: !!slicedItems[idx],
        }));
    }, [items, perPage, page]);

    return (
      <InventoryWrapperStyled
        innerRef={ref}
        data-testid={elementId}
        className={cn(className, {
          open,
        })}
      >
        <InventoryButtonStyled direction={'row'} onClick={handleToggleOpen}>
          <TreasureIconStyled name={'ColoredTreasureBox'} size={32} />
          <ArrowIconStyled name={'RiArrowRightSLine'} />
        </InventoryButtonStyled>
        <InventoryBodyStyled innerRef={inventoryBodyRef}>
          <InventoryHeaderStyled>
            <Text secondary type={'Heading-3'}>
              Инвентарь
            </Text>
          </InventoryHeaderStyled>
          <InventoryPaginationStyled direction={'row'} justify={'center'}>
            <PaginationArrowStyled
              secondary
              onClick={handleSetPrevPage}
              name={'RiArrowLeftLine'}
            />
            <PaginationNumbersTextStyled secondary type={'Body-Regular'}>
              {page}/{totalPages}
            </PaginationNumbersTextStyled>{' '}
            <PaginationArrowStyled
              secondary
              onClick={handleSetNextPage}
              name={'RiArrowRightLine'}
            />
          </InventoryPaginationStyled>
          <InventoryCellsWrapperStyled direction={'row'}>
            {currentPageItems.map((item, idx) => (
              <InventoryCellStyled
                filled={item.filled}
                justify={'center'}
                align={'center'}
                key={idx}
              >
                {item.view()}
              </InventoryCellStyled>
            ))}
          </InventoryCellsWrapperStyled>
        </InventoryBodyStyled>
      </InventoryWrapperStyled>
    );
  }
);

export default automationEnchancement<InventoryProps>(Inventory, 'inventory');
