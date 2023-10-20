const ConditionalOutputIfElse = () => {
    const loggedIn = true;
    if(loggedIn) {
      return (<h2>Welcome If Else</h2>);
    } else {
      return (<h2>Please login If Else</h2>);
    }
   };
   export default ConditionalOutputIfElse;