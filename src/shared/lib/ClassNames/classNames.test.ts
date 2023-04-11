import { classNames } from './classNames';

describe('classNames', () => {
  test('with only first param', () => {
    const expected = 'someClass';
    expect(classNames('someClass')).toBe(expected);
  });

  test('with additional param', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('with mods', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(classNames(
      'someClass',
      { hovered: true, last: false, scrollable: true },
      ['class1', 'class2'],
    )).toBe(expected);
  });

  test('with mods undefined', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(classNames(
      'someClass',
      { hovered: true, last: undefined, scrollable: true },
      ['class1', 'class2'],
    )).toBe(expected);
  });
});
