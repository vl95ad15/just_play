import RegBtn from "../../Buttons/RegBtn";
import "./LoginBar.css";

const LoginBar = () => {
  return (
    <div className="LoginBar">
      <RegBtn buttonText="Sign up" className="SignUpBtn" />
      <RegBtn buttonText="Log in" className="LogInBtn" />
    </div>
  );
};

export default LoginBar;
