import { useState } from "react";
import { Lista } from "../lista";
import { Tabla } from "../tabla";
export function Inventario ()
{
  const [listaTablas,setListaTablas]=useState([])
  let tipoo,fechaa,id,categoriaa;
  const tocarTabla =()=>{
  tipoo = prompt("ingrese el tipo")
  fechaa=prompt("ingrese la fecha")
  id=prompt("ingrese el id")
  categoriaa=prompt("ingrese la categoria")
  const newComponent=<Tabla tipo={tipoo} fecha={fechaa} id={id} categoria={categoriaa}/>
  setListaTablas([...listaTablas,newComponent])
  }
    const [listaComponentes, setListaComponentes] = useState([]); 
  let valor
  const handleAddComponent = () => {
    valor = prompt("ingrese el valor");
    const newComponent = <Lista valor={valor} />;
    setListaComponentes([...listaComponentes, newComponent]);
  }
    return (
    <div className="fondo3">
        <header className="header" onClick={tocarTabla}>
            <div className="perfil">
                
            </div>
        </header>
        <div className="contenedor">
          
        
        <div className="izquierda" onClick={handleAddComponent}>
          <h1 className="h1">Categorias</h1>
          <ul>
          <li className="li">Todos</li>
          {listaComponentes.map((componente, index) => (
          <div key={index}>{componente}</div>))}
          </ul>
        </div>
        <div className="resto">
          <table>
          {listaTablas.map((componente, index) => (
          <div key={index}>{componente}</div>))}
          </table>
        </div>
        </div>
    </div>
    )
}