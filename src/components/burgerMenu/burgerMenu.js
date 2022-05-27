import { Link, useLocation } from "react-router-dom";
import './burgerMenu.scss';


export default function Navbar() {

  
  // SERVE PER I DISCORSI DI PATH DEI LINK
  const location = useLocation();

  // BURGHER MENU
  function animazioneBurgherMenu() {
    // BURGHER MENU ANIMAZIONE X
    var xMenu = document.querySelectorAll(".line1, .line2, .line3")
    for (let i = 0; i < xMenu.length; i++) {
      xMenu[i].classList.toggle("active")
    }
    // APERTURA MENU BURGHER
    var openBurgher = document.querySelectorAll('#burgermenu')
    openBurgher[0].classList.toggle("active")
  }

  // CARRET DOWN E MENU SERVIZI
  function animazioneTendina() {
    // CARRET DOWN CHE GIRA
    document.getElementById("caret").classList.toggle("rotate");
    // MENU A TENDINA CHE SCENDE O ENTRA DI LATO CON IL DISPLAY DEL TELEFONO
    document.getElementsByClassName("dropdown-services")[0].classList.toggle("servicesMenu")
  }
  function closeMenu() {
    // CHIUSURA DEL MENU A TENDINA CON LA X DEL BURGHERMENU
    document.getElementsByClassName("dropdown-services")[0].classList.remove("servicesMenu")
  }
  
  // CHIUSURA DEI MENU AL CLICK SUI LINK
  function closeMenudaiLink() {
    /// CHIUSURA BURGHER MENU
    var xMenu = document.querySelectorAll(".line1, .line2, .line3")
    for (let i = 0; i < xMenu.length; i++) {
      xMenu[i].classList.remove("active")
    }
    // CHIUSURA MENU DEL BURGHER MENU
    document.querySelectorAll('#burgermenu')[0].classList.remove("active")
  }

  // SCROLL UP DEI LINK
  function scrollUp() {
    window.scrollTo(0, 0)
  }

  return (
    <section id="burgermenu">
      <ul>
        <li onClick={closeMenudaiLink}><Link onClick={scrollUp} to="/">vocemenu</Link></li>
        <li onClick={closeMenudaiLink}><a href="./#about_us-link">vocemenu</a></li>
        <li className="expandedMenu" onClick={animazioneTendina}>
          <span id="servicesMenu" className="nameAndArrow">vocemenu
            <i id="caret" className="fas fa-angle-down"></i>
          </span>
          <ul className="dropdown-services dropDownMenu">
            <li onClick={closeMenudaiLink}>/<a href="/#services-link">vocemenu</a></li>
            <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/full">vocemenu</Link></li>
            <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/individuals">vocemenu</Link></li>
            <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/companies">vocemenu</Link></li>
            <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/design">vocemenu</Link></li>
            <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/support">vocemenu</Link></li>
            <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/content-creation">vocemenu</Link></li>
            <li onClick={closeMenudaiLink}>/<Link onClick={scrollUp} to="/marketing">vocemenu</Link></li>
          </ul>
        </li>
        <li onClick={closeMenudaiLink}><a href="./#projects-link">vocemenu</a></li>
        <li onClick={closeMenudaiLink}><a href="./#contacts">vocemenu</a></li>
      </ul>
      <div className="hamburger flex" onClick={() => {animazioneBurgherMenu();closeMenu();}}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </section>
  );
};