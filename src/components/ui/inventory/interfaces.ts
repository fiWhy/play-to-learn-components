import { AutomationEnchancementProps } from '@play-to-learn/components.hocs.automation-enchancement';

export interface InventoryItem {
  description?: string;
  view: () => JSX.Element;
}

export interface InventoryProcessItem extends InventoryItem {
  filled: boolean;
}

export interface InventoryProps extends AutomationEnchancementProps {
  perPage: number;
  items: InventoryItem[];
}
