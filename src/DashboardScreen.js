import React, { useState } from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

export default function DashboardScreen() {
  //Variables de control para los sensores y los datos

  const [naveFantasma, setNaveFantasma] = useState(false);
  const [naveRebelde, setNaveRebelde] = useState(false);
  const [sensorAveriado, setSensorAveriado] = useState(false);

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

  //Esta función pone el led de alarma en azul o rojo dependiendo de si hay algún peligro o no (true/false)
  const alarmNaveFantasma = (detectada = false) =>
    detectada ? (
      <AiFillCloseCircle
        color="red"
        size="80px"
        style={{ border: "2px solid red", borderRadius: "100%" }}
      />
    ) : (
      <AiFillCheckCircle
        color="rgba(0, 38, 255, 0.842)"
        size="80px"
        style={{ border: "2px solid white", borderRadius: "100%" }}
      />
    );

  //Esta función muestra la data de los sensores obtenida en el último minuto
  const viewLastMinuteData = () => (
    <table>
      {lastMinuteData.map((sensor, i) => (
        <tr>
          {sensor.M < 100 ? (
            <td>
              S{i}: {sensor.N} | {sensor.M}
            </td>
          ) : (
            <td className="danger">
              S{i}: {sensor.N} | {sensor.M}
            </td>
          )}
        </tr>
      ))}
    </table>
  );
  //alerta que se muestra cuando se detecta una nave rebelde
  const alertNaveRebelde = (condition = false) =>
    condition ? (
      <span className="alertDanger">¡Naves rebeldes detectadas!</span>
    ) : (
      <span className="alertOk">No hay naves rebeldes</span>
    );
  const alertSensorAveriado = (condition = false) =>
    condition ? (
      <span className="alertDanger">
        ¡Sensor <b>12375</b> defectuoso!
      </span>
    ) : (
      <span className="alertOk">No hay sensores averiados</span>
    );
  //   const alertNaveFantasma = (condition=false) => condition?<span className="alertDanger">Naves Rebeldes</span>:<span className="alertOk">¡Alerta de nave rebelde!</span>

  return (
    <>
      <div className="dash">
        {/* Se le debe pasar true si se detecta la nave fantasma */}
        <div className="alarmNaveFantasma">
          {alarmNaveFantasma(naveFantasma)}
        </div>

        {/* Muestra la data recibida durante el último minuto*/}
        <div className="last-minute-data">{viewLastMinuteData()}</div>

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
