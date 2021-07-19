import { renderHook, act } from '@testing-library/react-hooks';

let matchMedia: typeof window.matchMedia;
let useThemeType: any;

beforeAll(async () => {
  matchMedia = window.matchMedia;
  window.matchMedia = () =>
    ({
      matches: 'dark',
    } as any);

  ({ useThemeType } = await import('./use-theme-type'));
});

it('should return get dark theme as default', () => {
  const { result } = renderHook(() => useThemeType());
  expect(result.current[0]).toBe('dark');
});

it('should change theme type', async () => {
  const { result } = renderHook(() => useThemeType());

  act(() => {
    result.current[1]('light');
  });

  expect(result.current[0]).toBe('light');
});

afterAll(() => {
  window.matchMedia = matchMedia;
});
