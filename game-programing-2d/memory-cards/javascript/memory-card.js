let card1 = [
    {
        name: "mercy",
        image: "./image/Mercy-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "ana",
        image: "./image/Ana-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "genji",
        image: "./image/Genji-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "hanzo",
        image: "./image/Hanzo-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "lucio",
        image: "./image/Lucio-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "mccree",
        image: "./image/McCree-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "mei",
        image: "./image/Mei-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "reinhardt",
        image: "./image/Reinhardt-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "zenyatta",
        image: "./image/Zenyatta-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "reaper",
        image: "./image/Reaper-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "symmetra",
        image: "./image/Symmetra-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "doomfist",
        image: "./image/Doomfist-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "dva",
        image: "./image/D-Va-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "widowmaker",
        image: "./image/Widowmaker-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "winston",
        image: "./image/Winston-Overwatch-Heroes-MTG-Cards.jpg"
    }
]
let card2 = [
    {
        name: "mercy",
        image: "./image/Mercy-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "ana",
        image: "./image/Ana-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "genji",
        image: "./image/Genji-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "hanzo",
        image: "./image/Hanzo-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "lucio",
        image: "./image/Lucio-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "mccree",
        image: "./image/McCree-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "mei",
        image: "./image/Mei-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "reinhardt",
        image: "./image/Reinhardt-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "zenyatta",
        image: "./image/Zenyatta-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "reaper",
        image: "./image/Reaper-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "symmetra",
        image: "./image/Symmetra-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "doomfist",
        image: "./image/Doomfist-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "dva",
        image: "./image/D-Va-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "widowmaker",
        image: "./image/Widowmaker-Overwatch-Heroes-MTG-Cards.jpg"
    },
    {
        name: "winston",
        image: "./image/Winston-Overwatch-Heroes-MTG-Cards.jpg"
    }
]

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

shuffle(card2)
shuffle(card1)

let mainThemeSong = document.querySelector(".main-theme-song")
let gameSong = document.querySelector(".game-song")
let victorySong = document.querySelector(".victory-song")
let defeatSong = document.querySelector(".defeat-song")
let victoryLine = document.querySelector(".victory-line")
let defeatLine = document.querySelector(".defeat-line")

mainThemeSong.play()
gameSong.pause()
victorySong.pause()
defeatSong.pause()

let openCard = []
let scoredCard = []
var playerScore = 0
var playTime = 300
let startBTN = document.querySelector(".start-btn")
let selectDifficult = document.querySelector("#difficult")
let interval

startBTN.addEventListener("click", function () {
    switch (selectDifficult.value) {
        case "easy":
            playTime = 300
            break;
        case "medium":
            playTime = 180
            break;
        case "hard":
            playTime = 120
            break;
    }
    mainThemeSong.pause()
    gameSong.play()
    let a = document.querySelector(".main-menu")
    a.style.display = "none"
    let b = document.querySelector(".game")
    b.style.display = "flex"
    let c = document.querySelector(".end-game-defeat")
    let d = document.querySelector(".end-game-victory")

    interval = setInterval(function () {
        playTime -= 1
        console.log(playTime);
        renderTime()
        if (playTime == 0) {
            b.style.display = "none"
            c.style.display = "flex"
            gameSong.pause()
            defeatSong.play()
            renderScoreDedeat()
        }
        if ((scoredCard.length / 2) == (card1.length)) {
            d.style.display = "flex"
            b.style.display = "none"
            gameSong.pause()
            defeatSong.pause()
            victorySong.play()
            renderScoreVictory()
        }
    }, 1000)
})

function renderCard() {
    let cards1 = ""
    for (i = 0; i < card1.length; i++) {
        const a = card1[i]
        cards1 += `
        <div class="game-card" name = "${a.name}" >
            <div class="flipper">
                <div class="front"><img src="./image/Card-Back.png"></div>
                <div class="back"><img src="${a.image}"></div>
            </div>
        </div>
        `
    }
    document.querySelector(".game-content").insertAdjacentHTML("afterbegin", cards1)
    let cards2 = ""
    for (i = 0; i < card2.length; i++) {
        const a = card2[i]
        cards2 += `
        <div class="game-card" name = "${a.name}" >
            <div class="flipper">
                <div class="front"><img src="./image/Card-Back.png"></div>
                <div class="back"><img src="${a.image}"></div>
            </div>
        </div>
        `
    }
    document.querySelector(".game-content").insertAdjacentHTML("beforeend", cards2)
}
renderCard()

let card = document.querySelectorAll(".game-card")

function playFlipSound() {
    let a = document.querySelector(".flip-sound");
    a.play()
}

function flipCard(event) {
    playFlipSound()
    this.classList.toggle("flip");
    openCard.push(this);
    flipTimeOut = setTimeout(() => {
        checkOpenCard();
    }, 1150);
}

let flipTimeOut

Array.from(card).map(ele => {
    ele.addEventListener("click", flipCard);
})

function checkOpenCard() {
    let len = openCard.length;
    setTimeout((callback) => {
        if (len == 1) {
            openCard[0].classList.remove("flip");
            openCard = [];
        } else {
            callback(len)
        }
    }, 500, sameCard(len));
    clearTimeout(flipTimeOut)
}

function sameCard(len) {
    if (len == 2) {
        if (openCard[0].getAttribute("name") != openCard[1].getAttribute("name")) {
            openCard[0].classList.remove("flip");
            openCard[1].classList.remove("flip");
            openCard = [];
        } else {
            scoredCard.push(openCard[0])
            scoredCard.push(openCard[1])
            playerScore += 100
            renderScore()
            openCard[0].removeEventListener("click", flipCard);
            openCard[1].removeEventListener("click", flipCard);
            openCard = [];
        }
    }
    if (len > 2) {
        openCard.forEach(ele => {
            ele.classList.remove("flip")
            openCard = [];
        })
    }
}

function renderScore() {
    let a = document.querySelector(".player-score")
    a.innerHTML = `Your Score: ${playerScore}`
}

function renderScoreDedeat() {
    clearInterval(interval)
    let a = document.querySelector(".end-score-defeat")
    a.innerHTML = `Your Score: ${playerScore}`
}

function renderScoreVictory() {
    clearInterval(interval)
    let a = document.querySelector(".end-score-victory")
    a.innerHTML = `Your Score: ${playerScore}`
}

function renderTime() {
    let a = document.querySelector(".time")
    a.innerHTML = `Time Left: ${playTime}`
}
let restartBTNVictory = document.querySelector(".restart-button-victory")
restartBTNVictory.addEventListener('click', function () {
    window.location.reload()
})
let restartBTNdefeat = document.querySelector(".restart-button-defeat")
restartBTNdefeat.addEventListener('click', function () {
    window.location.reload()
})