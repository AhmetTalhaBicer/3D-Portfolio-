// Navbar.jsx

import { Header, LogoImage, Nav, StyledNavLink } from "./Navbar.styles";
import { logo } from "../../assets/images";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Header>
      <NavLink to="/">
        <LogoImage src={logo} alt="logo" />
      </NavLink>
      <Nav>
        <StyledNavLink to="/about" activeClassName="active">
          About
        </StyledNavLink>
        <StyledNavLink to="/projects" activeClassName="active">
          Projects
        </StyledNavLink>
      </Nav>
    </Header>
  );
};

export default Navbar;
