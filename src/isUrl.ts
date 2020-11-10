import regexMatcherBuilder from './regexMatcherBuilder';

export const isUrl = regexMatcherBuilder(
  /^(((ht|f)tps?):\/\/)?[\w-]+(\.[\w-]+)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/g
);
