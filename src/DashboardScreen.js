import React, { useState } from "react";
import { alarmNaveFantasma } from "./helpers/alertNaveFantasma";
import { alertNaveRebelde } from "./helpers/alertNaveRebelde";
import { alertSensorAveriado } from "./helpers/alertSensorAveriado";
import { viewLastMinuteData } from "./helpers/viewLastMinuteData";
import { btnLaunchRay } from "./helpers/btnLaunchRay";

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

  // async function getData(url = '', data = {}) {
  //   const response = await fetch(url, {
  //     method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'cors', // no-cors, *cors, same-origin
  //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: 'same-origin', // include, *same-origin, omit
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Token': '25a77d55-495a-4300-b72b-a61d90146786'
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     redirect: 'follow', // manual, *follow, error
  //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     body: JSON.stringify(data) // body data type must match "Content-Type" header
  //   });
  //   return response.json(); // parses JSON response into native JavaScript objects
  // }

  // console.log(getData("http://ec2-100-26-152-194.compute-1.amazonaws.com:3000/battles/3"));

  // const data = useFetch("http://ec2-100-26-152-194.compute-1.amazonaws.com:3000/battles/3")

  // const data = fetch("http://ec2-100-26-152-194.compute-1.amazonaws.com:3000/battles/3")
  //       .then(resp=>resp.json())
  //       .then(data=>{
  //          // console.log(data)
  //           setstate({
  //               loading:false,
  //               error: null,
  //               data
  //           })
  //       })

  // console.log(data);


const [dateTime, setDateTime] = useState("00-00-00 00:00:00");
const getDateTime = () => {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  var day = today.getDay();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  return `${year}-${month}-${day} ${hr}:${min}:${sec}`;
};

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
        </div>
        {naveFantasma && btnLaunchRay(true)}

        <div id="chart_div"></div>
      </div>
    </>
  );
}
