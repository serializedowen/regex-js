declare function regexMatcherBuilder(regex: RegExp): {
    (value: string): boolean;
    (value: string, useCapture: boolean): RegExpMatchArray;
};
export default regexMatcherBuilder;
