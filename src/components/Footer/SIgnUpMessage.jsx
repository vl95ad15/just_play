import RegBtn from "../Buttons/RegBtn";

import './SignUpMessage.css';

function SignUpMessage() {
  
  return(
    <div className="SignUpMessage">
      <span>Sign up to get unlimited songs. No credit card needed.</span>
      <RegBtn buttonText="Sign up free" className="SignUpMessageBtn"/>
    </div>
  )
}

export default SignUpMessage;
