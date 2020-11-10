import regexMatcherBuilder from './regexMatcherBuilder';

export const isChineseName = regexMatcherBuilder(
  /^(?:[\u4e00-\u9fa5·]{2,16})$/g
);
