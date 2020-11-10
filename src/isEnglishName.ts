import regexMatcherBuilder from './regexMatcherBuilder';

export const isEnglishName = regexMatcherBuilder(
  /(^[a-zA-Z]{1}[a-zA-Z\s]{0,20}[a-zA-Z]{1}$)/g
);
