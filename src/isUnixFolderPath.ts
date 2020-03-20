export const isUnixFolderPath = (value: string) =>
  /^(\/[^/]+)+\/?$/g.test(value);
