import { GiButtonFinger } from "react-icons/gi";
import styled from "styled-components";

const Text = styled.span`
  font-family:arial;
  font-size:1.8rem;
  border-radius: 100%;
  box-shadow: none;
`

export const btnLaunchRay = (active = false) =>
active && (
  <>
    <button className="btnLaunchRay animate__animated animate__backInUp">
      <GiButtonFinger className="animate__animated animate__pulse animate__infinite infinite"  />{" "}
      <Text>
        Lanzar Rayo 
      </Text>
    </button>
  </>
);