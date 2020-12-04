
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import params from './src/params'
// Components
import Field from './src/components/Field'


export default function App() {
  return (
    <View style={styles.container}>

      <Text>Iniciando o Mines!</Text>

      <Text>Tamanho da Grade:
        {params.getCollumsAmount()} x {params.getRowsAmount()}
      </Text>


      <Field />
      <Field opened  /> 
      <Field opened nearMines={1} /> 
      <Field mined />
      <Field mined opened/>
      <Field mined opened exploded /> 
      <Field flagged />
      <Field flagged opened/> 

  

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
