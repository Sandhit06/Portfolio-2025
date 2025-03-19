import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { Bio } from "../data/constants";  // Update the path as necessary
import HeroImg from "../images/HeroImage.jpg";  // Update the path as necessary
import { headContainerAnimation, headContentAnimation, headTextAnimation } from "../utils/motion";  // Update the path as necessary
import Tilt from "react-parallax-tilt";


const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 6px 70px;
  z-index: 1;
  padding-bottom: 60px;

  @media (max-width: 960px) {
    padding: 32px 6px;
    padding-bottom: 10px; 
  }

  @media (max-width: 640px) {
    padding: 0px;
  }

  // clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  align-items: center; 
  margin-top: 45px;  
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    // align-items: center;
    // text-align: center;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  //margin-top: 25px;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px; 

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
     justify-content: center; /* Centering the flexbox content */
    flex-wrap: wrap; /* Avoids text overflow */
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: #915EFF;  // Violet color for the text
  font-weight: 700;  // Make it bolder
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
    padding: 0 32px;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
    padding: 0 40px;
  }
`;

const ResumeButton = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  text-decoration: none;
  display:flex;
  justify-content: center; /* Center text inside */
  align-items: center; /* Align text vertically */


  width: 95%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;

  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

  &:hover {
  transform: scale(1.05);
  transition: all 0.4s ease-in-out;
  box-shadow:  20px 20px 60px #1F2634,
  filter: brightness(1);
  }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
        margin: 0 auto;
    } 
    color: white;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  max-width: 400px;
  max-height: 400px;
  border: 1.5px solid #FFFFFF;

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }
`;

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] pb-5 mx-auto">
      <div className="pt-[120px] max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-3">
        <HeroContainer>
          <motion.div {...headContainerAnimation}>
            <HeroInnerContainer>
              <HeroLeftContainer>
                <motion.div {...headTextAnimation}>
                  <Title>Hi, I'm <br /> {Bio.name}</Title>
                  <TextLoop>
                    I am a
                    <Span >
                      <Typewriter
                        options={{
                          strings: Bio.roles,
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </Span>
                  </TextLoop>
                  <SubTitle>{Bio.description}</SubTitle>
                </motion.div>
                <ResumeButton href={Bio.resume} target="_blank">
                    Check Resume
                  </ResumeButton>
              </HeroLeftContainer>
              <HeroRightContainer>
                <motion.div {...headContentAnimation}>
                   <Tilt> 
                  <Img src={HeroImg} alt="Profile Image" />
                  </Tilt> 
                </motion.div>
              </HeroRightContainer>
            </HeroInnerContainer>
          </motion.div>
        </HeroContainer>
      </div>
    </section>
  );
};

export default Hero;