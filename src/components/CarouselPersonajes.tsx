import { useState } from "react";
import styled from "styled-components";
import { personajes } from "../data/personajesData";
import { device } from "../pantallas/breakpoints";

export const CarouselPersonajes = () => {
  const [activo, setActivo] = useState(0);

  const personaje = personajes[activo];

  return (
    <div>
      <ButtonContainer>
        {personajes.map((p, i) => (
          <Button
            key={p.nombre}
            $activo={i === activo}
            onClick={() => setActivo(i)}
            $img={p.miniatura}
          ></Button>
        ))}
      </ButtonContainer>
      <ContentContainer>
        <Description>
          <div>
            <h4>{personaje.nombre}</h4>
            <p>{personaje.descripcion}</p>
          </div>
        </Description>
        <Image src={personaje.personajeGrande} />
      </ContentContainer>
    </div>
  );
};

// :::::::::::::::: ================== :::::::::::::::
const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  position: relative;
  z-index: 200;
`;

const Button = styled.button<{ $activo: boolean; $img: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;

  border: ${({ $activo }) =>
    $activo ? "3px solid #f4a009" : "2px solid #9431c0"};

  cursor: pointer;
  transition: all 0.3s ease;

  background-image: url(${({ $img }) => $img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media ${device.laptop} {
    width: 80px;
    height: 80px;
  }

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-color: ${({ $activo }) =>
      $activo ? "transparent" : "#00000040"};
    z-index: 10;
    transition: all 0.3s ease;
  }

  &:hover::before {
    background-color: transparent;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  width: 90%;
  overflow: hidden;
  max-height:800px;

  @media ${device.laptop} {
    width: 800px;
  }
  @media ${device.tablet} {
    width: 1100px;
  }
`;

const Description = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 200;

  div {
    position: absolute;
    width: 400px;
    height: 400px;
    top: 50%;
    left: 200px;
    transform: translateY(-50%);

    h4 {
      color: var(--accent);
      font-size: 2.2rem;
      line-height: 30px;
    }
    p {
      margin: 10px 0 0 0;
      font-size: 1.5rem;
      font-weight: 500;
      line-height: 30px;
    }
  }
`;

const Image = styled.img`
  width: auto;
  height: 1000px;
  position: relative;
  z-index: 50;
`;
