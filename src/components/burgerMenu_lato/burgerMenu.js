import './burgerMenu.scss';
import { Link, useLocation } from "react-router-dom";

export default function BurgerMenu_mobile_first() {
  
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
    var openBurgher = document.querySelectorAll('.linkContainer')
    openBurgher[0].classList.toggle("active")
  }

  // CARRET DOWN E MENU SERVIZI
  function animazioneTendina() {
    // CARRET DOWN CHE GIRA
    document.getElementsByClassName("fa-angle-down")[0].classList.toggle("rotate");
    // MENU A TENDINA CHE SCENDE O ENTRA DI LATO CON IL DISPLAY DEL TELEFONO
    document.getElementsByClassName("dropDownMenu")[0].classList.toggle("active")
  }
  function closeMenu() {
    // CHIUSURA DEL MENU A TENDINA CON LA X DEL BURGHERMENU
    document.getElementsByClassName("dropDownMenu")[0].classList.remove("active")
  }
  
  // CHIUSURA DEI MENU AL CLICK SUI LINK
  function closeMenudaiLink() {
    /// CHIUSURA BURGHER MENU
    var xMenu = document.querySelectorAll(".line1, .line2, .line3")
    for (let i = 0; i < xMenu.length; i++) {
      xMenu[i].classList.remove("active")
    }
    // CHIUSURA MENU DEL BURGHER MENU
    document.querySelectorAll('.linkContainer')[0].classList.remove("active")
  }

  // SCROLL UP DEI LINK
  function scrollUp() {
    window.scrollTo(0, 0)
  }
 
  return (
    <section id="burgermenu">
      <ul className="linkContainer">
        <li onClick={closeMenudaiLink}><span className="decoration">/</span><Link onClick={scrollUp} to="/">Home</Link></li>
        <li onClick={closeMenudaiLink}><span className="decoration">/</span><Link onClick={scrollUp} to="/sicilia">Sicilia</Link></li>
        <li onClick={closeMenudaiLink}><span className="decoration">/</span><Link onClick={scrollUp} to="/casual">Casual</Link></li>
      </ul>
      <div className="hamburger flex" onClick={() => {animazioneBurgherMenu();closeMenu();}}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </section>
  );
};