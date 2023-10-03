function FunctionParenthesisAndParameters() {
  const square = (a) => a * a;
  const plusOne = (a) => a + 1;
  const twoSquared = square(2);
  const threePlusOne = plusOne(3);
  return (
    <>
      <h2>Parenthesis and Parameters</h2>
      twoSquared = {twoSquared}
      <br />
      threePlusOne = {threePlusOne}
      <br />
      square(2) = {square(2)}
      <br />
      plusOne(3) = {plusOne(3)}
    </>
  );
}

export default FunctionParenthesisAndParameters;
