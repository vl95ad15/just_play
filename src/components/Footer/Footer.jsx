import { useContext } from 'react';
import { Context } from '../../context/context'
import Player from '../Player/Player';
import SignUpMessage from "./SignUpMessage"

import './Footer.css';

function Footer() {
  const context = useContext(Context)
  const { isLogged } = context;

  if(isLogged === false) {
    return(
      <footer>
        <SignUpMessage />
      </footer>
    )
  } else {
    return(
      <footer>
        <Player />
      </footer>
    )
  }
}

export default Footer;