import './logoNav.scss';
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {

  // SERVE PER I DISCORSI DI PATH DEI LINK
  const location = useLocation();

  return(
    <section id='logoNav'>
        <Link to="/" className="carta">
          <h1>Carlo Livio Photo-gallery</h1>
        </Link>
    </section>
  );
};