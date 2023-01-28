// let game = {
//     gameBoard: []
// }


let gameBoardInput = document.querySelectorAll('.gameBoardInput');
let currentPlayer = "X";

// let gameRuleBoard = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6],
// ]

let gameBox1 = document.getElementById('1');
console.log(gameBox1);
let gameBox2 = document.getElementById('2');
let gameBox3 = document.getElementById('3');
let gameBox4 = document.getElementById('4');
let gameBox5 = document.getElementById('5');
let gameBox6 = document.getElementById('6');
let gameBox7 = document.getElementById('7');
let gameBox8 = document.getElementById('8');
let gameBox9 = document.getElementById('9');

for (let i = 0; i < gameBoardInput.length; i++) {
    gameBoardInput[i].addEventListener('click', function(event) {3
      event.target.innerHTML = currentPlayer;
      
    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    }
    if (gameBox1.innerHTML === "X") {
      if (gameBox2.innerHTML === "X") {
        if (gameBox3.innerHTML === "X") {
         console.log('X Wins');
        }
      }
    }
    if (gameBox1.innerHTML === "O") {
      if (gameBox2.innerHTML === "O") {
        if (gameBox3.innerHTML === "O") {
          console.log('O wins');
        }
      }
    }
    if (gameBox4.innerHTML === "X") {
      if (gameBox5.innerHTML === "X") {
        if (gameBox6.innerHTML === "X") {
          console.log('X wins');
        }
      }
    }
    if (gameBox4.innerHTML === "O") {
      if (gameBox5.innerHTML === "O") {
        if (gameBox6.innerHTML === "O") {
          console.log('O Wins');
        }
      }
    }
    if (gameBox7.innerHTML === "X") {
      if (gameBox8.innerHTML === "X") {
        if (gameBox9.innerHTML === "X") {
          console.log('X Wins');
        }
      }
    }
    if (gameBox7.innerHTML === "O") {
      if (gameBox8.innerHTML === "O") {
        if (gameBox9.innerHTML === "O") {
          console.log('O Wins');
        }
      }
    }
    if (gameBox1.innerHTML === "X") {
      if (gameBox5.innerHTML === "X") {
        if (gameBox9.innerHTML === "X") {
          console.log('X Wins');
        }
      }
    }
    if (gameBox1.innerHTML === "O") {
      if (gameBox5.innerHTML === "O") {
        if (gameBox9.innerHTML === "O") {
          console.log('O Wins');
        }
      }
    }
    if (gameBox3.innerHTML === "X") {
      if (gameBox5.innerHTML === "X") {
        if (gameBox7.innerHTML === "X") {
          console.log('X Wins');
        }
      }
    }
    if (gameBox3.innerHTML === "X") {
      if (gameBox5.innerHTML === "X") {
        if (gameBox7.innerHTML === "X") {
          console.log('X Wins');
        }
      }
    }
    if (gameBox3.innerHTML === "O") {
      if (gameBox5.innerHTML === "O") {
        if (gameBox7.innerHTML === "O") {
          console.log('O Wins');
        }
      }
    }
    if (gameBox1.innerHTML === "X") {
      if (gameBox4.innerHTML === "X") {
        if (gameBox7.innerHTML === "X") {
          console.log('X Wins');
        }
      }
    }
    if (gameBox1.innerHTML === "O") {
      if (gameBox4.innerHTML === "O") {
        if (gameBox7.innerHTML === "O") {
          console.log('O Wins');
        }
      }
    }
    if (gameBox2.innerHTML === "X") {
      if (gameBox5.innerHTML === "X") {
        if (gameBox8.innerHTML === "X") {
          console.log('X Wins');
        }
      }
    }
    if (gameBox2.innerHTML === "O") {
      if (gameBox5.innerHTML === "O") {
        if (gameBox8.innerHTML === "O") {
          console.log('O Wins');
        }
      }
    }
    if (gameBox3.innerHTML === "X") {
      if (gameBox6.innerHTML === "X") {
        if (gameBox9.innerHTML === "X") {
          console.log('X Wins');
        }
      }
    }
    if (gameBox3.innerHTML === "O") {
      if (gameBox6.innerHTML === "O") {
        if (gameBox9.innerHTML === "O") {
          console.log('O Wins');
        }
      }
    }
  });


 
}




