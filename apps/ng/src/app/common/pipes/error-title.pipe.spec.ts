import { ErrorTitlePipe } from './error-title.pipe';

describe('HasErrorPipe', () => {
  it('create an instance', () => {
    const pipe = new ErrorTitlePipe();
    expect(pipe).toBeTruthy();
  });
});
