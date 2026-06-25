import styled from "styled-components";
import { useState, useRef } from "react";
import { device } from "../../pantallas/breakpoints";

interface VideoLscModalProps {
  videoSrc: string;
  onClose: () => void;
}

export const VideoLscModal = ({ videoSrc, onClose }: VideoLscModalProps) => {
  const [reproduciendo, setReproduciendo] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;

    if (reproduciendo) videoRef.current.pause();
    else videoRef.current.play();

    setReproduciendo(!reproduciendo);
  };

  return (
    <Overlay>
      <ModalContenedor>
        <Cerrar onClick={onClose}>✕</Cerrar>
        <Video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        />
        <Controles>
          <ControlBoton onClick={togglePlay}>
            {reproduciendo ? "⏸" : "▶"}
          </ControlBoton>
        </Controles>
      </ModalContenedor>
    </Overlay>
  );
};

// Overlay relativo a la sección
const Overlay = styled.div`
 position: absolute;
  inset: 0;
  z-index: 500;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  pointer-events: none;

   background: rgba(0, 0, 0, 0.5);
   backdrop-filter: blur(6px);

  @media ${device.tablet} {
   background: transparent;
   backdrop-filter: none;
  }
`;

const ModalContenedor = styled.div`
  position: relative;
  pointer-events: auto;
  width: 95%;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
  background: black;
  margin: 20px;

  @media ${device.tablet}  {
    width: 220px;
  }
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;

const Cerrar = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
 color: #f6e9c7;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-weight: bold;
  font-size: 1rem;
  border: 2px solid #f4a009;
  z-index: 2;

  &:hover {
   background: #f4a009;
  }

   @media ${device.tablet} {
    width: 36px;
    height: 36px;
    font-size: 1.2rem;
  }
`;

const Controles = styled.div`
  position: absolute;
  bottom: 12px;
  left: 12px;
`;

const ControlBoton = styled.button`
  background: none;
  color: #f6e9c7;
  border: 2px solid #f4a009;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 14px;

  &:hover {
    background: #f4a009;
   
  }

   @media ${device.tablet} {
     padding: 8px 12px;
    font-size: 16px;
  }
`;