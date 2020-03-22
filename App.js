import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Loading from './Loading';

export default function App() {
  
  const [Ver, setVer] = useState(false);

  const nombre = "Yeison";
  const apellidos = "Zaraza Molina";

  if(Ver === true){
    console.log('Loading : TRUE');
  } else{
    console.log('Loading : FALSE');
  }

  useEffect(() => {
    console.log('Ejecutando useEffect');
    console.log('Loading es ', Ver);
  }, [Ver]);

  return (
    <View style={styles.container}>
      <Text>Creando nuevos componentes y utilizando los props!</Text>
      <Loading mostrar ="Hola Mundo"></Loading>
      <Loading mostrar ="Reutilizando el componente"></Loading>
      <Loading mostrar ={nombre} mostrar2 = {apellidos}></Loading>
      {Ver === true && <Loading></Loading>}
      <Button title="Actualizar Estado" onPress = {() => setVer(true)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
