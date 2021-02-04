import SignUpBtn from '../../Buttons/SignUpBtn';
import "./LoginBar.css";

const LoginBar = () => {

  return (
    <div className="LoginBar">
      <SignUpBtn buttonText="Sign up" className="SignUpBtn"/>
      <button className="LogInBtn">Log in</button>
    </div>
  );
};

export default LoginBar;
