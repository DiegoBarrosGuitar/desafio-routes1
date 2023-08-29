import { Link } from "react-router-dom";
import "./styles.css";
import { NavLink } from "react-router-dom";
import HomeImg from "../../images/Home.png" 

export default function Header() {
  return (
    <header>
      <div className="header-content-container container">
       
        <nav className="navBar">
          <NavLink to="/home" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" }>
            Inicio
          </NavLink>
          <NavLink to="/products" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" }>
            Produtos
            </NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" }>
            Sobre nós
            </NavLink>
        </nav>
        <Link to={"/"}>
           <div><img src={HomeImg} alt="" /></div>
          </Link>
      </div>
    </header>
  );
}

