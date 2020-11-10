import regexMatcherBuilder from './regexMatcherBuilder';
const isBankCard = regexMatcherBuilder(/^[1-9]\d{9,29}$/g);
export { isBankCard };
