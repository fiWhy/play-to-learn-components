import { ThemeType } from '@play-to-learn/components.theme.palette';

export type ThemeTypeHook = () => [ThemeType, (theme: ThemeType) => void];
