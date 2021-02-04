import "./RegForm.css";

function RegForm() {
  return (
    <>
      <h2>Sign up</h2>
      <input type="text" placeholder="Enter your nickname..."></input>
      <input type="email" placeholder="Enter your email..."></input>
      <input type="password" placeholder="Enter your password..."></input>
      <button type="submit">Sign up</button>
    </>
  );
};

export default RegForm;
