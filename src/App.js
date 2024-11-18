import './App.css';
import Logo1 from './imagenes/Recurso 1.png';
import Logo2 from './imagenes/Recurso 2.png';
import Logo3 from './imagenes/Recurso pag2 _ 1.png';
import Logo4 from './imagenes/Recurso pag2 _ 2.png';
import Logo5 from './imagenes/Casa 1.png';
import Logo6 from './imagenes/Casa 1.png';
import Logo7 from './imagenes/Casa 1.png';
import Logo8 from './imagenes/Casa 1.png';
import Logo9 from './imagenes/Recurso 1.png';
import Logo10 from './imagenes/Recurso 2.png';
import Logo11 from './imagenes/Casa 1.png';
import Logo12 from './imagenes/Casa 1.png';
import Logo13 from './imagenes/Casa 1.png';
import Logo14 from './imagenes/Casa 1.png';


/* ---------------------------------------------PRIMERA PAGINA--------------------------------------------------*/

function App() { 

  return (

    <div className='cuadroSuperior'>
    <div className="centrado-container">
    {/* Primer cuadro */}
    <div className="centrado"></div>

    {/*segundo cuadro*/}
    <div className="centrado2"></div>
    </div>
    

    {/*TITULO PAGINA */}
    <div className="Texto1" > 
        <h1>SICRP</h1>  
    </div>
      
      <div className="Linea2"></div>
      
  
        {/*TEXTO DESCRIPTIVO  */}
      <div className="Texto2">
        <p>SISTEMA INTEGRADO DE CONTROL DE RECORRIDOS DE POLICIA</p>
      </div>
      
      {/*IMAGENES DE LOGOS PRINCIPALES */}
      <div className='Imagen1'>
        <img src={Logo1} 
              alt='Logo1'
              className='image1-bottom-left'
              style={{ width: '400px', height: 'auto' }} />
      </div>



      <div className='Imagen2'>
        <img src={Logo2} 
              alt='Logo2'
              className="image2-bottom-right"
              style={{ width: '100px', height: 'auto' }} />
      </div>


      {/*LINEAS PRINCIPALES */}
      <div className="linea"></div>


      <div className ="linea superior">
      <div className ="linea2"> </div>
      </div>

      {/*FONDO DE LOS CUADROS DE TEXTO */}
      <div className="cuadroFondo"></div>


      {/*CUADRO DE TEXTO 1*/}
      <div className="patrulla">
      <div className='cuadro1'> 
        <label >
        <input name="cu2" placeholder="ID PATRULLA"/>
        </label>
      </div>
      </div>

      {/*CUADRO DE TEXTO 2 */}
      <div className="cuadrante">
      <div className='cuadro2'>
        <label>
          <input  name="cu1" placeholder="CUADRANTE"/>
        </label>
      </div>
      </div>
      
    

        {/*CODIGO BOTON */}
      <div className="botonIngresar">
        <button className='boton'>
          Ingresar
        </button>
      </div>
      

      {/* -------------------------------------------SEGUNDA PAGINA------------------------------------------------*/}

      <div className='cuadroSuperior'>
      <div className="centrado-container">
      {/* Primer cuadro */}
      <div className="centrado"></div>

      {/*segundo cuadro*/}
      <div className="centrado2"></div>
      </div>
      </div>


      {/*CUADROS PRINCIPALES*/}
      <div className="cuadroFondo2"></div>

      <div className="marco"></div>


      {/*LOGOS PRINCIPALES*/}
      <div className='Imagen1-pag2'>
        <img src={Logo3} 
              alt='Logo3'
              className='image2_1-bottom-left'
              style={{ width: '500px', height: 'auto' }} />
      </div>


      <div className='Imagen2-pag2'>
        <img src={Logo4} 
              alt='Logo4'
              className='image2_2-bottom-left'
              style={{ width: '100px', height: 'auto' }} />
      </div>

        {/*CODIGO DE LAS CASAS Y TEXTOS */}
      <div className='Imagen5-pag2'>
        <img src={Logo5} 
              alt='Logo5'
              className='image5_2-bottom-left'
              style={{ width: '45px', height: 'auto' }} />
      </div>

      <div className="textoCasa1">
        <p>INICIO</p>
      </div>

      
      <div className='Imagen6-pag2'>
        <img src={Logo6} 
              alt='Logo6'
              className='image6_2-bottom-left'
              style={{ width: '45px', height: 'auto' }} />
      </div>

      <div className="textoCasa2">
        <p>REPORTE CUADRANTE</p>
      </div>

      <div className='Imagen7-pag2'>
        <img src={Logo7} 
              alt='Logo7'
              className='image7_2-bottom-left'
              style={{ width: '45px', height: 'auto' }} />
      </div>

      <div className="textoCasa3">
        <p>CUADRANTES</p>
      </div>

      
      <div className='Imagen8-pag2'>
        <img src={Logo8} 
              alt='Logo8'
              className='image8_2-bottom-left'
              style={{ width: '45px', height: 'auto' }} />
      </div>


      <div className="textoCasa4">
          <p>PATRULLAS</p>
        </div>

      



      {/* -------------------------------------------TERCERA PAGINA------------------------------------------------*/}

      <div className='cuadroSuperior'>
      <div className="centrado-container">
      {/* Primer cuadro */}
      <div className="centrado"></div>

      {/*segundo cuadro*/}
      <div className="centrado2"></div>
      </div>
      </div>

      {/*CUADRO Y MARCO PRINCIPAL */}

      <div className="cuadroFondo2"></div>

      <div className="marco"></div>

      {/*IMAGENES DE LOS LOGOS */}

      <div className='Imagen1-pag2'>
        <img src={Logo9} 
              alt='Logo9'
              className='image9-bottom-left'
              style={{ width: '500px', height: 'auto' }} />
      </div>

      <div className='Imagen2-pag2'>
        <img src={Logo10} 
              alt='Logo10'
              className='image10-bottom-left'
              style={{ width: '100px', height: 'auto' }} />
      </div>



      {/*IMAGENES DE LAS CASAS */}
      <div className='Imagen11-pag2'>
        <img src={Logo11} 
              alt='Logo11'
              className='image11_2-bottom-left'
              style={{ width: '45px', height: 'auto' }} />
      </div>

      <div className="textoCasa11">
        <p>INICIO</p>
      </div>


      <div className='Imagen12-pag2'>
        <img src={Logo12} 
              alt='Logo12'
              className='image12_2-bottom-left'
              style={{ width: '45px', height: 'auto' }} />
      </div>

      <div className="textoCasa12">
        <p>REPORTE CUADRANTE</p>
      </div>


      <div className='Imagen13-pag2'>
        <img src={Logo13} 
              alt='Logo13'
              className='image13_2-bottom-left'
              style={{ width: '45px', height: 'auto' }} />
      </div>

      <div className="textoCasa13">
        <p>CUADRANTES</p>
      </div> 


      <div className='Imagen14-pag2'>
        <img src={Logo14} 
              alt='Logo14'
              className='image14_2-bottom-left'
              style={{ width: '45px', height: 'auto' }} />
      </div>

      <div className="textoCasa14">
          <p>PATRULLAS</p>
      </div>


        {/*LINEAS DENTRO DEL CUADRO PRINCIPAL*/}

        
      
      <div className="marco1">
        

      <div className= "Tabla">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>PATRULLA</th>
            <th>CUADRANTE</th>
            <th>UBICACIÓN</th>
            <th>RECORRIDO</th>
          </tr>
        </thead>

      </table>
      </div>  
      </div>
      

      {/*DIV PRINCIPAL*/}
      </div>
  );

  }

export default App