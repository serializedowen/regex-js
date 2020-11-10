import regexMatcherBuilder from './regexMatcherBuilder';

export const isWindowsFilePath = regexMatcherBuilder(
  /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/g
);
