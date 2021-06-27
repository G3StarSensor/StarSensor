//alerta que se muestra cuando se detecta una nave rebelde
export const alertNaveRebelde = (condition = false) =>
  condition ? (
    <span className="alertDanger animate__animated animate__pulse animate__infinite	infinite">
      ¡(Bomber|135) Detectada [S132.452]!
    </span>
    
  ) : (
    <span className="alertOk">No se han detectado naves rebeldes</span>
  );
