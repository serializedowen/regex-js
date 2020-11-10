import regexMatcherBuilder from './regexMatcherBuilder';

export const isUnixFilePath = regexMatcherBuilder(/^(\/[^/]+)+$/g);
