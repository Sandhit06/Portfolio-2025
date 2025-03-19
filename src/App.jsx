import { BrowserRouter } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, Skills, Footer, StarsCanvas } from "./components";

const FooterWrapperContainer = ({ children }) => {
  return <div>{children}</div>;
};

const Wrapper = styled.div`
  padding-bottom: 100px;
  background: linear-gradient(
      38.73deg,
      rgba(204, 0, 187, 0.15) 0%,
      rgba(201, 32, 184, 0) 50%
    ),
    linear-gradient(
      141.27deg,
      rgba(0, 70, 209, 0) 50%,
      rgba(0, 70, 209, 0.15) 100%
    );
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Wrapper>
          <Skills />
          <Experience />
        </Wrapper>
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
        <FooterWrapperContainer>
          <Footer />
        </FooterWrapperContainer>
      </div>
    </BrowserRouter>
  );
}

export default App;
