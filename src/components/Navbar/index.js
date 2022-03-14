import React from 'react';
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import Search from "./search";
const Navbar = () => {
  return (
    <>
    <Nav>
      <NavLink to="/">
        <h1>Logo</h1>
      </NavLink>
      <Bars />
      <NavMenu>
        <Search />
      </NavMenu>
      <NavBtn>
        <NavBtnLink to = "login">
          Login
        </NavBtnLink>
        <NavBtnLink to = "sign-up">
          SignUp
        </NavBtnLink>
      </NavBtn>
    </Nav>
    </>
  )
}

export default Navbar