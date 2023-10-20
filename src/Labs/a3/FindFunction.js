function FindFunction() {
  let numberArray1 = [1, 2, 3, 4, 5];
  let stringArray1 = ["string1", "string2", "string3"];

  const four = numberArray1.find((a) => a === 4);
  const string3 = stringArray1.find((a) => a === "string3");


  return (
    <div>
      <h2>Find Function</h2>
      four = {four}
      <br />
      string3 = {string3}
      <br />
    </div>
  );
}

export default FindFunction;
