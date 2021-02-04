import SignUpBtn from "../Buttons/SignUpBtn";

import './SignUpMessage.css';

function SignUpMessage() {
  
  return(
    <div className="SignUpMessage">
      <span>Sign up to get unlimited songs. No credit card needed.</span>
      <SignUpBtn buttonText="Sign up free" className="SignUpMessageBtn"/>
    </div>
  )
}

export default SignUpMessage;
