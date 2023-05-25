import { FiMenu } from "react-icons/fi";
import siteIcon from "../assets/site-icon.png"

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#hero">
          <img src={siteIcon} alt="site-logo" id="site-logo"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FiMenu color="#00ff00" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <a className="nav-link" href="#about">
              01.About
            </a>
            <a className="nav-link" href="#skills">
              02.Skills
            </a>
            <a className="nav-link" href="#projects">
              03.Projects
            </a>
            <a className="nav-link" href="#contact">
              04.Contact
            </a>
            <a className="nav-link resume" href="#resume">
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
