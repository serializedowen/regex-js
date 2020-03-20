export const isWindowsFolderPath = (value: string) =>
  /^[a-zA-Z]:\\(?:\w+\\?)*$/g.test(value);
