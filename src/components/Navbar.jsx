
import OutsideClickHandler from 'react-outside-click-handler';
import './Header.css';

import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';

const Navbar = () => {
 
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && "-100%" };
    }
  };
  
  return (
    <header className="header">
        <div className="logo">
          Mbah David. 
        </div>
        <nav className="navbar" >
        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
        <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}> 
          <a href="/">Home</a>
          <NavLink  to="/about" >About</NavLink>
          <a href="/">Projects</a>
          <NavLink to="/contact" > Contact </NavLink>
          <a href="/public\Mbah Atangana David .mYcv (AutoRecovered).docx" target="_blank" rel="noopener noreferrer" className="button">Resume/CV</a>
          </div>
        </OutsideClickHandler>
        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={37} />
        </div>
        </nav>
    </header>
    
  );
};

export default Navbar;
