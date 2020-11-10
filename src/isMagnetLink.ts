import regexMatcherBuilder from './regexMatcherBuilder';

export const isMagnetLink = regexMatcherBuilder(
  /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/g
);
