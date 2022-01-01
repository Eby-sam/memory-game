let tableau = [
    {
        name: "tsunade",
        img: "./img/Tsunade2.png"
    },
    {
        name: "tsunade",
        img: "./img/Tsunade2.png"
    },
    {
        name: "yoruichi",
        img: "./img/yoruichi.jpeg"
    },
    {
        name: "yoruichi",
        img: "./img/yoruichi.jpeg"
    },
    {
        name: "halibel",
        img: "./img/halibel.jpg"
    },
    {
        name: "halibel",
        img: "./img/halibel.jpg"
    },
    {
        name: "kefla",
        img: "../img/kefla.jpeg"
    },
    {
        name: "kefla",
        img: "../img/kefla.jpeg"
    }

];
tableau.sort(() => 0.5 - Math.random());
let cardSelected = [];
let cardSelectedId = [];
let cardWon = [];
const container = document.getElementById("container");
let count = document.getElementById("count");
let score = 0;
count.innerHTML = "Votre score : " + score + "/4";

function CreateBoard() {
    for (let x = 0; x < tableau.length; x++) {
        let card = document.createElement("img");
        card.setAttribute("src", "./img/enigma.jpeg");
        card.setAttribute("data-id", x);
        card.addEventListener("click", flipCard);
        container.append(card);
    }
}

function checkForSame() {
    let cards = document.querySelectorAll("img");
    let firstCard = cardSelectedId[0];
    let secondCard = cardSelectedId[1];
    if ((cardSelected[0] === cardSelected[1]) && (cardSelectedId[0] !== cardSelectedId[1])) {
        cards[firstCard].setAttribute("src", "./img/good-job.jpeg");
        cards[secondCard].setAttribute("src", "./img/good-job.jpeg");
        cards[firstCard].removeEventListener("click", flipCard);
        cards[secondCard].removeEventListener("click", flipCard);
        cardWon.push(cardSelected);
        score++;
        count.innerHTML = "Votre score : " + score + "/4";
    }
    else {
        cards[firstCard].setAttribute("src", "./img/enigma.jpeg");
        cards[secondCard].setAttribute("src", "./img/enigma.jpeg");
    }
    cardSelected = [];
    cardSelectedId = [];

    if (cardWon.length === (tableau.length / 2)) {
        let creaButton = document.createElement("button");
        creaButton.innerHTML = "Recommence";
        creaButton.addEventListener("click", function () {
            window.location.reload();
        });
        count.innerHTML = "Gagnée ";
        count.append(creaButton);
    }
}

function flipCard() {
    let cardId = this.getAttribute("data-id");
    cardSelected.push(tableau[cardId].name);
    cardSelectedId.push(cardId);
    this.setAttribute("src", tableau[cardId].img);
    if (cardSelected.length === 2) {
        setTimeout(checkForSame, 700)
    }
}

CreateBoard();