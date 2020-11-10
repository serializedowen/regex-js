function regexMatcherBuilder(regex: RegExp) {
  function regexMatcher(value: string): boolean;
  function regexMatcher(value: string, useCapture: boolean): RegExpMatchArray;
  function regexMatcher(value, useCapture?) {
    if (useCapture) return value.match(regex);
    else return regex.test(value);
  }

  return regexMatcher;
}

export default regexMatcherBuilder;
