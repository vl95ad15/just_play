import RegBtn from "../Buttons/RegBtn";
import SignupForm from "../Header/LoginMenu/SignupForm";

import './SignUpMessage.css';

function SignUpMessage(props) {
  
  return(
    <div className="SignUpMessage">
      <span>Sign up to get unlimited songs. No credit card needed.</span>
      <RegBtn buttonText="Sign up free" className="SignUpMessageBtn" form={<SignupForm />} />
    </div>
  )
}

export default SignUpMessage;
