import regexMatcherBuilder from './regexMatcherBuilder';

export const isHexColor = regexMatcherBuilder(
  /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g
);
