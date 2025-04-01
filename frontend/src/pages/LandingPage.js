import React, { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Function to generate random box-shadow values for stars
const generateRandomStars = (count, color) => {
    let stars = "";
    for (let i = 0; i < count; i++) {
      const x = Math.floor(Math.random() * window.innerWidth); // Random x position across the full width
      const y = Math.floor(Math.random() * 2000) - 1000; // Random y position across the full height
      stars += `${x}px ${y}px ${color}${i < count - 1 ? ", " : ""}`; // Add comma except for the last star
    }
    return stars;
  };
// Define keyframes for star animation
const animStar = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
`;

// Asteroid animation keyframes
const asteroidAnimation = keyframes`
  from {
    transform: translate(0, 0);
    opacity: 1;
  }
  to {
    transform: translate(100vw, 100vh); /* Move from one corner to the opposite corner */
    opacity: 0;
  }
`;

// Keyframes for the typewriter effect
const typewriter = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

// Styled components for star animation
const StarLayers = styled.div`
  height: 100vh;
  background: radial-gradient(ellipse at bottom, #001f3f 0%, #000814 100%);
  overflow: hidden;
  position: relative;

  .star-layer {
    position: absolute;
    width: 1px;
    height: 1px;
    background: transparent;

    &::after {
      content: " ";
      position: absolute;
      top: 2000px;
      width: 1px;
      height: 1px;
      background: transparent;
    }
  }

  #stars {
    box-shadow: ${generateRandomStars(1000, "#8ab6ff")}; /* Increase to 1000 small stars */
    animation: ${animStar} 50s linear infinite; /* Apply animation */
    &::after {
      box-shadow: ${generateRandomStars(1000, "#8ab6ff")};
    }
  }

  #stars2 {
    width: 2px;
    height: 2px;
    box-shadow: ${generateRandomStars(800, "#8ab6ff")}; /* Increase to 800 medium stars */
    animation: ${animStar} 100s linear infinite; /* Apply animation */
    &::after {
      box-shadow: ${generateRandomStars(800, "#8ab6ff")};
    }
  }

  #stars3 {
    width: 3px;
    height: 3px;
    box-shadow: ${generateRandomStars(600, "#8ab6ff")}; /* Increase to 600 big stars */
    animation: ${animStar} 150s linear infinite; /* Apply animation */
    &::after {
      box-shadow: ${generateRandomStars(600, "#8ab6ff")};
    }
  }

  #stars4 {
    width: 1px;
    height: 1px;
    box-shadow: ${generateRandomStars(700, "#8ab6ff")}; /* Extra small stars */
    animation: ${animStar} 60s linear infinite; /* Apply animation */
    &::after {
      box-shadow: ${generateRandomStars(700, "#8ab6ff")};
    }
  }

  #stars5 {
    width: 4px;
    height: 4px;
    box-shadow: ${generateRandomStars(100, "#8ab6ff")}; /* Extra big stars */
    animation: ${animStar} 200s linear infinite; /* Apply animation */
    &::after {
      box-shadow: ${generateRandomStars(100, "#8ab6ff")};
    }
  }
`;

// Styled component for asteroids with glowing effect
const Asteroid = styled.div`
  position: fixed;
  width: ${(props) => props.size || "5px"};
  height: ${(props) => props.size || "5px"};
  background-color: ${(props) => props.color || "red"};
  border-radius: 50%;
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  animation: ${asteroidAnimation} ${(props) => props.duration || "5s"} linear infinite;
  z-index: 3;
  box-shadow: 0 0 5px ${(props) => props.color || "red"}, 0 0 10px ${(props) => props.color || "red"};
`;

// Styled component for the typewriter container
const TypewriterContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  width: 40%;
  color: #00ffcc; /* Neon color */
  font-size: 24px;
  font-family: "Courier New", Courier, monospace;
  white-space: nowrap;
  overflow: hidden;
  border-right: 2px solid #00ffcc; /* Blinking cursor */
  animation: ${typewriter} 4s steps(40, end), ${blink} 0.5s step-end infinite;
`;

const LandingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
  color: #fff;
`;

const ContentBox = styled.div`
  position: relative;
  z-index: 3;
  background: rgba(123, 202, 252, 0.14);
  padding: 120px;
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.48);
`;

const Logo = styled.h1`
  font-size: 48px;
  font-weight: bold;
  color: #00d8ff;
  margin-bottom: 10px;
`;

const Tagline = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

const Button = styled.button`
  background-color: ${(props) => (props.primary ? "#00d8ff" : "transparent")};
  color: ${(props) => (props.primary ? "#000" : "#fff")};
  border: ${(props) => (props.primary ? "none" : "1px solid #fff")};
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? "#00b8e6" : "#fff")};
    color: ${(props) => (props.primary ? "#000" : "#000")};
  }
`;

// Styled component for the transparent header
const TransparentHeader = styled(Header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 4;
  background: transparent; /* Fully transparent background */
  backdrop-filter: blur(2px); /* Optional: Adds a blur effect */
`;

function LandingPage() {
  const [asteroids, setAsteroids] = useState([]);

  useEffect(() => {
    const createAsteroid = () => {
      const size = `${Math.random() * 7 + 1}px`; // Random size between 1px and 8px
      const color = Math.random() > 0.5 ? "red" : "blue"; // Randomly choose red or blue
      const top = `${Math.random() * window.innerHeight * 0.5}px`; // Random vertical position (top half of the screen)
      const left = `${Math.random() * window.innerWidth * 0.5}px`; // Random horizontal position (left half of the screen)
      const duration = `${Math.random() * 3 + 2}s`; // Random duration between 2s and 5s

      // Add a new asteroid to the state
      setAsteroids((prevAsteroids) => [
        ...prevAsteroids,
        { id: Date.now() + Math.random(), size, color, top, left, duration },
      ]);
    };

    // Generate asteroids continuously
    const interval = setInterval(() => {
      createAsteroid();
    }, 500); // Create a new asteroid every 500ms

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <TransparentHeader />
      <StarLayers>
        <div id="stars" className="star-layer"></div>
        <div id="stars2" className="star-layer"></div>
        <div id="stars3" className="star-layer"></div>
        <div id="stars4" className="star-layer"></div>
        <div id="stars5" className="star-layer"></div>
        <TypewriterContainer>
          Welcome to TripMates! <br />
          Find your travel buddies. <br />
          Explore the world together.
        </TypewriterContainer>
        <LandingWrapper>
          <ContentBox>
            <Logo>TripMates</Logo>
            <Tagline>Find. Bond. Voyage.</Tagline>
            <ButtonGroup>
              <Button primary onClick={() => (window.location.href = "/login")}>
                Sign In
              </Button>
              <Button onClick={() => (window.location.href = "/signup")}>
                Sign Up
              </Button>
            </ButtonGroup>
          </ContentBox>
        </LandingWrapper>
      </StarLayers>
      <Footer />
    </>
  );
}

export default LandingPage;