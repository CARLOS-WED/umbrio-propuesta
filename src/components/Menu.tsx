import styled from "styled-components";

import brujula from "../assets/img/brujula.webp";
import {  useState } from "react";

const MobileMenu = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
     <MobileMenuContainer>
      <MobileMenuWrapper $open={open}>
  <ul>
    <li>
      <a href="#home" onClick={() => setOpen(false)}>
        Home
      </a>
    </li>
    <li>
      <a href="#Corto" onClick={() => setOpen(false)}>
       Umbrío
      </a>
    </li>
    <li>
      <a href="#Juego" onClick={() => setOpen(false)}>
       Juego
      </a>
    </li>
    <li>
      <a href="#Locaciones" onClick={() => setOpen(false)}>
        Locaciones
      </a>
    </li>
    <li>
      <a href="#Personajes" onClick={() => setOpen(false)}>
        Personajes
      </a>
    </li>
    <li>
      <a href="#Making" onClick={() => setOpen(false)}>
        Making
      </a>
    </li>
  </ul>
</MobileMenuWrapper>

      <MenuButtonWrapper onClick={() => setOpen(!open)}>
        <img src={brujula} alt="Menu Icon" />
      </MenuButtonWrapper>
    </MobileMenuContainer>  
    </>
  );
  
};
const DesktopMenu = () => {
  return (
    <DesktopMenuWrapper>
    <ul>
      <li><a href="#home">Home</a></li>
      <li> <a href="#Corto">Umbrío</a></li>
       <li> <a href="#Juego">Juego</a></li>
      <li> <a href="#Locaciones">Locaciones</a></li>
      <li> <a href="#Personajes">Personajes</a> </li>
      <li> <a href="#Making">Making</a> </li>
    </ul>
    </DesktopMenuWrapper>
  );
};

 export const Menu = () => {
  return (
    <>
      <DesktopMenu />
      <MobileMenu />
    </>
  );
};

const MobileMenuContainer = styled.div`
  display: none;

  @media (max-width: 639px) {
    display: block;
  }
`;

const MobileMenuWrapper = styled.nav<{ $open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100vh;
    // Esta variable soft viene el index.css,establecido como variable
  background-color: var(--soft-bg);
  backdrop-filter: blur(10px);

  z-index: 1000;

  transform: translateX(100%);
  opacity: 0;
  pointer-events: none;

  transition:
    transform 0.5s cubic-bezier(0.77, 0, 0.175, 1),
    opacity 0.3s ease;
  transform: ${(props) => props.$open && "translateX(0)"};
  opacity: ${(props) => props.$open && 1};
  /* pointer-events: ${(props) => props.$open && "auto"}; */
`;


const MenuButtonWrapper = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1100;

  background-color: transparent;
  cursor: pointer;

  width: 50px;
  height: 50px;
  padding: 0;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }

  &:hover img {
    transform: rotate(20deg) scale(1.1);
  }

  &:active img {
    transform: scale(0.9);
  }
`;

/*const DesktopMenuWrapper = styled.nav`
  position: absolute;
  top: 20px;
  width: 800px;
  padding: 15px 20px;
  z-index: 1000;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid var(--accent);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--soft-bg);
  backdrop-filter: blur(10px);

   @media (max-width: 639px) {
    display: none;
  }
`;*/

const DesktopMenuWrapper = styled.nav`
  position: absolute;
  top: 20px;
  width: 800px;
  padding: 15px 20px;
  z-index: 1000;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid var(--accent);
  border-radius: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: var(--soft-bg);
  backdrop-filter: blur(10px);

  ul {
    display: flex;
    gap: 40px;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  a {
    color: #f6e9c7;
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 600;
    letter-spacing: 1px;
    position: relative;
    transition: color 0.3s ease;
  }

  a:hover {
    color: var(--accent);
  }

  a::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -5px;
    width: 0;
    height: 2px;
    background: var(--accent);
    transition: width 0.3s ease;
  }

  a:hover::after {
    width: 100%;
  }

  @media (max-width: 639px) {
    display: none;
  }
`;