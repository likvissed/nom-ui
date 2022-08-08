import { EmptyValuePipe } from './empty-value.pipe';

describe('EmptyValuePipe', () => {
  let pipe: EmptyValuePipe;
  const nameEmpty = 'Отсутствует';
  const nameExample = 'Text';

  beforeEach(() => {
    pipe = new EmptyValuePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it(`should return value "${nameEmpty}" for null`, () => {
    expect(pipe.transform(null)).toBe(nameEmpty);
  });

  it(`should return value "${nameEmpty}" for empty string`, () => {
    expect(pipe.transform('')).toBe(nameEmpty);
  });

  it('should return correct name value with not empty string', () => {
    expect(pipe.transform(nameExample)).toBe(nameExample);
  });
});
