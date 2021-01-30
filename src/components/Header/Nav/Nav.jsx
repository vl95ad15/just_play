import React from 'react';
import "./Nav.css";

function Nav() {
  return (
      <nav>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/library">My Library</a>
          </li>
        </ul>
      </nav>
  );
}

export default Nav;
