const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    aiHand: "",
}

const hands = [...document.querySelectorAll(".select img")];

function handSelection() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = "")
    this.style.boxShadow = "0 0 0 4px yellow";
}

function computerChoice() {
    const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
    return aiHand;
}

function checkResult(player, ai) {
    if (player == ai) {
        return "draw";
    } else if ((player === "paper" && ai === "rock") || (player === "rock" && ai === "scissors") || (player == "scissors" && ai === "paper")) {
        return "win";
    } else {
        return "lost"
    }
}

function publishResult(player, ai, result) {
    document.querySelector(`[data-summary="your-choice"]`).textContent = player;
    document.querySelector(`[data-summary="ai-choice"]`).textContent = ai;
    document.querySelector("p.numbers span").textContent = ++gameSummary.numbers;
    if (result === "win") {
        document.querySelector("p.wins span").textContent = ++gameSummary.wins;
        document.querySelector("[data-summary='who-win']").textContent = "You won";
        document.querySelector("[data-summary='who-win']").style.color = "green";
    } else if (result === "lost") {
        document.querySelector("p.losses span").textContent = ++gameSummary.losses;
        document.querySelector("[data-summary='who-win']").textContent = "Computer won";
        document.querySelector("[data-summary='who-win']").style.color = "red";
    } else {
        document.querySelector("p.draws span").textContent = ++gameSummary.draws;
        document.querySelector("[data-summary='who-win']").textContent = "Draw";
        document.querySelector("[data-summary='who-win']").style.color = "blue";
    }
}

function endGame() {
    document.querySelector(`[data-option="${game.playerHand}"]`).style.boxShadow = "";
    game.playerHand = "";
}

function startGame() {
    if (!game.playerHand) {
        return alert("Choose hand");
    }
    game.aiHand = computerChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);

    publishResult(game.playerHand, game.aiHand, gameResult);
    endGame();
    if (gameSummary.numbers === 4) {
        document.querySelector("p.numbers span").textContent = gameSummary.numbers = 0;
        document.querySelector("p.wins span").textContent = gameSummary.wins = 0;
        document.querySelector("p.losses span").textContent = gameSummary.losses = 0;
        document.querySelector("p.draws span").textContent = gameSummary.draws = 0;
        document.querySelector("[data-summary='who-win']").textContent = "";
        document.querySelector(`[data-summary="your-choice"]`).textContent = "";
        document.querySelector(`[data-summary="ai-choice"]`).textContent = "";
        alert("Thanks for playing")
    } else if (document.querySelector("[data-summary='who-win']").textContent === "You won") {
        document.querySelector("p.numbers span").textContent = gameSummary.numbers = 0;
        document.querySelector("p.wins span").textContent = gameSummary.wins = 0;
        document.querySelector("p.losses span").textContent = gameSummary.losses = 0;
        document.querySelector("p.draws span").textContent = gameSummary.draws = 0;
        alert("Thanks for playing")
    }
}

hands.forEach(hand => hand.addEventListener("click", handSelection));

document.querySelector(".start").addEventListener("click", startGame);