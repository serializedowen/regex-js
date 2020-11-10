import regexMatcherBuilder from './regexMatcherBuilder';

export const isUnixFolderPath = regexMatcherBuilder(/^(\/[^/]+)+\/?$/g);
