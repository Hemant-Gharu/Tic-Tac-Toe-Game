let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let msg = document.querySelector(".msg");
let turn = true;

const winningPattens = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

// click all boxes
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        resetBtn.innerHTML = "Reset Game"
        if (turn) {
            box.innerText = "O";
            turn = false;
        } else {
            box.innerText = "X";
            turn = true;
        }
        checkWinner();
    })

})

// function for box click disabled after win a player
function boxDisabled() {
    for (let box of boxes) {
        box.disabled = true;
    }
}

function boxEabled() {
    for (let box of boxes) {
        box.disabled = false;
        box.innerHTML = "";
    }
}

function resetGame() {
    boxEabled()
    msg.classList.add("hide")
}
function showWinner(winner) {
    msg.classList.remove("hide")
    msg.innerHTML = `Congratulations!! ${winner} is Winner`
    resetBtn.innerHTML = "New Game"
    boxDisabled();
}

// check who is winner
function checkWinner() {
    for (let patterns of winningPattens) {
        let pos1Val = boxes[patterns[0]].innerText;
        let pos2Val = boxes[patterns[1]].innerText;
        let pos3Val = boxes[patterns[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}

resetBtn.addEventListener("click", resetGame)