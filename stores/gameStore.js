import { defineStore } from 'pinia';
import { ref } from 'vue';

export const gameStore = defineStore('gameStore', () => {
  const startGame = ref(false)
  const playGame = ref(false)
  const winningCells = ref([])
  const gameGrid = ref([])
  const winCombo = ref([])
  const historyGames = ref([])
  const numberOfTurns = ref(0)
  const gameEnd = ref(false)
  const turn = ref('x')
  const plays = ref({
    'x': [],
    'o': []
  })

  const createGameGrid = (startCell, totalCols, totalRows, grid) => {
    // check if all cells have not been used
    let usedCells = historyGames.value.map(game => game.grid).flat(Infinity)
    if (gameEnd.value) {
      clearPreviousGame()
      gameEnd.value = false
    }

    let col = startCell.col
    let row = startCell.row
    
    // game grid
    for (let i = row; i < row + 3; i++) {
      gameGrid.value.push([])
      for (let j = col; j < col + 3; j++) {
        let nonEmpty = usedCells.filter(cell => cell.row === i && cell.col === j)
        let cellExists = j < totalCols && i < totalRows
        if (nonEmpty.length || !cellExists) {
          gameGrid.value = []
          return
        }
        gameGrid.value[i - row].push({
          row: i,
          col: j,
          value: '',
        })
      }
    }

    // row win combo
    winCombo.value.push(...gameGrid.value)

    // column win combo
    for (let i = 0; i < 3; i++) {
      winCombo.value.push([])
      for (let j = 0; j < 3; j++) {
        winCombo.value[winCombo.value.length - 1].push(winCombo.value[j][i])
      }
    }

    // nw to se diagonal win combo
    for (let i = 0; i < 1; i++) {
      winCombo.value.push([])
      for (let j = 0; j < 3; j++) {
        winCombo.value[winCombo.value.length - 1].push(winCombo.value[j][j])
      }      
    }

    // sw to ne diagonal win combo 2,0 - 1,1, - 0,2
    for (let i = 0; i < 1; i++) {
      winCombo.value.push([])
      for (let j = 2; j >= 0; j--) {
        winCombo.value[winCombo.value.length - 1].push(winCombo.value[j][2 - j])
      }  
    }
  }

  const inSubGrid = (row, col) => {
    if (playGame.value && gameGrid.value.length) {
      let flattenedGrid = gameGrid.value.flat()
      let bool = flattenedGrid.find(el => el.row === row && el.col === col)
      return bool
    }
  }

  const subGridIndex = (row, col) => {
    if (playGame.value && gameGrid.value.length) {
      let flattenedGrid = gameGrid.value.flat(2).map(val => [val.row, val.col])

      for (let index = 0; index < flattenedGrid.length; index++) {
        if (flattenedGrid[index][0] === row && flattenedGrid[index][1] === col) {
          return index
        }
      }
    }

    return ''
  }

  const historyGridIndex = (row, col) => {
    if (historyGames.value.length) {
      let grid = historyGames.value.map(game => game.grid)
      for (let i = 0; i < grid.length; i++) {
        let currentGrid = grid[i].flat(Infinity)
        for (let j = 0; j < currentGrid.length; j++) {
          if (currentGrid[j].row === row && currentGrid[j].col === col) {
            return j
          }
        }
      }
    }
  }

  const clearAll = () => {
    historyGames.value = []
    clearPreviousGame()
  }

  const cellValue = (row, col) => {
    const val = ref()
    gameGrid.value.map((r, i) => {
      r.forEach((cell, j) => {
        if (cell.row === row && cell.col === col) {
          val.value = [i, j]
        }
      })
    })
    return val.value
  }

  const play = (row, col, value) => {
    if (gameEnd.value || value) return
    if (!startGame.value) startGame.value = true
    
    gameGrid.value.map((r, i) => {
      r.forEach((cell, j) => {
        if (cell.row === row && cell.col === col) {
          if (gameGrid.value[i][j].value) return
          numberOfTurns.value++
          plays.value[turn.value].push([row, col])
          gameGrid.value[i][j].value = turn.value
          cellValue(row, col)
          if (numberOfTurns.value > 4) checkWin()
        }
      })
    })
    
    turn.value === 'x' ? turn.value = 'o' : turn.value = 'x'
  }

  const checkWin = () => {
    let currentPlays = plays.value[turn.value]

    for (let i = 0; i < winCombo.value.length; i++) {
      let win = winCombo.value[i].every(cell => {
        return currentPlays.some(play => play[0] === cell.row && play[1] === cell.col);
      });

      if (win) {
        gameEnd.value = true
        startGame.value = false
        winningCells.value = winCombo.value[i]
        saveProgress(turn.value + ' WINS', winningCells.value)
      }
    }

    if (numberOfTurns.value === 9) {
      gameEnd.value = true
      startGame.value = false
      saveProgress('Tie game', winningCells.value)
    }
  }

  const saveProgress = (verdict, winCells) => {
    historyGames.value.push({
      grid: gameGrid.value,
      winner: verdict,
      winCells: winCells
    })

  }

  const clearPreviousGame = () => {
    winCombo.value = []
    winningCells.value = []
    startGame.value = false
    gameGrid.value = []
    numberOfTurns.value = []
    // winner starts next game
    turn.value = turn.value === 'x' ? turn.value = 'o' : turn.value = 'x'
    plays.value = {'x': [], 'o': []}
  }

  return {
    startGame,
    playGame,
    turn,
    gameGrid,
    gameEnd,
    winningCells,
    historyGames,
    clearAll,
    cellValue,
    createGameGrid,
    inSubGrid,
    historyGridIndex,
    subGridIndex,
    play,
  }
})
