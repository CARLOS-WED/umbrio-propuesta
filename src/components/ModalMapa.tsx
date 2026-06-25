import styled from "styled-components";

import mapaTunja from "../assets/img/mapaTunja.webp";
import { lugares } from "../data/mapaData";
import pin from "../assets/img/pin.webp";
import { device } from "../pantallas/breakpoints";
import { useState } from "react";
import { XIcon } from "lucide-react";
interface ModalMapaProps {
    open: boolean;
    onClose: () => void;
}

export const ModalMapa = ({ open, onClose }: ModalMapaProps) => {
    const [activo, setActivo] = useState<number | null>(null);
    if (!open) return null;

    return (
        <Overlay onClick={onClose}>
            <Modal onClick={(e) => e.stopPropagation()}>

                <Cerrar onClick={onClose}>
                    <XIcon size={26} />
                </Cerrar>


                <MapaWrapper onClick={() => setActivo(null)}>
                    <Mapa src={mapaTunja} alt="Mapa" />
                    {lugares.map((lugar) => (
                        <Pin
                            key={lugar.id}
                            onClick={(e) => {
                                e.stopPropagation();
                                setActivo(lugar.id);
                            }}
                            style={{ top: lugar.top, left: lugar.left }}
                        >

                            <Tooltip
                                style={{
                                    opacity: activo === lugar.id ? 1 : 0,
                                    transform: activo === lugar.id
                                        ? "translateX(-50%) scale(1)"
                                        : "translateX(-50%) scale(0)"
                                }}
                            >
                                <img src={lugar.imagen} alt={lugar.nombre} />
                                <h4>{lugar.nombre}</h4>
                            </Tooltip>
                        </Pin>
                    ))}


                </MapaWrapper>
            </Modal>
        </Overlay>
    );
};

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: #011740;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 900;
`;

const Modal = styled.div`
  width: 95vw;
  height: auto; 

  max-height: 90vh;
  padding: 10px;

  
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media ${device.tablet} {
    padding: 15px;
    height: 88vh;
  }

  
  @media ${device.laptop} {
    width: 90vw;
    height: 90vh;
    padding: 20px;
  }

  
  @media ${device.desktop} {
    width: 80vw;
    height: 85vh;
  }
`;

const MapaWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 666 / 375;
  max-height: 90vh;
`;

const Mapa = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Pin = styled.div`
  position: absolute;

  width: 24px;  
  height: 24px;

  background-image: url(${pin});
  background-size: contain;
  background-repeat: no-repeat;

  transform: translate(-50%, -100%);
  z-index: 20;

  transition: transform 0.3s ease;

  &:active {
    transform: translate(-50%, -110%) scale(1.1);
  }

  @media ${device.tablet} {
    width: 26px;
    height: 26px;
  }

  @media ${device.laptop} {
    width: 28px;
    height: 28px;
  }

  @media ${device.desktop} {
    width: 30px;
    height: 30px;
  }
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%) scale(0);

  background: #011740;
  color: #f6e9c7;

  border-radius: 6px;
  padding: 5px;
  width: 100px;

  text-align: center;

  opacity: 0;
  pointer-events: none;

  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
  }

  h4 {
    font-size: 0.6rem;
  }

  @media ${device.tablet} {
    width: 120px;

    img {
      height: 70px;
    }

    h4 {
      font-size: 0.7rem;
    }
  }

  @media ${device.laptop} {
    width: 140px;

    img {
      height: 80px;
    }

    h4 {
      font-size: 0.8rem;
    }
  }
`;

const Cerrar = styled.button`
  position: absolute;
  right: 20px;
  top: 10px;
  color: #f6e9c7;
  background-color: #8c9eb1;
  border-radius: 50%;
  border: none;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  z-index: 500;
  &:hover {
    background-color: #f4a009;
    color: #f6e9c7;
    transform: scale(1.1);
  }
`;