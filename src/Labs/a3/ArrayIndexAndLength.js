function ArrayIndexAndLength() {
  let numberArray1 = [1, 2, 3, 4, 5];
  const length1 = numberArray1.length;
  const index1 = numberArray1.indexOf(3);
  return (
    <div>
      <h2>Array Index and Length</h2>
      numberArray1 = {numberArray1}
      <br />
      length1 = {length1}
      <br />
      index1 = {index1}
      <br />
    </div>
  );
}

export default ArrayIndexAndLength;
