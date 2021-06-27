//Esta función pone el led de alarma en azul o rojo dependiendo de si hay algún peligro o no (true/false)

import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";


export const alarmNaveFantasma = (detectada = false) =>
  detectada ? (
    <AiFillCloseCircle
      color="red"
      size="80px"
      className="animate__animated animate__pulse animate__infinite"
      style={{ border: "2px solid red", borderRadius: "100%" }}
    />
  ) : (
    <AiFillCheckCircle
      color="rgba(0, 38, 255, 0.842)"
      size="80px"
      style={{ border: "2px solid white", borderRadius: "100%" }}
    />
  );