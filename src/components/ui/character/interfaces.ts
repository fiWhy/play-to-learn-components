import { AutomationEnchancementProps } from '@play-to-learn/components.hocs.automation-enchancement';

export type CharacterType = 'robot';

export interface CommonCharacterProps extends AutomationEnchancementProps {
  size: number;
}

export interface CharacterProps extends CommonCharacterProps {
  type: CharacterType;
}
