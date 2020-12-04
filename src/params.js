import { Dimensions } from 'react-native'

const params = {
    blockSize: 30,
    borderSize: 5,
    fontSize: 15,
    headerRatio: 0.15, // Proporção do painel superior da tela 
    dificultLevel: 0.1,

    //  Quantidades de colunas
    getCollumsAmount() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize) // Dividindo largura pelo tamanho do bloco
    },

    // Quantidades de linhas
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        const boardHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blockSize)
    }

}

export default params