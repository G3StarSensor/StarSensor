//Esta función muestra la data de los sensores obtenida en el último minuto

export const viewLastMinuteData = (lastMinuteData) => (
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
 