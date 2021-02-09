import RegBtn from "../../Buttons/RegBtn";
import SignupForm from "../LoginMenu/SignupForm";
import LoginForm from "../LoginMenu/LoginForm";
import "./LoginBar.css";

const LoginBar = () => {
  return (
    <div className="LoginBar">
      <RegBtn
        buttonText="Sign up"
        className="SignUpBtn"
        form={<SignupForm />}
      />
      <RegBtn buttonText="Log in" className="LogInBtn" form={<LoginForm />} />
    </div>
  );
};

export default LoginBar;
