function JsonStringify() {
  const squares = [1, 4, 16, 25, 36];
  const loggedIn = true;
  return (
    <div>
      <h2>Json Stringify</h2>
      loggedIn = {loggedIn}
      <br />
      loggedIn = {JSON.stringify(loggedIn)}
      <br />
      squares = {squares}
      <br />
      squares = {JSON.stringify(squares)}
    </div>
  );
}

export default JsonStringify;
