import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import MenuItem from './Menu/MenuItem';
import SearchBar from './Search/SearchBar';
import LoginBar from './LoginMenu/LoginBar';

import './Header.css';

function Header() {
  return(
    <header>
      <Logo />
      <Menu>
        <MenuItem title={"Home"} pathTo={"/"} />
        <MenuItem title={"My Library"} pathTo={"/library"} />
      </Menu>
      <SearchBar />
      <LoginBar />
    </header>
  )
}

export default Header;
