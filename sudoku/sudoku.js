var numSelected = null;
var errors = 0;

var boards = [
    {
        board: [
            "--74916-5",
            "2---6-3-9",
            "-----7-1-",
            "-586----4",
            "--3----9-",
            "--62--187",
            "9-4-7---2",
            "67-83----",
            "81--45---"
        ],
        solution: [
            "387491625",
            "241568379",
            "569327418",
            "758619234",
            "123784596",
            "496253187",
            "934176852",
            "675832941",
            "812945763"
        ]
    },
    {
        board: [
            "329---54-",
            "-76--193-",
            "5-1-2----",
            "95---2---",
            "----19--5",
            "61-435-9-",
            "4-----15-",
            "2---5-3--",
            "1-5-----7"
        ],
        solution: [
            "329876541",
            "876541932",
            "541923876",
            "954782613",
            "783619425",
            "612435798",
            "438267159",
            "297158364",
            "165394287"
        ]
    },
    {
        board: [
            "--45--18-",
            "-1-----3-",
            "-528--96-",
            "89------1",
            "5-3-128--",
            "---97-65-",
            "3-9------",
            "276---3--",
            "--53--296"
        ],
        solution: [
            "634529187",
            "918764532",
            "752831964",
            "897653421",
            "563412879",
            "421978653",
            "389246715",
            "276195348",
            "145387296"
        ]
    },
];

var currentBoardIndex = 0;

window.onload = function () {
    setGame();
    document.getElementById("resetButton").addEventListener("click", resetGame);
};

function setGame() {
    resetErrors();
    setupBoard(currentBoardIndex); 
}

function resetErrors() {
    errors = 0;
    document.getElementById("errors").innerText = errors;
}

function resetBoard() {
    document.getElementById("board").innerHTML = "";
}

function resetGame() {
    currentBoardIndex = Math.floor(Math.random() * boards.length);
    resetBoard();
    setGame();
}

function setupBoard(BoardIndex) {
    const currentBoard = boards[BoardIndex];
    // Clear the board and digits elements
    document.getElementById("board").innerHTML = "";
    document.getElementById("digits").innerHTML = "";
    //digits
    for (var i = 1; i <= 9; i++) {
        var number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.addEventListener("click",selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }
    //board
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var tile = document.createElement("div");
            tile.id = i.toString()+"-"+j.toString();
            if(currentBoard.board[i][j]!="-")
            {
                tile.innerText=currentBoard.board[i][j];
                tile.classList.add("tile-start");
            }
            if(i==2 || i==5)
            {
                tile.classList.add("hr-line");
            }
            if(j==2 || j==5)
            {
                tile.classList.add("vr-line");
            }
            tile.addEventListener("click",selectTile);
            tile.classList.add("tile");
            document.getElementById("board").appendChild(tile);
        }
    }
}

function selectNumber(){
    if(numSelected!=null)
    {
        numSelected.classList.remove("number-selected");
    }
    numSelected=this;
    numSelected.classList.add("number-selected");
}

function checkPass() {
    var squaresFilled = document.querySelectorAll('.tile:not(.tile-start):empty').length;
    if (squaresFilled === 0) {
        document.getElementById("errors").innerText = "Congratulations!";
        document.getElementById("congratsAudio").play();
    }
}

function selectTile() {
    if (numSelected) {
        if (this.innerText === "") { // Check if the tile is empty
            var coords = this.id.split("-");
            var row = parseInt(coords[0]);
            var column = parseInt(coords[1]);
            if (boards[currentBoardIndex].solution[row][column] === numSelected.id) {
                this.innerText = numSelected.id;
                checkPass();
            } else {
                errors += 1;
                document.getElementById("errors").innerText = errors;
                if (errors === 5) {
                    document.getElementById("errors").innerText = "Game Over!";
                    document.getElementById("gameOverAudio").play();
                }
            }
        }
    }
}
