import { Container } from "./styles/Container.styled";
import { StyledFooter, FooterLogo, SocialIcon, FooterCTA } from "./styles/Footer.styled";
import WhiteLogo from "../images/white-logo.svg";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import EmailIcon from "../images/icon-email.svg";
import LocationIcon from "../images/icon-location.svg";
import PhoneIcon from "../images/icon-phone.svg";
import { Button } from "./styles/Button.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterCTA>
            <h2>Ready To Build Your Community?</h2>
            <Button bg="#ff0099bb" color="#fff">Get Started Here</Button>
        </FooterCTA>
        <div className="wrapper">
          <ul className="footer-info">
            <FooterLogo src={WhiteLogo} alt="white logo" />
            <li>
              <img src={LocationIcon} alt="" />
              <p>
                Location ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua
              </p>
            </li>
            <li>
              <img src={PhoneIcon} alt="" />
              <p>+1-543-123-4567</p>
            </li>
            <li>
              <img src={EmailIcon} alt="" />
              <p>example@huddle.com</p>
            </li>
          </ul>
          <ul className="footer-nav">
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul className="footer-nav">
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <ul className="social-icons">
            <SocialIcon>
              <FaFacebookF />
            </SocialIcon>
            <SocialIcon>
              <FaTwitter />
            </SocialIcon>
            <SocialIcon>
              <FaInstagram />
            </SocialIcon>
          </ul>
          <div className="copyright">
            <p>
            &copy; Copyright {String(new Date().getFullYear())} Huddle. All
            rights reserved
            </p>
            <p>Developed by <a href="https://github.com/CHR-onicles" target="_blank" rel="noopener noreferrer">Divine Anum</a></p>
          </div>
        </div>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
