function ImpliedReturn() {
  const multiply = (a, b) => a * b;
  const fourTimesFive = multiply(4, 5);
  console.log(fourTimesFive);
  return (
    <div>
      <h2>Implied Return</h2>
      fourTimesFive = {fourTimesFive}
      <br />
      multiply(4, 5) = {multiply(4, 5)}
    </div>
  );
}

export default ImpliedReturn;
