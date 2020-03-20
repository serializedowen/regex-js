export const isMagnetLink = (value: string) =>
  /^magnet:\?xt=urn:btih:[0-9a-fA-F]{40,}.*$/g.test(value);
