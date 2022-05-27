import './navbar.scss';
import BurgerMenu from '../components/burgerMenu/burgerMenu';
import { Link } from "react-router-dom";


export default function Navbar() {


  return(
    <nav id='navbar'>
      <div id='logoNav'></div>
      <BurgerMenu/>
    </nav>
  );
};