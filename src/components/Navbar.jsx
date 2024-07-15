
import './Header.css';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
 

  
  return (
    <header className="header">
        <div className="logo">
          Mbah David. 
        </div>
        <nav className="navbar" >
          <a href="/">Home</a>
          <NavLink  to="/about" >About</NavLink>
          <a href="/">Projects</a>
          <NavLink to="/contact" > Contact </NavLink>
          <a href="/public\Mbah Atangana David .mYcv (AutoRecovered).docx" target="_blank" rel="noopener noreferrer" className="button">Resume/CV</a>
        </nav>
    </header>
    
  );
};

export default Navbar;
