[<template>
    <div ref="boxesContainer" class="boxes-container" :class="[(showSkills || showProjects) && !playGame ? 'container-bg container-animate' : '']">
        <div 
        class="cell caveat"
        :style="style, {'--i': i}"
        :id="i"
        v-for="(box, i) in grid.length" :key="i" 
        :data-row="grid[i].row" 
        :data-col="grid[i].col" 
        :class="[
                (showSkills || showProjects) && !playGame ? 
                'ring-transparent' :
                 '',
                !playGame && !(showSkills || showProjects) ? 'ring-neutral-300' : 'ring-neutral-500',
                playGame &&
                inSubGrid(grid[i].row, grid[i].col) ?
                'subgrid' :
                historyGames.map(game => game.grid).flat(Infinity).filter(cell => cell.row === grid[i].row && 
                cell.col === grid[i].col).length && playGame ?
                'history-subgrid' : 
                !playGame && !(showSkills || showProjects) && grid[i].row !== 0 ?
                'not-subgrid' : '', 
                grid[i].row === 0 ?
                'first-row' :
                '', 
                playGame &&
                (winningCells.some(cell => cell.row === grid[i].row && cell.col === grid[i].col) ||
                historyGames.map(game => game.winCells).flat(Infinity).filter(cell => cell.row === grid[i].row && 
                cell.col === grid[i].col).length) ?
                'win-cell' :
                '',
                historyGridIndex(grid[i].row, grid[i].col) === 0 && playGame ? 
                'border-t-[3px] border-t-blue-600 border-l-[3px] border-l-blue-600' :
                historyGridIndex(grid[i].row, grid[i].col) === 1 && playGame ? 
                'border-t-[3px] border-t-blue-600' :
                historyGridIndex(grid[i].row, grid[i].col) === 2 && playGame ? 
                'border-t-[3px] border-t-blue-600 border-r-[3px] border-r-blue-600' :
                historyGridIndex(grid[i].row, grid[i].col) === 3 && playGame ? 
                'border-l-[3px] border-l-blue-600' :
                historyGridIndex(grid[i].row, grid[i].col) === 5 && playGame ? 
                'border-r-[3px] border-r-blue-600' :
                historyGridIndex(grid[i].row, grid[i].col) === 6 && playGame ? 
                'border-b-[3px] border-b-blue-600 border-l-[3px] border-l-blue-600' :
                historyGridIndex(grid[i].row, grid[i].col) === 7 && playGame ? 
                'border-b-[3px] border-b-blue-600' :
                historyGridIndex(grid[i].row, grid[i].col) === 8 && playGame ? 
                'border-b-[3px] border-b-blue-600 border-r-[3px] border-r-blue-600' :
                '',
             ]"
            @click="(playGame && !gameGrid.length && grid[i].row !== 0) || gameEnd ? createGameGrid(grid[i], grid_[0].length, grid_.length, grid_) : gameGrid.length && !gameEnd && inSubGrid(grid[i].row, grid[i].col) ? play(grid[i].row, grid[i].col, gameGrid[cellValue(grid[i].row, grid[i].col)[0]][cellValue(grid[i].row, grid[i].col)[1]].value) : ''" 
            >
            {{ playGame &&
                gameGrid.length && inSubGrid(grid[i].row, grid[i].col) && !gameEnd ?
                gameGrid[cellValue(grid[i].row, grid[i].col)[0]][cellValue(grid[i].row, grid[i].col)[1]].value : 
                '' 
            }} 

            {{ 
                playGame &&
               historyGames.map(game => game.grid).flat(Infinity).filter(cell => cell.row === grid[i].row && 
               cell.col === grid[i].col)[0] ?
                historyGames.map(game => game.grid).flat(Infinity).filter(cell => cell.row === grid[i].row && 
               cell.col === grid[i].col)[0].value
               : ''
             }}

             <span 
             class="absolute inline-block"
             v-if="showSkills || showProjects" 
             :style="!playGame ? spanLines[i] : ''"></span>
             
             <span 
             class="absolute inline-block"
             :class="[inSubGrid(grid[i].row, grid[i].col) ? 'w-10 h-32 bg-red-300' : '']"
             v-if="showSkills || showProjects || inSubGrid(grid[i].row, grid[i].col)" 
             :style="!playGame ? spanStars[i] : playGame ? spanStars[subGridIndex(grid[i].row, grid[i].col)] : ''"></span>

             <img class="absolute w-5 h-5 bottom-3 right-3" v-if="historyGridIndex(grid[i].row, grid[i].col) === 8 && playGame " src="/delete.svg" alt="">
             <img class="absolute w-5 h-5 top-3 left-3" v-if="historyGridIndex(grid[i].row, grid[i].col) === 0 && playGame" src="/restart.svg" alt="">
        </div>  
    </div>
</template>

