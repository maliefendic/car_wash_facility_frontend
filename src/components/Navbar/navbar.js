import React, {useContext} from "react";
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElement/NavbarElement";

import { WashContext } from "../../context/Provider";
const Navbar = () => {
  const {role, userId, dispatch}=useContext(WashContext)
  return (
    <>
      <Nav>
        <NavLogo to="/">Wash car</NavLogo>
        <Bars />
        <NavMenu>
          <NavLink to="/" activeStyle={{ color: "black" }}>
            Home
          </NavLink>
         {role=="admin"&& <NavLink to="/add-program" activeStyle={{ color: "black" }}>
            Add New Program
          </NavLink>}
          {role=="admin"&&  <NavLink to="/add-user" activeStyle={{ color: "black" }}>
            Add New User
          </NavLink>}
          {role=="admin"&&  <NavLink to="/program" activeStyle={{ color: "black" }}>
            Program
          </NavLink>}
          {role=="admin"&&  <NavLink to="/users" activeStyle={{ color: "black" }}>
            Users
          </NavLink>}
          {role!="admin"&&<NavBtn>
            <NavBtnLink to="/auth">Sign In</NavBtnLink>
          </NavBtn>}
          {role=="admin"&& <NavBtn>
            <NavBtnLink to="/sing-out">Sign Out</NavBtnLink>
          </NavBtn>}
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
