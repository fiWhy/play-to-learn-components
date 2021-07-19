export interface AutomationEnchancementProps {
  className?: string;
  specialName?: string;
  elementId?: string;
  generateId?: boolean;
  uniqueId?: (t: string) => string;
  innerRef?: any;
}
