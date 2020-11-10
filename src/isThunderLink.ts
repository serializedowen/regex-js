import regexMatcherBuilder from './regexMatcherBuilder';

export const isThunderLink = regexMatcherBuilder(
  /^thunderx?:\/\/[a-zA-Z\d]+=$/g
);
