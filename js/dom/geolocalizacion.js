const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

  const cuccess = (position) => {
    let coords = position.coords;
    console.log(position);

    $id.innerHTML = `
      <p>Tu posicion actual es:</p>
      <ul>
        <li>Latitud: <b>${coords.latitude}</b></li>
        <li>Longitud: <b>${coords.longitude}</b></li>
        <li>Precision: <b>${coords.accuracy}</b></li>
      </ul>
      <a href="https://www.google.com/maps/@${coords.latitude}, ${coords.longitude}, 20z" target="_blank" rel="noopener">Ver en Google Maps</a>
    `;
  };

  const error = (err) => {
    $id.innerHTML = `<p><mark>Error ${err.code}</mark></p>`;
    console.log(`Error ${err.code}: ${err.message}`);
  };

  n.geolocation.getCurrentPosition(success, error, options);
}
