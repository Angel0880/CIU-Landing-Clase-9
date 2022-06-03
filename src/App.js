import Header from './components/Header';
import Footer from './components/Footer';
import { useState } from 'react';
import Servicio from './components/Servicio';

function App() {

    //Creamos un state
    const [servicios, agregarServicios] = useState([
        { id:1, nombre:"Una docena de facturas", valor:600 },
        { id:2, nombre:"Un kilo de pan", valor:200 },
        { id:3, nombre:"Una torta grande", valor:1300 }
    ]);

    return (
      <div className='m-3'>
        <Header />
        <br/>
        <h1 className='text-3xl text-red-600 font-mono font-bold'>Panaderia Lopez</h1>
        <br/>
        {
          servicios.map(servicio =>
            (
              <Servicio
                servicio={servicio}
              />
            )
        )}
        <Footer/>
      </div>
  );
}

export default App;