import { StyledHeader, Logo, Nav, Hero } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
import LogoImage from "../images/logo.svg";
import Illustration from "../images/illustration-mockups.svg";

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src={LogoImage} alt="Hubble logo" />
          <Button>Try it now</Button>
        </Nav>
        <Flex>
          <Hero>
            <div>
              <h1>Build The Community Your Fans Will Love</h1>
              <p>
                Huddle re-imagines the way we build communities. You have a
                voice, but so does your audience. Create connections with your
                users as you engage in genuine discussion.{" "}
              </p>
              <Button bg="#ff0099bb" color="#fff">
                Get Started For Free
              </Button>
            </div>
            <img
              src={Illustration}
              alt="wireframe of desktop and mobile views"
            />
          </Hero>
        </Flex>
      </Container>
    </StyledHeader>
  );
};

export default Header;
