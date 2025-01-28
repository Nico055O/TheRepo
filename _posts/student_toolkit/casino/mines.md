---
layout: post
title: Mines 
permalink: /casino/mines
---

<!-- Game Board Table -->
<table>
  <tr>
    <td><a href="#">1,1</a></td>
    <td><a href="#">1,2</a></td>
    <td><a href="#">1,3</a></td>
    <td><a href="#">1,4</a></td>
    <td><a href="#">1,5</a></td>
  </tr>
  <tr>
    <td><a href="#">2,1</a></td>
    <td><a href="#">2,2</a></td>
    <td><a href="#">2,3</a></td>
    <td><a href="#">2,4</a></td>
    <td><a href="#">2,5</a></td>
  </tr>
  <tr>
    <td><a href="#">3,1</a></td>
    <td><a href="#">3,2</a></td>
    <td><a href="#">3,3</a></td>
    <td><a href="#">3,4</a></td>
    <td><a href="#">3,5</a></td>
  </tr>
  <tr>
    <td><a href="#">4,1</a></td>
    <td><a href="#">4,2</a></td>
    <td><a href="#">4,3</a></td>
    <td><a href="#">4,4</a></td>
    <td><a href="#">4,5</a></td>
  </tr>
  <tr>
    <td><a href="#">5,1</a></td>
    <td><a href="#">5,2</a></td>
    <td><a href="#">5,3</a></td>
    <td><a href="#">5,4</a></td>
    <td><a href="#">5,5</a></td>
  </tr>
</table>

<!-- Popup Modal for Stakes and Bet Amount -->
<div id="popup" style="display: block; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 2px solid #333; padding: 20px; background-color: white; z-index: 10; width: 200px;">
  <p>Welcome to the game!</p>
  
  <!-- Bet Amount Input -->
  <label for="betAmount">Bet Amount:</label>
  <input type="number" id="betAmount" placeholder="Enter amount" style="width: 100%; margin-top: 5px;">
  
  <br><br>
  
  <!-- Stakes Dropdown Menu -->
  <label for="stakes">Stakes:</label>
  <select id="stakes" style="width: 100%; margin-top: 5px;">
    <option value="" disabled selected>Select Stakes</option>
    <option value="low">Low Stakes</option>
    <option value="medium">Medium Stakes</option>
    <option value="high">High Stakes</option>
  </select>
  
  <br><br>
  
  <button id="betButton">Bet</button>
  <p id="error" style="color: red; display: none; margin-top: 10px;">Please enter a valid amount and select stakes.</p>
</div>

<!-- Background Overlay -->
<div id="overlay" style="display: block; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); z-index: 5;"></div>

<!-- Winnings Display -->
<div id="winningsDisplay" style="margin-top: 10px;">Winnings: 0.00</div>

<script type="module">
import {javaURI} from '{{site.baseurl}}/assets/js/api/config.js';
let clickedCells = new Set();
let gameEnded = false;
let betAmount = 0;

// Function to start game by sending POST request with stakes level
function startGame(stakes) {
  fetch(`${javaURI}/api/casino/mines/stakes/${stakes}`, {
    method: 'POST'
  })
  .then(response => {
    if (response.ok) {
      console.log("Game started with stakes:", stakes);
      document.getElementById("popup").style.display = "none";
      document.getElementById("overlay").style.display = "none";
      betAmount = Number(document.getElementById("betAmount").value); // Store bet amount
    } else {
      console.error("Failed to start game");
    }
  });
}

// Event listener for Bet button
document.getElementById("betButton").onclick = function() {
  const bet = document.getElementById("betAmount").value;
  const stakes = document.getElementById("stakes").value;

  if (bet && !isNaN(bet) && Number(bet) > 0 && stakes) {
    startGame(stakes.toLowerCase()); // Start the game with selected stakes
  } else {
    document.getElementById("error").style.display = "block";
  }
};

// Function to end game and disable all cells
function endGame(message) {
  gameEnded = true;
  alert(message);
  document.querySelectorAll("table td a").forEach(cell => cell.classList.add("disabled"));
}

// Event listeners for board cell clicks
document.querySelectorAll("table td a").forEach(cell => {
  cell.onclick = function(event) {
    event.preventDefault();
    
    if (gameEnded) return; // Stop if the game is already over
    
    const cellCoords = this.textContent;
    if (clickedCells.has(cellCoords)) return; // Ignore if cell is already clicked
    
    clickedCells.add(cellCoords); // Mark cell as clicked
    const [xCoord, yCoord] = cellCoords.split(',').map(Number);

    // Send GET request to check for a mine at (xCoord, yCoord)
    fetch(`${javaURI}/api/casino/mines/${xCoord - 1}/${yCoord - 1}`)
    .then(response => response.json())
    .then(isMine => {
      if (isMine) {
        endGame("Boom! You hit a mine! Game Over.");
      } else {
        alert("Safe! No mine here.");
        updateWinnings(); // Update winnings if cell is safe
      }
    })
    .catch(error => console.error("Error checking mine:", error));
  };
});

// Function to update winnings display by multiplying multiplier with bet amount
function updateWinnings() {
  fetch(`${javaURI}/api/casino/mines/winnings`)
    .then(response => response.json())
    .then(multiplier => {
      const winnings = betAmount * multiplier;
      document.getElementById("winningsDisplay").textContent = `Winnings: ${winnings.toFixed(2)}`;
    })
    .catch(error => console.error("Error fetching winnings:", error));
}
</script>

<style>
/* Disabled cell style */
table td a.disabled {
  pointer-events: none;
  color: gray;
}
</style>
