import regexMatcherBuilder from './regexMatcherBuilder';

export const isIPnPort = regexMatcherBuilder(
  /^((ht|f)tps?:\/\/)?[\w-]+(\.[\w-]+)+:\d{1,5}\/?$/g
);
