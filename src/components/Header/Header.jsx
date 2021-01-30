import Logo from './Logo/Logo';
import Nav from './Nav/Nav';
import SearchBar from './Search/SearchBar';
import Login from './LoginMenu/Login';

import './Header.css';

function Header() {
  return(
    <header>
      <Logo />
      <Nav />
      <SearchBar />
      <Login />
    </header>
  )
}

export default Header;
