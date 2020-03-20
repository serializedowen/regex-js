export const isWindowsFilePath = (value: string) =>
  /^[a-zA-Z]:\\(?:\w+\\)*\w+\.\w+$/g.test(value);
