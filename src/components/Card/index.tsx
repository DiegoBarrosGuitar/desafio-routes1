import "./styles.css";
import { NavLink, Outlet } from "react-router-dom";

export default function Card() {
  return (
  <>
      <div className="content-containerCard">
        <nav className="navBarCard">
          <NavLink to="computers" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" }>
            Computadores
          </NavLink>
          <NavLink to="eletronics" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" }>
            Eletrônicos
            </NavLink>
          <NavLink to="books" className={({isActive}) => isActive ? "menu-item menu-active" : "menu-item" }>
            Livros
            </NavLink>
        </nav>
      </div>
      <Outlet/>
  </>
  );
}
