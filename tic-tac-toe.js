document.addEventListener("DOMContentLoaded", function(){
    const squares = document.querySelectorAll("#board div");
    const status = document.getElementById("status");
    let currentPlayer = "X";

    const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];

    for (let i = 0; i < squares.length; i++){
        squares[i].classList.add("square");

        squares[i].addEventListener("click", function (){
            if(this.textContent !== ""){
                return;
            }
            
            this.textContent = currentPlayer;
            this.classList.add(currentPlayer);

            let winner = false;

            for (let j = 0; j < winningCombinations.length; j++) {
                const combination = winningCombinations[j];

                if (
                    squares[combination[0]].textContent === currentPlayer &&
                    squares[combination[1]].textContent === currentPlayer &&
                    squares[combination[2]].textContent === currentPlayer
                ) {
                    winner = true;
                    break;
                }
            }

            if (winner){
                status.textContent =
                    "Congratulations! " + currentPlayer + " is the Winner!";
                status.classList.add("you-won");
            }

            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });

        const newGame = document.querySelector(".btn")

        newGame.addEventListener("click", function(){
            for (let i = 0; i < squares.length; i++){
                squares[i].textContent = "";
                squares[i].classList.remove("X", "O", "hover");
            }

            currentPlayer = "X";

            status.textContent =
                "Let your mouse hover over a square, then click the square to play an X or an O.";
            status.classList.remove("you-won");
        })

                    
        squares[i].addEventListener("mouseover", function() {
            this.classList.add("hover");
        });

        squares[i].addEventListener("mouseout", function() {
            this.classList.remove("hover");
        });
    }
});