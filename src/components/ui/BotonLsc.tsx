import styled from "styled-components";
import { device } from "../../pantallas/breakpoints";

interface BotonProps {
  onClick: () => void;
  $visible: boolean;
  children?: React.ReactNode;
}

export const BotonLsc = ({ onClick, $visible, children }: BotonProps) => {
  return (
    <StyleBoton onClick={onClick} $visible={$visible}>
      {children || " 👁️ LSC "}
    </StyleBoton>
  )
}
// Celular
const StyleBoton = styled.button<{ $visible: boolean }>`
  position: absolute; 
  width: 70px;
  height: 40px;
  font-size: clamp(0.85rem, 1vw, 1rem);
  top: 20px;
  left: 20px;

  display: ${(props) => (props.$visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #9431c0;
  color: #f6e9c7;
  font-family: "Amarante";
  border: 2px solid #f4a009;
  z-index: 50;

  &:hover {
    background-color: #f6e9c7;
    color: #011740;
  }

    // Tablet
  @media ${device.tablet}  {
    width: 100px;
    height: 50px;
  }
  
  //  laptop y escritorio 
  @media  ${device.laptop} {
    height: 60px;
  }
`;