console.log("Sumit chaubey")
let BgMusic = new Audio("BgMusic.mp3");
let ClickMusic = new Audio("clickMusic.wav");
let GoMusic = new Audio("GO.wav");
let turn = 'X';
let gameOver = false;
let player = 'X';
function ChangeTurn() {
    return turn === "X" ? "O" : "X";
}


//function to check for win
function CheckWin() {
    let Boxtext = document.getElementsByClassName("Boxtext")
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    let filledBoxes = 0;
    wins.forEach(e => {
        if ((Boxtext[e[0]].innerText === Boxtext[e[1]].innerText) && (Boxtext[e[2]].innerText === Boxtext[e[1]].innerText) && (Boxtext[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = Boxtext[e[0]].innerText + "- Won"
            gameOver = true
            document.querySelector('.Excited').getElementsByTagName('img')[0].style.width = '200px';
        }
    })
    Array.from(Boxtext).forEach(element => {
        if (element.innerText !== '') {
            filledBoxes++;
        }
    });
    if (filledBoxes === 9 && !gameOver) {
        document.querySelector('.info').innerText = "It's a Draw";
        gameOver = true;
    }
}
//Game Logic
let boxes = document.getElementsByClassName("box")
Array.from(boxes).forEach(element => {
    let Boxtext = element.querySelector(".Boxtext");
    element.addEventListener('click', () => {
        if (Boxtext.innerText === '') {
            Boxtext.innerText = turn;
            turn = ChangeTurn();
            ClickMusic.play();
            CheckWin()

            if (!gameOver) {
                BgMusic.play()
                document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
            }
            if (gameOver) {
                GoMusic.play()
                BgMusic.pause()
            }
        }
    }
    )
}
)
// Define a function to reset the web page
function resetPage() {
    if (gameOver) {
        location.reload();
    }
}
// Add an event listener to the body element
var body = document.getElementsByTagName("body")[0];
body.addEventListener("dblclick", resetPage);
