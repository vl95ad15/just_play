import { Link } from 'react-router-dom';
import logo from '../../../media/logo.png';
import './Logo.css';

function Logo() {
  return(
    <div className="Logo">
      <Link to={"/"} className="LogoHomeRedirect"><img src={logo} className="AppLogo" alt="logo" /></Link>
    </div>
  )
}

export default Logo;
