import styled from "styled-components";
import fondo from "../assets/img/fondo5.webp";
import espectro from "../assets/img/espectro.webp";
// import { AnimatedButton } from "./AnimatedButton";

export const Videojuego = () => {
  return (
    <VideoJuegoWrapper>
      <UmbrioBg>
        <span>UMBRÍO</span>
      </UmbrioBg>{" "}
      <CharacterBg>
        <img src={espectro} alt="Espectro" />
      </CharacterBg>
    </VideoJuegoWrapper>
  );
};

const VideoJuegoWrapper = styled.section`
  position: relative;
  background: url(${fondo});
  background-color: blue;
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;
  width: 100%;
  min-height: 100vh;
  padding: 100px 20px;
  display: flex;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    z-index: 10;
    background: linear-gradient(
      to bottom,
      rgb(0, 0, 0),
      transparent,
      transparent
    );
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      transparent,
      transparent,
      rgb(0, 0, 0)
    );
    z-index: 200;
  }
`;
// const Container = styled.div`
// position: relative;
// z-index: 20;

// `

const UmbrioBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  font-size: 25rem;
  z-index: 50;

  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 0 20px #a35811;
`;
const CharacterBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;

  z-index: 100;
  overflow: hidden;
  img {
    width: 400px;
    height: auto;
    margin-top: 50px;
    @media (min-width: 768px) {
      width: 600px;
    }
    @media (min-width: 1024px) {
    width : 800px
    }
  }
`;
