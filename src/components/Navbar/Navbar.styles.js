// Navbar.styles.js

import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
`;

export const LogoImage = styled.img`
  width: 72px; /* w-18'e karşılık geliyor */
  height: 72px; /* h-18'e karşılık geliyor */
  object-fit: contain;
  margin-right: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  font-size: 1.125rem; /* text-lg'e karşılık geliyor */
`;

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin-right: 20px;

  &.active {
    color: blue; /* isActive durumunda renk değişikliği */
  }
`;
