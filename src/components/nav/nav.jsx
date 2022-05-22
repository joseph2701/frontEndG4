import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "../dropdown/dropdown";
import "./nav.scss";
import { useSelector } from "react-redux";

export function Nav() {
  const [toggleLogin, setToggleLogin] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const isLogin = useSelector((state) => state.auth.isLogin);

  return (
    <nav className="nav">
      <ul>        
        <li>
          <NavLink to="/home" activeClassName="is-active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" activeClassName="is-active">
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink to="/delivery" activeClassName="is-active">
            Delivery
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="is-active">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="is-active">
            About
          </NavLink>
        </li>        
      </ul>
    </nav>
  );
}
