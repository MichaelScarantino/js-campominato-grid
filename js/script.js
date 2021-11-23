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
    // leggere la difficoltà impostata dall'utente
    const userDifficulty = document.getElementById('difficulty-type').value;
    // comparo la difficoltà scelta dall'utente con la value
    if(userDifficulty === 'easy') {
        // creo un array di numeri da 1 a 100
        const numbersOfCells = 100;
        let numbersOfCellsAdds = generateCellsNumbers(numbersOfCells);
        

        // creo la cella per ogni numero dell'array
        const mainGrid = document.getElementById('grid');
        mainGrid.innerHTML = '';

        for(let i = 0; i < numbersOfCellsAdds.length; i++) {
            const thisNumber = numbersOfCellsAdds[i];
            const newGeneratedCells = generateCellsItem(thisNumber, numbersOfCells);
            // aggiungo l'elemento alla griglia
            mainGrid.appendChild(newGeneratedCells);
            
        }

        
        

    } else if(userDifficulty === 'hard') {
        // creo un array di numeri da 1 a 81
        const numbersOfCells = 81;
        let numbersOfCellsAdds = generateCellsNumbers(numbersOfCells);
        console.log(numbersOfCellsAdds.length);

        // creo la cella per ogni numero dell'array
        const mainGrid = document.getElementById('grid');
        mainGrid.innerHTML = '';

        for(let i = 0; i < numbersOfCellsAdds.length; i++) {
            const thisNumber = numbersOfCellsAdds[i];
            const newGeneratedCells = generateCellsItem(thisNumber, numbersOfCells);
            // aggiungo l'elemento alla griglia
            mainGrid.appendChild(newGeneratedCells);
        }

    } else if(userDifficulty === 'crazy') {
        // creo un array di numeri da 1 a 49
        const numbersOfCells = 49;
        let numbersOfCellsAdds = generateCellsNumbers(numbersOfCells);
        

        // creo la cella per ogni numero dell'array
        const mainGrid = document.getElementById('grid');
        mainGrid.innerHTML = '';

        for(let i = 0; i < numbersOfCellsAdds.length; i++) {
            const thisNumber = numbersOfCellsAdds[i];
            const newGeneratedCells = generateCellsItem(thisNumber, numbersOfCells);
            // aggiungo l'elemento alla griglia
            mainGrid.appendChild(newGeneratedCells);
        }
    }


    
}

// ---------
    // FUNCTIONS
    // ---------

    // funzione che da un array vuoto 
    // quantityNumbers = numeri in base alla difficoltà
    // return = array di numeri da 1 a quantitynumbers
    function generateCellsNumbers(quantityNumbers) {
        let numbersArray = [];
        for(let i = 1; i <= quantityNumbers; i++){
            numbersArray.push(i);
        }
        return numbersArray;
    }

    // funzione che mi crea l'elemento della griglia
    // number = numero da inserire nella cella
    // return = l'elemento creato (<div class ="single-cell"><span>${number}</span></div>)
    function generateCellsItem(number, counterNumber) {
        const newCells = document.createElement('div');
        newCells.classList.add('single-cell');
        newCells.innerHTML = `<span>${number}</span>`; 
        // se counter corrisponde al numero di celle del livello di difficoltà selezionato si attiva una determinata classe
        if(counterNumber === 100) {
            newCells.classList.add('cell-easy');
            
        } else if (counterNumber === 81) {
            newCells.classList.add('cell-hard');
            
        } else if (counterNumber === 49) {
            newCells.classList.add('cell-crazy');
            
        }
        return newCells;
        
    }