// Footer.jsx
import { StyledFooter, FooterContainer } from "./Footer.styles";

const Footer = () => {
  return (
    <StyledFooter>
      <hr style={{ borderColor: "#c8ced3" }} />

      <FooterContainer>
        <p>
          © 2023 <strong>Adrian Hajdin</strong>. All rights reserved.
        </p>

        <div>
          {/* {socialLinks.map((link) => (
            <StyledLink key={link.name} to={link.link} target="_blank">
              <img
                src={link.iconUrl}
                alt={link.name}
                style={{ width: "30px", height: "30px", objectFit: "contain" }}
              />
            </StyledLink>
          ))} */}
        </div>
      </FooterContainer>
    </StyledFooter>
  );
};

export default Footer;
