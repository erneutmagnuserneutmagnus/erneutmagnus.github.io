const cardsContainer = document.getElementById("cards");
const startButton = document.getElementById("startButton");
const result = document.getElementById("result");

// Generiere die Karten
const suits = ["♠", "♥", "♦", "♣"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = [];

// Erstelle ein Deck von Karten
suits.forEach(suit => {
    values.forEach(value => {
        deck.push(`${value} ${suit}`);
    });
});

// Funktion, um die Karten anzuzeigen
function displayCards() {
    cardsContainer.innerHTML = "";
    deck.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.className = "card";
        cardElement.textContent = card;
        cardsContainer.appendChild(cardElement);
    });
}

// Karten-Magie
function startTrick() {
    result.textContent = "Ich lese deine Gedanken...";
    setTimeout(() => {
        // "Rate" die gewählte Karte (Zufall)
        const randomCard = deck[Math.floor(Math.random() * deck.length)];
        result.textContent = `Deine Karte ist: ${randomCard}!`;
    }, 2000);
}

startButton.addEventListener("click", startTrick);

// Zeige die Karten
displayCards();
