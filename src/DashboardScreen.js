import React,{useState} from "react";
import { AiFillCheckCircle, AiFillCloseCircle } from "react-icons/ai";

export default function DashboardScreen() {

    const [lastMinuteData, setLastMinuteData] = useState([{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56},{N:"-",M:56}])
  //Esta función pone el led de alarma en azul o rojo dependiendo de si hay algún peligro o no (true/false)
  const alarm = () =>
    false? (
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

    //Esta función
  const viewLastMinuteData = () => (
    <div className="div-sensors">
      <table className="sensors">   
        {lastMinuteData.map((sensor, i) => (
          <tr>
            {sensor.M < 100 ? (
              <td>
                S{i}: {sensor.M} | {sensor.N}
              </td>
            ) : (
              <td className="danger">
                S{i}: {sensor.M} | {sensor.N}
              </td>
            )}
          </tr>
        ))}
      </table>
    </div>
  );

  const sensors = [
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
    "(Bomber|120)",
    "(-|56)",
    "(-|0)",
    "(-|98)",
    "(Gunship|230)",
    "(Scout Vessel|120)",
    "(Starfighter|200),(-|0)",
    "(-|43)",
  ];
  return (
    <>
      <div className="dash">
        {alarm()}
        {viewLastMinuteData()}
      </div>
    </>
  );
}
