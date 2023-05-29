import '../App.css'
import { BrowserRouter as Router, Route, Link, NavLink, BrowserRouter, Routes} from 'react-router-dom';
export function Base()
{
    return (
    <div>
        <div className='fondo'>

        </div>
        <div className='fotoAdox'>
      
        </div>
         <div className='login'>
         <div className='divFoto'>
          
          </div>
          <div className='container'>
            <input type="text"  placeholder="Nombre de usuario" className='inputTextLogin' />
            <input type="text"  placeholder="Contraseña" className='inputTextLogin'/>
            <Link to="/Inventario" className='button-link'>Ingresar</Link>   
            <Link to="/Login" className='Link'>Registrarse</Link>         
        </div>
        </div>
    </div>
    );
}