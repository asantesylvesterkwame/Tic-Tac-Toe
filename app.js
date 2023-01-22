// let game = {
//     gameBoard: []
// }


let gameLevel = document.querySelector('#gameLevel');

function logValue() {
    console.log(gameLevel.value);
}

let xPlayerButton = document.getElementById('XplayerBtn');

let oPlayerButton = document.getElementById('OplayerButton');

let gameBoardInput = document.querySelectorAll('.gameBoardInput');
xPlayerButton.addEventListener('click', function () {
    let xButtonName = xPlayerButton.name = 'Xfocused';
    console.log(xButtonName);
    let oButtonName = oPlayerButton.name = '';
    console.log(oButtonName);
    if (gameLevel.value === 'easy') {
        if (xButtonName === 'Xfocused') {
            gameBoardInput.addEventListener('click', function () {
                gameBoardInput.innerHTML = 'X'
            })
        }
    }
});

oPlayerButton.addEventListener('focus', function () {
    let xButtonName = xPlayerButton.name = '';
    console.log(xButtonName);
    let oButtonName = oPlayerButton.name = 'Ofocused';
    console.log(oButtonName);
    
});


