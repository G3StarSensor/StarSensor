import React, { useState } from "react";
import { alarmNaveFantasma } from "./helpers/alertNaveFantasma";
import { alertNaveRebelde } from "./helpers/alertNaveRebelde";
import { alertSensorAveriado } from "./helpers/alertSensorAveriado";
import { viewLastMinuteData } from "./helpers/viewLastMinuteData";
import { btnLaunchRay } from "./helpers/btnLaunchRay";
import styled from "styled-components";



const Btns = styled.div`
position:fixed;
bottom: 0;
right: 2%;
opacity:10%;
&:hover{
  opacity: 100%;
}
`



export default function DashboardScreen() {
  //Variables de control para los sensores y los datos
  const [naveFantasma, setNaveFantasma] = useState(false);
  const [naveRebelde, setNaveRebelde] = useState(false);
  const [sensorAveriado, setSensorAveriado] = useState(false);
  const rand = () => Math.round(Math.random() * 120);
  const [lastMinuteData] = useState([
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



  return (
    <>

      <div className="dash">
        {/* Se le debe pasar true si se detecta la nave fantasma */}
        <div className="alarmNaveFantasma">
          {alarmNaveFantasma(naveFantasma)}
        </div>

        {/* Muestra la data recibida durante el último minuto*/}
        <div className="last-minute-data">
          {viewLastMinuteData(lastMinuteData)}
        </div>

        <div className="alerts">
          {/* Se le debe pasar true si se confirma la presencia de alguna nave rebelde*/}
          <div>{alertNaveRebelde(naveRebelde)}</div>

          {/* Se le debe pasar true si se detecta una avería confirmada de un sensor*/}
          <div>{alertSensorAveriado(sensorAveriado)}</div>
          <Btns>
            <button className="btnManual" onClick={setNaveFantasma}>
              NF
            </button>
            <button className="btnManual" onClick={setNaveRebelde}>
              NR
            </button>
            <button className="btnManual" onClick={setSensorAveriado}>
              SA
            </button>
          </Btns>
        </div>
        <div id="chart_div"></div>
        {naveFantasma && btnLaunchRay(true)}
      </div>
    </>
  );
}
