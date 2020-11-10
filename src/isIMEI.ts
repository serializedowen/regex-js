import regexMatcherBuilder from './regexMatcherBuilder';

export const isIMEI = regexMatcherBuilder(/^\d{15,17}$/g);
