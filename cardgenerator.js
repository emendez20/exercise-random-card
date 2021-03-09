

window.onload = function generateCardContent() {
    let cards = ["&spadesuit;", "&hearts;", "&diamondsuit;", "&clubsuit;"];
    let cardValues = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "<i class='fas fa-chess-queen'></i>", "<i class='fas fa-chess-king'></i>"];

    let randomCard = {};

    randomCard['cardType'] = cards[Math.floor(Math.random() * cards.length)];
    randomCard['cardValue'] = cardValues[Math.floor(Math.random() * cardValues.length)];

    if (randomCard.cardType == "&hearts;" || randomCard.cardType == "&diamondsuit;") {
        let topElement = document.querySelector('.top');
        topElement.innerHTML = `<h1>${randomCard.cardType}</h1>`;

        let middleElement = document.querySelector('.middle');
        middleElement.innerHTML = `<h1>${randomCard.cardValue}</h1>`;

        let botElement = document.querySelector('.bot');
        botElement.innerHTML = `<h1>${randomCard.cardType}</h1>`;

        let colorCard = document.querySelector(".card-color");
        colorCard.style.color = 'red';
    }
    else {
        let topElement = document.querySelector('.top');
        topElement.innerHTML = `<h1>${randomCard.cardType}</h1>`;

        let middleElement = document.querySelector('.middle');
        middleElement.innerHTML = `<h1>${randomCard.cardValue}</h1>`;

        let botElement = document.querySelector('.bot');
        botElement.innerHTML = `<h1>${randomCard.cardType}</h1>`;
    }


}
window.onload = function generateCard(){
    
}