<script setup>
const mainstore = mainStore()
const {showSkills, showProjects} = storeToRefs(mainstore)

const gamestore = gameStore()
const {playGame, gameGrid, winningCells, historyGames, gameEnd} = storeToRefs(gamestore)
const {createGameGrid, inSubGrid, play, cellValue, subGridIndex, historyGridIndex} = gamestore

let color = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFF5', '#F5FF33', '#FF8C33', '#33FF8C', '#8C33FF', '#FF338C', '#338CFF', '#8CFF33', '#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFF5', '#F5FF33', '#FF8C33', '#33FF8C', '#8C33FF', '#FF338C', '#338CFF', '#8CFF33', '#FF5733', '#33FF57', '#3357FF', '#FF33A1']
const boxesContainer = ref(null)
const numberOfBoxes = ref(0)
const squareLength = ref(60)
const boxWidth = ref(0)
const boxHeight = ref(0)
const width = ref(0)
const height = ref(0)
const grid = ref([])
const style = ref({})
const spanLines = ref([])
const spanStars = ref([])
const grid_ = ref([])
const pageAnimation = ref(false)

function resizerFunction () {
    squareLength.value = 50

    const cssObject = getComputedStyle(document.body)
    width.value = +cssObject.getPropertyValue('width').slice(0, -2)
    height.value = +cssObject.getPropertyValue('height').slice(0, -2)

    const numberOfboxesV = height.value / squareLength.value
    const numberOfboxesH = width.value  / squareLength.value 

    boxWidth.value = squareLength.value + ((width.value % squareLength.value) / numberOfboxesH) + 'px'
    boxHeight.value = squareLength.value + ((height.value % squareLength.value) / numberOfboxesV) + 'px'

    style.value = {
        'width' : boxWidth.value,
        'height': boxHeight.value
    }

    let decimalIndexH = numberOfboxesH.toString().indexOf('.') > 0 ? numberOfboxesH.toString().indexOf('.') : numberOfboxesH
    let decimalIndexV = numberOfboxesV.toString().indexOf('.') > 0 ? numberOfboxesV.toString().indexOf('.') : numberOfboxesV
    
    let realNumberOfBoxesV = numberOfboxesV.toString().slice(0, decimalIndexV)
    let realNumberOfBoxesH = numberOfboxesH.toString().slice(0, decimalIndexH)

    grid.value = Array.from({length: +realNumberOfBoxesV}, (_, row) => 
        Array.from({length: +realNumberOfBoxesH}, (_, col) => ({
            row, col, value: null
        }))
    )

    grid_.value = grid.value
    grid.value = grid.value.flat()

    numberOfBoxes.value = realNumberOfBoxesH * realNumberOfBoxesV
}

function spanStyles (i, subGrid) {
    let random = Math.random()
    let starWidth = random * 10

    if (!subGrid) {
        spanLines.value[i] = {
            'top': `${Math.floor(Math.random() * 20)}px`,
            'left': `${Math.floor(Math.random() * 21) - boxWidth.value}px`,
            'width': `${random > 0.5 ? Math.floor(Math.random() * 80) + 40 : 1}px`,
            'height': `${random > 0.5 ? 1 : Math.floor(Math.random() * 80) + 40}px`,
            'opacity': `${Math.random() * 0.5 + 0.5}`,
            'backgroundColor': `${color[Math.floor(Math.random() * 30)]}`,
            'animation': `levitate ${Math.random() * 2 + 1}s ease-in-out infinite`,
        }

        spanStars.value[i] = {
            'top': `${Math.floor(Math.random() * 21)}px`,
            'left': `${Math.floor(Math.random() * 21) - 10}px`,
            'width': `${starWidth}px`,
            'height': `${starWidth}px`,
            'opacity': `${Math.random() * 0.5 + 0.5}`,
            'borderRadius': '50%',
            'backgroundColor': `${color[Math.floor(Math.random() * color.length)]}`,
            'animation': `ripple ${Math.random() * 2 + 1}s ease-in-out infinite`,
        };
    } else {
        let starWidth = 5
        spanStars.value[i] = {
            'top': `${Math.floor(Math.random() * (squareLength.value - 10))}px`,
            'left': `${Math.floor(Math.random() * (squareLength.value - 10))}px`,
            'width': `${starWidth}px`,
            'height': `${starWidth}px`,
            'opacity': `${Math.random() * 0.5 + 0.5}`,
            'borderRadius': '50%',
            'backgroundColor': `${color[Math.floor(Math.random() * color.length)]}`,
            'animation': `ripple ${Math.random() * 2 + 1}s ease-in-out infinite`,
        };
    }
}

onMounted(() => {
    if (boxesContainer.value instanceof HTMLElement) resizerFunction()
})

window.addEventListener('resize', () => {
    resizerFunction()
})

