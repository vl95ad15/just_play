import "./RegForm.css";

function RegForm(props) {
  if (props.case === "SignUp") {
    return (
      <>
        <h2>Sign up</h2>
        <input type="text" placeholder="Enter your nickname..." />
        <input type="email" placeholder="Enter your email..." />
        <input type="password" placeholder="Enter your password..." />
        <button type="submit">Sign up</button>
      </>
    );
  } else {
    return (
      <>
        <h2>Log in</h2>
        <input type="email" placeholder="Enter your email..." />
        <input type="password" placeholder="Enter your password..." />
        <button type="submit">Log in</button>
      </>
    );
  }

  // return (
  //   <>
  //     <h2>Sign up</h2>
  //     <input type="text" placeholder="Enter your nickname..." />
  //     <input type="email" placeholder="Enter your email..." />
  //     <input type="password" placeholder="Enter your password..." />
  //     <button type="submit">Sign up</button>
  //   </>
  // );
}

export default RegForm;
