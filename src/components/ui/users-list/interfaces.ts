import { AutomationEnchancementProps } from '@play-to-learn/components.hocs.automation-enchancement';

export interface UsersListElement {
  image: string;
  placeholder: string;
  payload?: any;
}

export interface UsersListProps extends AutomationEnchancementProps {
  data: UsersListElement[];
  avatarSize?: number;
  onSelect?: (payload: any) => void;
}