watch(() => boxesContainer.value, (newValue, oldValue) => {
    if (newValue instanceof HTMLElement) resizerFunction()
})

watch(gameGrid, (newVal, oldVal) => {
    for (let index = 0; index < 9; index++) {
        spanStyles(index, true)
    }
}, { deep: 1 })


watch([showSkills, showProjects], ([newShowSkills, newShowProjects]) => {
    if (newShowSkills || newShowProjects) {
        style.value = {
            ...style.value,
            'position': 'relative',
        }

        if (!pageAnimation.value) {
            pageAnimation.value = true
            for (let i = 0; i < grid.value.length; i++) {
                spanStyles(i)
            }
        }
    }

    if (!newShowProjects && !newShowSkills) {
        style.value = {
            ...style.value,
            'position': 'fixed',
        }
        spanLines.value = []
    }
})
</script>

<style>
.boxes-container {
    @apply fixed w-full left-0 top-0 flex flex-wrap text-slate-200 text-5xl
}

.container-bg {
    @apply bg-gradient-to-br from-neutral-900 via-purple-900 via-black via-black via-sky-900 to-violet-900 shadow-lg shadow-violet-900/50;
}

.cell {
    perspective: 1000px;
    transform-style: preserve-3d;
}

.cell > span {
    transform: translateZ(50px) rotateY(90deg) rotateX(25deg);
    transform-origin: center;
    backface-visibility: hidden;
}

.cell {
    @apply w-fit h-fit flex grid font-bold items-center justify-center ring-[1px]
}

.subgrid {
    @apply bg-neutral-900 hover:bg-neutral-900 ring-white
}

.history-subgrid {
    @apply bg-black hover:bg-black
}

.not-subgrid {
    @apply bg-neutral-100 hover:bg-slate-200
}

.first-row {
    @apply bg-neutral-900 ring-transparent hover:bg-neutral-900
}

.win-cell {
    @apply bg-blue-800 hover:bg-blue-800 text-green-500
}

.ripple {
    animation: ripple 0.5s ease-out forwards;
}

.container-animate {
    animation: container 2s ease infinite;
}

@keyframes levitate {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateX(10px);
    }
}

@keyframes ripple {
        0% {
            transform: scale(1);
            opacity: 0.8;
        }
        100% {
            transform: scale(3);
            opacity: 0;
        }
    }

@keyframes container {
    0% {
        background: linear-gradient(135deg, #7c3aed, #0c4a6e, #000000,  #000000, #6b21a8, #1a1a1a,);
        box-shadow: 0px 4px 6px rgba(124, 58, 237, 0.5);
    }
    100% {
        background: linear-gradient(135deg, #170339, #011b2a, #000000,  #1e1d1d, #5e0da0, #171616,);
        box-shadow: 0px 4px 6px rgba(124, 58, 237, 0.5);
    }
}

/* .delete-icon::after {
    content: url("<svg viewBox='0 0 24 24' fill='red' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <path d='M10 12V17' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path> <path d='M14 12V17' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path> <path d='M4 7H20' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path> <path d='M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path> <path d='M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z' stroke='#000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'></path> </g></svg>");
    width: 10px;
    height: 10px;
    z-index: 10;
} */

.restart-icon::after {
    content: url("<svg fill='#000000' viewBox='-7.5 0 32 32' version='1.1' xmlns='http://www.w3.org/2000/svg'><g id='SVGRepo_bgCarrier' stroke-width='0'></g><g id='SVGRepo_tracerCarrier' stroke-linecap='round' stroke-linejoin='round'></g><g id='SVGRepo_iconCarrier'> <title>restart</title> <path d='M15.88 13.84c-1.68-3.48-5.44-5.24-9.040-4.6l0.96-1.8c0.24-0.4 0.080-0.92-0.32-1.12-0.4-0.24-0.92-0.080-1.12 0.32l-1.96 3.64c0 0-0.44 0.72 0.24 1.040l3.64 1.96c0.12 0.080 0.28 0.12 0.4 0.12 0.28 0 0.6-0.16 0.72-0.44 0.24-0.4 0.080-0.92-0.32-1.12l-1.88-1.040c2.84-0.48 5.8 0.96 7.12 3.68 1.6 3.32 0.2 7.32-3.12 8.88-1.6 0.76-3.4 0.88-5.080 0.28s-3.040-1.8-3.8-3.4c-0.76-1.6-0.88-3.4-0.28-5.080 0.16-0.44-0.080-0.92-0.52-1.080-0.4-0.080-0.88 0.16-1.040 0.6-0.72 2.12-0.6 4.36 0.36 6.36s2.64 3.52 4.76 4.28c0.92 0.32 1.84 0.48 2.76 0.48 1.24 0 2.48-0.28 3.6-0.84 4.16-2 5.92-7 3.92-11.12z'></path> </g></svg>");
    z-index: 10;
}

</style>
