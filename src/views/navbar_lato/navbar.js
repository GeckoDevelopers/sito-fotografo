import './navbar.scss';
import BurgerMenu_lato from '../../components/burgerMenu_lato/burgerMenu';
import LogoNav from '../../components/logoNav/logoNav';

/*  
  ricorda, l'altezza ora è data dalla variabile in index
  anche per i menu a tendina l'altezza ora è data dalla variabile in index
*/

export default function Navbar() {
  return(
    <nav id='navbar'>
      <div className='nav_filler'></div>
      <div className='nav_fixed'>
        <div className='container'>
          <LogoNav/>
          <BurgerMenu_lato/>
        </div>
      </div>
    </nav>
  );
};