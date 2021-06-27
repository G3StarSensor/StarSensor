//alerta que se muestra cuando se detecta una nave rebelde
export const alertNaveRebelde = (condition = false) =>
  condition ? (
    <span className="alertDanger animate__animated animate__pulse animate__infinite	infinite">
      ¡Naves rebeldes detectadas!
    </span>
  ) : (
    <span className="alertOk">No hay naves rebeldes</span>
  );
