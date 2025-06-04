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
                playGame || (!playGame && !(showSkills || showProjects)) ? 'border-[1px] border-neutral-300 cursor-pointer' : '',
                (showSkills || showProjects) && !playGame ? 
                'ring-transparent border-transparent ring-transparent' :
                 '',
                !playGame && !(showSkills || showProjects) ? 'ring-neutral-300' : 'ring-neutral-500',
                playGame &&
                inSubGrid(grid[i]) ?
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
                historyGridIndex(grid[i]) === 0 && playGame ? 
                'ring-[1px] border-t-[1px] border-t-sky-600 border-l-[1px] border-l-sky-600' :
                historyGridIndex(grid[i]) === 1 && playGame ? 
                'ring-[1px] border-t-[1px] border-t-sky-600' :
                historyGridIndex(grid[i]) === 2 && playGame ? 
                'ring-[1px] border-t-[1px] border-t-sky-600 border-r-[1px] border-r-sky-600' :
                historyGridIndex(grid[i]) === 3 && playGame ? 
                'ring-[1px] border-l-[1px] border-l-sky-600' :
                historyGridIndex(grid[i]) === 5 && playGame ? 
                'ring-[1px] border-r-[1px] border-r-sky-600' :
                historyGridIndex(grid[i]) === 4 && playGame ? 
                'ring-[1px] border-transparent' :
                historyGridIndex(grid[i]) === 6 && playGame ? 
                'ring-[1px] border-b-[1px] border-b-sky-600 border-l-[1px] border-l-sky-600' :
                historyGridIndex(grid[i]) === 7 && playGame ? 
                'ring-[1px] border-b-[1px] border-b-sky-600' :
                historyGridIndex(grid[i]) === 8 && playGame ? 
                'ring-[1px] border-b-[1px] border-b-sky-600 border-r-[1px] border-r-sky-600' :
                '',
             ]"
            @click.self="
                (playGame && !gameGrid.length && grid[i].row !== 0) || gameEnd ? 
                setGrid(grid[i], grid_[0].length, grid_.length, grid_) :
                gameGrid.length && !gameEnd && inSubGrid(grid[i]) ?
                play(grid[i], gameGrid[cellValue(grid[i])[0]][cellValue(grid[i])[1]].value) :
                ''" 
            >
            {{ playGame &&
                gameGrid.length && inSubGrid(grid[i]) && !gameEnd ?
                gameGrid[cellValue(grid[i])[0]][cellValue(grid[i])[1]].value : 
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
             class="absolute inline-block text-[11px]"
             :class="[inSubGrid(grid[i]) ? 'w-10 h-32' : '']"
             v-if="showSkills || showProjects || inSubGrid(grid[i])" 
             :style="!playGame ? spanStars[i] : playGame ? spanStars[subGridIndex(grid[i])] : ''"></span>

             <Delete @click="deleteGrid(grid[i])" class="absolute w-5 h-5 top-[1px] left-[1px] hover:scale-[120%] cursor-pointer" v-if="historyGridIndex(grid[i]) === 0 && playGame" />
             <Restart @click="resetGrid = true, setGrid(grid[i])" class="absolute w-7 h-7 bottom-0 right-0 hover:scale-[120%] cursor-pointer" v-if="historyGridIndex(grid[i]) === 8 && playGame " />
        </div>  
    </div>
</template>

<script setup>
const mainstore = mainStore()
const {showSkills, showProjects} = storeToRefs(mainstore)

const gamestore = gameStore()
const {playGame, resetGrid, gameGrid, winningCells, historyGames, gameEnd} = storeToRefs(gamestore)
const {deleteGrid, setGrid, inSubGrid, play, cellValue, subGridIndex, historyGridIndex} = gamestore

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
        }
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
    @apply w-fit h-fit font-bold items-center justify-center font-[100]
}

.subgrid {
    @apply bg-neutral-800 hover:bg-neutral-700 ring-neutral-900 ring-[1px] border-transparent
}

.history-subgrid {
    @apply bg-black hover:bg-black ring-[1px] ring-neutral-700 border-transparent cursor-default
}

.not-subgrid {
    @apply bg-neutral-100 hover:bg-slate-200
}

.first-row {
    @apply bg-neutral-900 ring-transparent hover:bg-neutral-900 border-transparent
}

.win-cell {
    @apply text-green-500
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
</style>
