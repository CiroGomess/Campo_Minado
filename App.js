
import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';

import params from './src/params'
// Components
import MineField from './src/components/MineFild'
import {
  createMinedBoard,
  cloneBoard,
  openField,
  hadExplosio,
  wonGame,
  showMine,
  hadExplosion
} from './src/functions'



export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }


  minesAmount = () => {
    const cols = params.getCollumsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.dificultLevel)
  }


  createState = () => {
    const cols = params.getCollumsAmount()
    const rows = params.getRowsAmount()
    return {
      board: createMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMine(board)
      Alert.alert('Você Perdeu!')
    }

    if (won) {
      Alert.alert('Parabéns, você ganhou!')
    }

    this.setState({ board, lost, won })
  }

  render() {


    return (
      <View style={styles.container}>

        <Text>Iniciando o Mines!</Text>

        <Text>Tamanho da Grade:
          {params.getCollumsAmount()} x {params.getRowsAmount()}
        </Text>

        <View style={styles.board}>
          <MineField board={this.state.board} onOpenField={this.onOpenField}/>
        </View>

      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});
