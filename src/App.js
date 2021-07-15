//import logo from './logo.svg';
import './App.css';
import NavBar from './componentes/NavBar';
import Item from './componentes/item';
import { element } from 'prop-types';
import ClassComponent from './componentes/funcional/ClassComponent';


function App() {


  var array = [
    {
      id:1,
      title:"Hamburguesa",
      description:"Lentejas",
      bottom:"$300"
    },
    {
      id:2,
      title:"Omelette",
      description:"Relleno",
      bottom:"$280"
    },
    {
      id:3,
      title:"Tequeños",
      description:"Bastoncitos de queso",
      bottom:"$300"
    },
    {
      id:4,
      title:"Seitanga",
      description:"1 kilo",
      bottom:"$600"
    }
]

const mapItems = ()=> {
  let items = []
 
  items = array.map(element => {
    return <Item
              key={element.id}
              id={element.id} //element es lo mismo que el index en el ej anterior
              title={element.title}
              description={element.description != "description 2" ? element.description: "Esto era el 2"}
              bottom={element.bottom}
            />
  })

  return items;
}

  return (
    <div className='container'>
      
      <NavBar/>


      <ClassComponent
      >
        

      </ClassComponent>
      <div class="row">
      {mapItems()}
      </div>
    </div>

/*creacion de NavBar
1- No debe ser creada del componenete app(debe ser importada)
2- Se deben seguir buenas practicas
3- Usar CamelCase
*/
/*
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         Futura pagina de la Alianza
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/laalianzareverde"
          target="_blank"
          rel="noopener noreferrer"
        >
          La Alianza Reverde
        </a>
      </header>
    </div>*/
  );
}

export default App;
