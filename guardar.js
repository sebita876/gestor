import { Conectar } from './conectarse.js';

import Herramientas from './src/bd/models/herramientas.js';

Conectar();
const herramienta = new Herramientas({
    cantidad:1
})
export function Guardar ()
herramienta.save()
  .then(document => {
    console.log(document);
  })
  .catch(err => {
    console.log(err);
  });


console.log(herramienta);