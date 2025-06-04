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
  const resetGrid = ref(false)
  const gameEnd = ref(false)
  const turn = ref('x')
  const gameScores = ref({
    'x': 0,
    'o': 0,
    'tie': 0,
  })
  const plays = ref({
    'x': [],
    'o': []
  })

  const createGameGrid = (startCell, totalCols, totalRows, reuse = false) => {
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
        let filledCell = usedCells.some(cell => cell.row === i && cell.col === j)
        let cellExists = j < totalCols && i < totalRows
        if (filledCell || (!cellExists && !reuse)) {
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

    setWinCombination()
  }

  const setWinCombination = () => {
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

  const inSubGrid = (referenceCell) => {
    let row = referenceCell.row
    let col = referenceCell.col
    if (playGame.value && gameGrid.value.length) {
      let flattenedGrid = gameGrid.value.flat()
      let bool = flattenedGrid.find(el => el.row === row && el.col === col)
      return bool
    }
  }

  const subGridIndex = (referenceCell) => {
    let row = referenceCell.row
    let col = referenceCell.col
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

  const historyGridIndex = (referenceCell) => {
    let row = referenceCell.row
    let col = referenceCell.col

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
    gameScores.value = {
      'x': 0,
      'o': 0,
      'tie': 0,
    }
    historyGames.value = []
    clearPreviousGame()
  }


  const cellValue = (referenceCell) => {
    let row = referenceCell.row
    let col = referenceCell.col
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

  const play = (referenceCell, value) => {
    let row = referenceCell.row
    let col = referenceCell.col
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
        if (turn.value === 'x') gameScores.value['x']++
        else gameScores.value['o']++
      }
    }

    if (numberOfTurns.value === 9) {
      gameEnd.value = true
      startGame.value = false
      saveProgress('Tie game', winningCells.value)
      gameScores.value['tie']++
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
    gameGrid.value = []
    winCombo.value = []
    winningCells.value = []
    startGame.value = false
    numberOfTurns.value = []
    // winner starts next game
    turn.value = turn.value === 'x' ? turn.value = 'o' : turn.value = 'x'
    plays.value = {'x': [], 'o': []}
  }

  const deleteGrid = (referenceCell) => { 
    let row = referenceCell.row
    let col = referenceCell.col
    const historyIndex = ref(null)
    let grids = historyGames.value.map(game => game.grid.flat(2))
    let isGameGrid = gameGrid.value.flat(2).some(cell => cell.row === row && cell.col === col)

    for (let i = 0; i < grids.length; i++) {
      if (historyIndex.value !== null) break
      const grid = grids[i]; 
      grid.forEach((cell, j) => {
        if (cell.row === row && cell.col === col) {
          historyIndex.value = i
        }
      })
    }

    if (isGameGrid) {
      historyGames.value = historyGames.value.filter((game, index) => index !== historyIndex.value)
      gameGrid.value = []
    } 
    else {
      historyGames.value = historyGames.value.filter((game, index) => index !== historyIndex.value)  
    }
  }

  const setGrid = (referenceCell, totalCols, totalRows) => {
    let row = referenceCell.row
    let col = referenceCell.col
    let historyGrids = historyGames.value.map(game => game.grid.flat(2))
    let isGameGrid = gameGrid.value.flat(2).some(cell => cell.row === row && cell.col === col)
    let usedCells = historyGames.value.length ? historyGames.value.map(game => game.grid).flat(Infinity) : []
    let filledCell = usedCells.some(cell => cell.row === row && cell.col === col)

    if ((!historyGrids.length && !isGameGrid) || !filledCell) {
      createGameGrid(referenceCell, totalCols, totalRows)
    } 
    else {
      if (!resetGrid.value) return
      const historyIndex = ref(null)
      for (let i = 0; i < historyGrids.length; i++) {
        if (historyIndex.value !== null) break
        const grid = historyGrids[i]; 
        grid.forEach((cell, j) => {
          if (cell.row === row && cell.col === col) {
            historyIndex.value = i
          }
        })
      }
  
      if (isGameGrid) {
        let grid_ = gameGrid.value[0][0]  
        historyGames.value = historyGames.value.filter((game, gameIndex) => gameIndex !== historyIndex.value)
        createGameGrid({row: grid_.row, col: grid_.col, value: ''}, totalCols, totalRows, true)
      } 
      
      else {
        if (gameEnd.value) {  
          let cell = historyGames.value.flat(Infinity).map(history => history.grid.flat(2))[historyIndex.value][0]
          historyGames.value = historyGames.value.filter((game, index) => index !== historyIndex.value)
          createGameGrid({row: cell.row, col: cell.col, value: ''}, totalCols, totalRows, true)
        }
      }
    }

    resetGrid.value = false
  }

  return {
    resetGrid,
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
    setGrid,
    gameScores,
    deleteGrid,
  }
})
