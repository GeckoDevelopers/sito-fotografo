import './logoNav.scss';
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

  // SERVE PER I DISCORSI DI PATH DEI LINK
  const location = useLocation();

  return(
    <section id='logoNav'>
      {location.pathname === "/" 
        ? 
        <a href="#home">
          <img src="img/gecko-nav-v2.png" alt="" />
        </a>
        :
        <Link to="/" className="carta">
          <img src="img/gecko-nav-v2.png" alt="" />
        </Link>
      }
    </section>
  );
};