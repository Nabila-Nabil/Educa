var wordList = [
    {
        word: "python",
        hint: "programming language"
    },
    {
        word: "guitar",
        hint: "a musical instrument"
    },
    {
        word: "aim",
        hint: "a purpose or intention"
    },
    {
        word: "venus",
        hint: "planet of our solar system"
    },
    {
        word: "gold",
        hint: "a yellow precious metal"
    },
    {
        word: "ebay",
        hint: "online shopping site"
    },
    {
        word: "golang",
        hint: "programming language"
    },
    {
        word: "coding",
        hint: "related to programming"
    },
    {
        word: "matrix",
        hint: "science fiction movie"
    },
    {
        word: "bugs",
        hint: "related to programming"
    },
    {
        word: "avatar",
        hint: "epic science fiction film"
    },
    {
        word: "gif",
        hint: "a file format for image"
    },
    {
        word: "mental",
        hint: "related to the mind"
    },
    {
        word: "map",
        hint: "diagram represent of an area"
    },
    {
        word: "island",
        hint: "land surrounded by water"
    },
    {
        word: "hockey",
        hint: "a famous outdoor game"
    },
    {
        word: "chess",
        hint: "related to a indoor game"
    },
    {
        word: "viber",
        hint: "a social media app"
    },
    {
        word: "github",
        hint: "code hosting platform"
    },
    {
        word: "png",
        hint: "a image file format"
    },
    {
        word: "silver",
        hint: "precious greyish-white metal"
    },
    {
        word: "mobile",
        hint: "an electronic device"
    },
    {
        word: "gpu",
        hint: "computer component"
    },
    {
        word: "java",
        hint: "programming language"
    },
    {
        word: "google",
        hint: "famous search engine"
    },
    {
        word: "venice",
        hint: "famous city of waters"
    },
    {
        word: "excel",
        hint: "microsoft product for windows"
    },
    {
        word: "mysql",
        hint: "a relational database system"
    },
    {
        word: "nepal",
        hint: "developing country name"
    },
    {
        word: "flute",
        hint: "a musical instrument"
    },
    {
        word: "crypto",
        hint: "related to cryptocurrency"
    },
    {
        word: "tesla",
        hint: "unit of magnetic flux density"
    },
    {
        word: "mars",
        hint: "planet of our solar system"
    },
    {
        word: "proxy",
        hint: "related to server application"
    },
    {
        word: "email",
        hint: "related to exchanging message"
    },
    {
        word: "html",
        hint: "markup language for the web"
    },
    {
        word: "air",
        hint: "related to a gas"
    },
    {
        word: "idea",
        hint: "a thought or suggestion"
    },
    {
        word: "server",
        hint: "related to computer or system"
    },
    {
        word: "svg",
        hint: "a vector image format"
    },
    {
        word: "jpeg",
        hint: "a image file format"
    },
    {
        word: "search",
        hint: "act to find something"
    },
    {
        word: "key",
        hint: "small piece of metal"
    },
    {
        word: "egypt",
        hint: "a country name"
    },
    {
        word: "joker",
        hint: "psychological thriller film"
    },
    {
        word: "dubai",
        hint: "developed country name"
    },
    {
        word: "photo",
        hint: "representation of person or scene"
    },
    {
        word: "nile",
        hint: "largest river in the world"
    },
    {
        word: "rain",
        hint: "related to a water"
    },
]

var inputs=document.querySelector(".inputs");
var resetBtn=document.querySelector(".reset-btn");
var hint=document.querySelector(".hint span");
var guessLeft=document.querySelector(".guess-left span");
var wrongLetter=document.querySelector(".wrong-letter span");
var typingInput=document.querySelector(".typing-input");
var word;
var incorrects=[];
var corrects=[];
var maxGuesses;
function randomWord()
{
    var randObj=wordList[Math.floor(Math.random()*wordList.length)];
    word=randObj.word;
    maxGuesses=5;
    incorrects=[];
    corrects=[];
    console.log(word);
    hint.innerText=randObj.hint;
    guessLeft.innerText=maxGuesses;
    wrongLetter.innerText=incorrects;
    var html="";
    for(var i=0;i<word.length;i++)
    {
        html +='<input type="text" disabled>';

    }
    inputs.innerHTML=html;
}
randomWord();

var gameOverMessage = document.getElementById("gameOverMessage");
var congratulationsMessage = document.getElementById("congratulationsMessage");
var gameOverSound = document.getElementById("gameOverSound");
var congratulationsSound = document.getElementById("congratulationsSound");
function displayGameOver() {
    gameOverMessage.classList.add("show-message");
    gameOverSound.play();
    setTimeout(function () {
        gameOverMessage.classList.remove("show-message");
        for (var i = 0; i < word.length; i++) {
            inputs.querySelectorAll("input")[i].value = word[i];
        }
    }, 2000); // Adjust the time as needed (in milliseconds)
}

function displayCongratulations() {
    congratulationsMessage.classList.add("show-message");
    congratulationsSound.play();
    setTimeout(function () {
        congratulationsMessage.classList.remove("show-message");
        randomWord();
    }, 2000); // Adjust the time as needed (in milliseconds)
}

function initGame(e){
    var key=e.target.value;
    if(key.match(/^[A-Za-z]+$/) && !incorrects.includes(key)  && !corrects.includes(key))
    {
        console.log(key);
        if(word.includes(key))
        {
            for(var i=0;i<word.length;i++){
                if(word[i]==key)
                {
                    corrects.push(key);
                    inputs.querySelectorAll("input")[i].value=key;

                }
            }
        }else
        {
            maxGuesses--;
            incorrects.push(key);
        }
        guessLeft.innerText=maxGuesses;
        wrongLetter.innerText=incorrects;
    }
    
    typingInput.value="";
    setTimeout(function () {
        if (corrects.length === word.length) {
            displayCongratulations();
        } else if (maxGuesses < 1) {
            displayGameOver();
        }
    }, 100);
}
resetBtn.addEventListener("click",randomWord);
typingInput.addEventListener("input",initGame);
document.addEventListener("keydown",function(){typingInput.focus()});
inputs.addEventListener("click",function(){typingInput.focus()});