declare const isBankCard: {
    (value: string): boolean;
    (value: string, useCapture: boolean): RegExpMatchArray;
};
export { isBankCard };
