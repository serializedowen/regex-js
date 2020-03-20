export const isUnixFilePath = (value: string) => /^(\/[^/]+)+$/g.test(value);
