// COMPONENTES -> Creando un componente nuevo
// 1. Importar la libreria React
// 2. Importar los componenetes de react native
// 3. exportar el componente en una funcion
// 4. Retornar la funcion en una vista
// 5. Importar el componente creado en otro componente indicando la ruta donde esta.

// PROPS -> Usar el componente y hacerlo dinamico
// 1. Usar los props del componente en la etiqueta del componente
// 2. A La funcion creada del componente ponemos en los parentesis la palabra reservada prosp
// 3. Antes del return puedo hacer una prueba del componente con un console.log
// 4. Crear una variable constante y entre { agregar la propiedad creada} = props;
// 5. Luego escribirla en {} donde quiero que se muestre Ej: <Text>Loading...{mostrar}</Text>
// 6. AL estar creado el componente podemos reutilizar y cambiar su contenido
// 7. Tambien podemos crear variables, arrays, funciones y mostrarlos en el componente de la vista principal en este caso APP.JS Ej: 
// 8. const nombre = "Yeison";  <Loading mostrar={nombre}></Loading>
// 9. Podemos crear mas de una propiedad, y usarlos los props entre componentes.

// UseState - HOOKS
// Importar en React
// UseState -> Guarda el estado de un componente
// El estado tiene 2 Elementos Valor del estado y Funcion que se ocupa de actualizar e estado
// Ej:  const [Ver, setVer] = useState(false); Inicializando la variable en false
/*  if(Ver === true){
    console.log('Loading : TRUE');
  } else{
    console.log('Loading : FALSE');
  }*/
//  {Ver === true && <Loading></Loading>}

// useEffect - HOOKS
// 1. Importar en React
// 2. Hace un efecto cuando el componente es renderizado
/*   useEffect(() => {
    console.log('Ejecutando useEffect');
    console.log('Loading es ', Ver);
  }, [Ver]);*/ 
  
import React from 'react'; 
import { View, Text } from 'react-native';

export default function Loading (props) {

    const {mostrar, mostrar2} = props;

    //console.log(props);

    return (
        <View>
            <Text>Loading...{mostrar} {mostrar2}</Text>
        </View>
    );
}