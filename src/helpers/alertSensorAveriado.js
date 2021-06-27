export const alertSensorAveriado = (condition = false) =>
  condition ? (
    <span className="alertDanger animate__animated animate__pulse animate__infinite	infinite">
      ¡Sensor <b>12375</b> defectuoso!
    </span>
  ) : (
    <span className="alertOk">No hay sensores averiados</span>
  );
