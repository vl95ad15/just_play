import logo from './logo.png';
import './Logo.css';

function Logo() {
  return(
    <div className="Logo">
      <img src={logo} className="AppLogo" alt="logo" />
    </div>
  )
}

export default Logo;
