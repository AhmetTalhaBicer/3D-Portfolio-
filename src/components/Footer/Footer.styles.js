// Footer.styles.js

import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledFooter = styled.footer`
  background-color: #f8f9fa;
  padding: 20px;
  font-family: "Poppins", sans-serif;
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  margin-right: 10px;
`;
