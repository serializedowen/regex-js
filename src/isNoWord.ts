import regexMatcherBuilder from './regexMatcherBuilder';

export const isNoWord = regexMatcherBuilder(/^[^A-Za-z]*$/g);
