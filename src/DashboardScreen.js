import React, { useState } from "react";
import { alarmNaveFantasma } from "./helpers/alertNaveFantasma";
import { alertNaveRebelde } from "./helpers/alertNaveRebelde";
import { alertSensorAveriado } from "./helpers/alertSensorAveriado";
import { viewLastMinuteData } from "./helpers/viewLastMinuteData";

export default function DashboardScreen() {
  //Variables de control para los sensores y los datos
  const [naveFantasma, setNaveFantasma] = useState(true);
  const [naveRebelde, setNaveRebelde] = useState(true);
  const [sensorAveriado, setSensorAveriado] = useState(true);

  //DAtos de prueba
  const rand = () => Math.round(Math.random() * 120);
  const [lastMinuteData, setLastMinuteData] = useState([
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
    { N: "-", M: rand() },
  ]);
  
  //   const alertNaveFantasma = (condition=false) => condition?<span className="alertDanger">Naves Rebeldes</span>:<span className="alertOk">¡Alerta de nave rebelde!</span>

  return (
    <>
      <div className="dash">
        {/* Se le debe pasar true si se detecta la nave fantasma */}
        <div className="alarmNaveFantasma">
          {alarmNaveFantasma(naveFantasma)}
        </div>

        {/* Muestra la data recibida durante el último minuto*/}
        <div className="last-minute-data">{viewLastMinuteData(lastMinuteData)}</div>

        <div className="alerts">
          {/* Se le debe pasar true si se confirma la presencia de alguna nave rebelde*/}
          <div>{alertNaveRebelde(naveRebelde)}</div>

          {/* Se le debe pasar true si se detecta una avería confirmada de un sensor*/}
          <div>{alertSensorAveriado(sensorAveriado)}</div>
        </div>
      </div>
    </>
  );
}
