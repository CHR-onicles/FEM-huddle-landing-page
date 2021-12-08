import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/styles/Container.styled";
import {GlobalStyles} from "./components/styles/Global";
import Card from "./components/Card";
import Footer from "./components/Footer";
import { content } from "./data";

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    text: 'hsl(208, 11%, 55%)',
    footer: 'hsl(192, 100%, 9%)',
    footerText: 'hsl(193, 100%, 96%)',
    active: 'hsl(322, 100%, 66%)',
  }
}
function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
        <Header />
        <Container>
          {content.map((item) => {
            return <Card key={item.id} {...item}/>
          })}
        </Container>
        <Footer />
    </ThemeProvider>
  );
}

export default App;
