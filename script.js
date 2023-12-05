function buscarDato() {
  var valorBuscado = document.getElementById('inputValor').value;
  var spreadsheetId = '1t7MOjwg3aeETwUPtflJsSn7I3F1_v8CdGBiTpv58eXA';
  var range = 'A:D'; // Rango que incluye las columnas A, B, C y D

  // Llamar a la API de Google Sheets
  fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=AIzaSyBLGDbvABC5h7LYkTsBreBwQgsW0rhjbTY`)
    .then(response => response.json())
    .then(data => {
      var datos = data.values;
      var encontrado = false;
      for (var i = 0; i < datos.length; i++) {
        if (datos[i][0] == valorBuscado) {
          var resultado = `Valor encontrado: \nGUIA: ${datos[i][1]}, \nCliente: ${datos[i][2]}, \nDirección: ${datos[i][3]}`;
          document.getElementById('resultado').innerText = resultado;
          encontrado = true;
          break;
        }
      }
      if (!encontrado) {
        document.getElementById('resultado').innerText = 'Su pedido aún no ha sido despachado comuniquese al número "5550785100" para más información';
      }
    })
    .catch(error => {
      console.error('Su pedido no ha sido despachado, comuniquese al número "5550785100" para más información:', error);
    });
}
