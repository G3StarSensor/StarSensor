//Esta función pone el led de alarma en azul o rojo dependiendo de si hay algún peligro o no (true/false)

import { AiFillAlert } from "react-icons/ai";


export const alarmNaveFantasma = (detectada = false,dateTime) =>
  detectada ? (
    <>
    <AiFillAlert
      color="red"
      size="80px"
      className="animate__animated animate__pulse animate__infinite"
      style={{ border: "2px solid red", borderRadius: "100%" }}
    />
    <span className="danger"> [(Bomber|1200)]</span>
    </>
  ) : (
    <AiFillAlert
      color="rgba(0, 38, 255, 0.842)"
      size="80px"
      style={{ border: "2px solid blue", borderRadius: "100%" }}
    />
  );