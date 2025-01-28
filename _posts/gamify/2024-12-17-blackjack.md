---
layout: post
title: BlackJack
permalink: /gamify/blackjack
---

<title>Blackjack Game</title>
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #1e1e1e;
        color: #ffffff;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
    }
    .container {
        text-align: center;
        background-color: #2b2b2b;
        padding: 40px;
        border-radius: 15px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
    }
    button {
        margin-top: 10px;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background-color: #f39c12;
        color: #1e1e1e;
        cursor: pointer;
        font-weight: bold;
    }
    button:hover {
        background-color: #e67e22;
    }
    .hand {
        display: flex;
        justify-content: center;
        gap: 10px;
    }
    .card {
        width: 60px;
        height: 90px;
        background: white;
        border-radius: 5px;
        color: black;
        text-align: center;
        line-height: 90px;
    }
    #error {
        color: red;
        margin-top: 10px;
    }
</style>
<div class="container">
    <h1>Blackjack Game</h1>
    <label>Bet Amount:</label>
    <input type="range" id="betAmountSlider" min="1000" max="100000" step="100" value="1000" oninput="updateBetAmount(this.value)">
    <span id="betAmountDisplay">$1000</span>
    <br>
    <button onclick="startGame()">Start Game</button>
    <button onclick="hit()" id="hit-btn" disabled>Hit</button>
    <button onclick="stand()" id="stand-btn" disabled>Stand</button>
    <button onclick="exitGame()">Exit</button>
    <div>
        <h3>Dealer's Hand</h3>
        <div id="dealer-hand" class="hand"></div>
        <h3>Your Hand</h3>
        <div id="player-hand" class="hand"></div>
    </div>
    <div id="result"></div>
    <div id="error"></div>
</div>

<script src="https://cdn.jsdelivr.net/npm/jwt-decode/build/jwt-decode.min.js"></script>
<script>
    const baseUrl = 'http://localhost:8085/api/casino/blackjack';
    let token = "";
    // Retrieve cookie value by name
    function getCookie(name) {
        const cookies = document.cookie.split(';');
        for (let cookie of cookies) {
            const [key, value] = cookie.trim().split('=');
            if (key === name) return decodeURIComponent(value);
        }
        return null;
    }
    // Update the bet amount display
    function updateBetAmount(value) {
        document.getElementById("betAmountDisplay").innerText = `$${value}`;
    }
    // Start a new blackjack game
    async function startGame() {
        token = getCookie('jwt_java_spring');
        if (!token) {
            document.getElementById("error").innerText = "Token is missing. Please log in.";
            return;
        }
        const decodedToken = jwt_decode(token);
        const email = decodedToken.sub;
        const betAmount = document.getElementById("betAmountSlider").value;
        try {
            const response = await fetch(`${baseUrl}/start`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
                body: JSON.stringify({ email, betAmount: parseFloat(betAmount) })
            });
            if (!response.ok) throw new Error("Failed to start the game");
            const gameData = await response.json();
            updateUI(gameData);
            document.getElementById("hit-btn").disabled = false;
            document.getElementById("stand-btn").disabled = false;
        } catch (error) {
            document.getElementById("error").innerText = error.message;
        }
    }
    // Perform the 'Hit' action
    async function hit() {
        try {
            const response = await fetch(`${baseUrl}/hit`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            const gameData = await response.json();
            updateUI(gameData);
            if (gameData.gameStateMap.result === "LOSE") {
                document.getElementById("result").innerText = "Bust! You lose.";
                endGame();
            }
        } catch (error) {
            document.getElementById("error").innerText = error.message;
        }
    }
    // Perform the 'Stand' action
    async function stand() {
        try {
            const response = await fetch(`${baseUrl}/stand`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            const gameData = await response.json();
            updateUI(gameData);
            const resultMessage = gameData.gameStateMap.result === "WIN" ? "You Win!" : "You Lose!";
            document.getElementById("result").innerText = resultMessage;
            endGame();
        } catch (error) {
            document.getElementById("error").innerText = error.message;
        }
    }
    // Update the game's user interface
    function updateUI(gameData) {
        displayHand("dealer-hand", gameData.gameStateMap.dealerHand);
        displayHand("player-hand", gameData.gameStateMap.playerHand);
    }
    // Display a hand of cards in the UI
    function displayHand(elementId, hand) {
        const container = document.getElementById(elementId);
        container.innerHTML = "";
        hand.forEach(card => {
            const div = document.createElement("div");
            div.classList.add("card");
            div.innerText = card;
            container.appendChild(div);
        });
    }
    // Reset the game interface
    function exitGame() {
        document.getElementById("dealer-hand").innerHTML = "";
        document.getElementById("player-hand").innerHTML = "";
        document.getElementById("result").innerText = "";
        document.getElementById("error").innerText = "";
        document.getElementById("hit-btn").disabled = true;
        document.getElementById("stand-btn").disabled = true;
    }
    // Disable further actions at the end of the game
    function endGame() {
        document.getElementById("hit-btn").disabled = true;
        document.getElementById("stand-btn").disabled = true;
    }
</script>