import { useContext } from 'react';
import { Context } from '../../../context/context';
import RegBtn from "../../Buttons/RegBtn";
import SignupForm from "../LoginMenu/SignupForm";
import LoginForm from "../LoginMenu/LoginForm";
import "./LoginBar.css";

const LoginBar = (props) => {
  const {isLogged, logOut, userName} = useContext(Context);

  if (isLogged === false) {
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
  } else {
    return (
      <div className="LogoutBar">
        <p>{userName}</p>
        <button className="LogOutBtn" onClick={logOut}>Log out</button>
      </div>
    )
  }
};

export default LoginBar;
