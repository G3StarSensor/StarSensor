import React from "react";
import { FaBeer } from "react-icons/fa";
import { FaCheckCircle,FaExclamationCircle } from "react-icons/fa";

export default function Dashboard() {
  // const sensors = [12, 56, 89, 102, 90, 24, 564, 43, 12, 89];
  let sensors = [];
  let x = 0;
  while (x < 100) {
    let y = Math.round(Math.random() * 2000);
    sensors.push(y);
    x++;
  }

  const checkSensor = [];

  const alertDetect = (i) => {
    if (!checkSensor[i]) {
      checkSensor[i] = 1;
    } else {
      checkSensor[i]++;
    }
  };
  console.log(checkSensor);

  return (
    <div className="dash">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Dropdown button
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          {sensors.map((sensor, i) =>
            sensor < 100 ? (
              <a className="dropdown-item bg-success">{sensor}</a>
            ) : (
              <a className="dropdown-item bg-danger">
                {sensor} {alertDetect(i)}
              </a>
            )
          )}  
        </ul>

        <FaCheckCircle color="blue" fontSize="50px"/>
        <FaExclamationCircle color="red" fontSize="50px"/>
      </div>
    </div>
  );
}
