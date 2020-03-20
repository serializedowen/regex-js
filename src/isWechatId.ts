export const isWechatId = (value: string) =>
  /^[a-zA-Z][-_a-zA-Z0-9]{5,19}$/g.test(value);
