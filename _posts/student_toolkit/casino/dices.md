---
layout: post
title: Dices 
permalink: /casino/dices
---
<title>Dice Game</title>
<style>
    body {
        font-family: Arial, sans-serif;
        margin: 0;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .container {
        max-width: 400px;
        width: 100%;
        background-color: #2b2b2b;
        padding: 20px;
        border-radius: 8px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }
    label {
        display: block;
        margin: 10px 0 5px;
    }
    input, button {
        width: 100%;
        padding: 10px;
        margin-bottom: 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
    button {
        background-color: #007bff;
        color: #fff;
        border: none;
        cursor: pointer;
    }
    button:hover {
        background-color: #0056b3;
    }
    .slider-value {
        text-align: center;
        margin-bottom: 10px;
    }
</style>

<body>
<div class="container">
    <h2>Dice Game</h2>
    <form id="betForm">
        <label for="betAmount">Bet Amount:</label>
        <input type="number" id="betAmount" name="betAmount" required min="1">
        <label for="betProbability">Bet Probability:</label>
        <input type="range" id="betProbability" name="betProbability" min="0" max="100" value="50" step="10">
        <div class="slider-value" id="sliderValue">50%</div>
        <button type="submit">Start Bet</button>
    </form>
</div>
<script type="module">
    import { pythonURI, javaURI, fetchOptions, login } from '../assets/js/api/config.js';
    const betForm = document.getElementById('betForm');
    const betProbability = document.getElementById('betProbability');
    const sliderValue = document.getElementById('sliderValue');
    betProbability.addEventListener('input', () => {
        sliderValue.textContent = `${betProbability.value}%`;
    });
    betForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const betAmount = document.getElementById('betAmount').value;
        const probability = betProbability.value;
        const betData = {
            username: "hanlun",
            betSize: parseFloat(betAmount),
            winChance: parseFloat(probability/100)
        };
        try {
            const response = await fetch(javaURI + '/api/casino/dice/calculate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(betData)
            });
            const result = await response.json();
            alert(`CURRENT BALANCE: ${result.balance}`);
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred. Please try again.');
        }
    });
</script>