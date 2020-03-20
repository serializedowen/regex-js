export const isBankCard = (value: string) => /^[1-9]\d{9,29}$/g.test(value);
