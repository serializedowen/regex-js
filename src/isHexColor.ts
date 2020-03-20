export const isHexColor = (value: string) =>
  /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/g.test(value);
