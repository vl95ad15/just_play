import "./Form.css";

function LoginForm() {
  

  return (
    <div className="Form">
        <h2>Log in</h2>
        <input type="email" placeholder="Enter your email..." />
        <input type="password" placeholder="Enter your password..." />
        <button type="submit">Log in</button>
    </div>
  )
}

export default LoginForm;
