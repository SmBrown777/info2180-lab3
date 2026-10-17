document.addEventListener("DOMContentLoaded", function(){
    const squares = document.querySelectorAll("#board div");
    let currentPlayer = "X";

    for (let i = 0; i < squares.length; i++){
        squares[i].classList.add("square");

        squares[i].addEventListener("click", function (){
            this.textContent = currentPlayer;
            this.classList.add(currentPlayer);

            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        });
    }
});