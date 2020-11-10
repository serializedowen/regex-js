import regexMatcherBuilder from './regexMatcherBuilder';

export const isWechatId = regexMatcherBuilder(/^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g);
