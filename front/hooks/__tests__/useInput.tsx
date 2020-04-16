import { act, renderHook } from '@testing-library/react-hooks';
import { useInput } from '../useInput';

describe('useInput', () => {
  it('works fine', () => {
    const { result } = renderHook(() => useInput('hello'));
    expect(result.current.value).toBe('hello');
    act(() => {
      result.current.onChange({ target: { value: 'fuga' } });
    });
    expect(result.current.value).toBe('fuga');
  });
});
