export const isChineseName = (value: string) =>
  /^(?:[\u4e00-\u9fa5·]{2,16})$/g.test(value);
