// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, 
// in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.




// seleziono l'id del bottone, quando eseguo il click sul bottone si visualizza la griglia
const userPlay = document.getElementById('play');
userPlay.addEventListener('click', playGame);

function playGame() {
    // aggiungo la classe hidden all' h2 e la tolgo alla griglia
    const introText = document.getElementById('intro-text');
    introText.classList.add('hidden');

    const mainGrid = document.getElementById('grid');
    mainGrid.classList.remove('hidden');
    mainGrid.innerHTML = '';

    // leggere la difficoltà impostata dall'utente
    const userDifficulty = document.getElementById('difficulty-type').value;
    let numbersOfCells;
    let gridDimension;
    // comparo la difficoltà scelta dall'utente con la value 
    if(userDifficulty === 'easy') {
        numbersOfCells = 100;
        gridDimension = 10;
    } else if(userDifficulty === 'hard') {
        numbersOfCells = 81;
        gridDimension = 9;
    } else if(userDifficulty === 'crazy') {
        numbersOfCells = 49;
        gridDimension = 7;
    }
    // creo le celle in base al livello
    for( let i = 1; i <= numbersOfCells; i++ ) {
        const newGeneratedCell = generateCellsItem(i, gridDimension);
        
        newGeneratedCell.addEventListener('click', cellsClick);
        mainGrid.appendChild(newGeneratedCell);
    }
    
    
  
}

// ---------
    // FUNCTIONS
    // ---------
    function cellsClick() {
        // al click aggiungo la classe active
        this.classList.add('active');
        
    }
    

    // funzione che mi crea l'elemento della griglia
    // number = numero da inserire nella cella
    // return = l'elemento creato (<div class ="single-cell"><span>${number}</span></div>)
    function generateCellsItem(number, cellDimention) {
        const newCell = document.createElement('div');
        newCell.classList.add('single-cell');
        newCell.innerHTML = `<span>${number}</span>`; 
        // imposto la width e la height in base al livello scelto
        newCell.style.width = `calc(100% / ${cellDimention})`;
        newCell.style.height = `calc(100% / ${cellDimention})`;
        return newCell;
        
    }
