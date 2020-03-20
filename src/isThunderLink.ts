export const isThunderLink = (value: string) =>
  /^thunderx?:\/\/[a-zA-Z\d]+=$/g.test(value);
