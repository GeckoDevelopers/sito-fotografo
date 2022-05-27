import { Link } from "react-router-dom";
import './burgerMenu.scss';


export default function Navbar() {

  


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
      <ul className="linkContainer">
        <li onClick={closeMenudaiLink}>/ <Link onClick={scrollUp} to="/">vocemenu</Link></li>
        <li onClick={closeMenudaiLink}>/ <Link onClick={scrollUp} to="/">vocemenu</Link></li>
        <li onClick={closeMenudaiLink}>/ <Link onClick={scrollUp} to="/">vocemenu</Link></li>
        <li onClick={closeMenudaiLink}>/ <Link onClick={scrollUp} to="/">vocemenu</Link></li>
        <li onClick={closeMenudaiLink}>/ <Link onClick={scrollUp} to="/">vocemenu</Link></li>
        <li onClick={closeMenudaiLink}>/ <Link onClick={scrollUp} to="/">vocemenu</Link></li>
        <li onClick={closeMenudaiLink}>/ <Link onClick={scrollUp} to="/">vocemenu</Link></li>
      </ul>
      <div className="hamburger flex" onClick={animazioneBurgherMenu}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </section>
  );
};