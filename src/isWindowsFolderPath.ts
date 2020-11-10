import regexMatcherBuilder from './regexMatcherBuilder';

export const isWindowsFolderPath = regexMatcherBuilder(
  /^[a-zA-Z]:\\(?:\w+\\?)*$/g
);
