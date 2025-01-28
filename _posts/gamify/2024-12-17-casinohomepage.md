---
layout: post
title: Poker Game
permalink: /gamify/casinohomepage
---
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Casino Games</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f5f5f5;
            color: #333;
            text-align: center;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 800px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h1 {
            font-size: 2.5em;
            color: #2c3e50;
            margin-bottom: 20px;
        }
        p {
            font-size: 1.2em;
            margin-bottom: 30px;
        }
        .game-boxes {
            display: grid;
            grid-template-columns: 1fr;
            gap: 20px;
        }
        @media (min-width: 600px) {
            .game-boxes {
                grid-template-columns: 1fr 1fr;
            }
        }
        .game-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            padding: 20px;
            background-color: #e74c3c;
            color: white;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s, background-color 0.3s;
            cursor: pointer;
        }

        .game-box:hover {
            background-color: #c0392b;
            transform: scale(1.05);
        }

        .game-box h2 {
            font-size: 1.8em;
            margin-bottom: 10px;
        }

        .game-box p {
            font-size: 1.1em;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Welcome to the Casino! 🎰</h1>
        <p>Choose a game to play by clicking on a box below:</p>

        <div class="game-boxes">
            <div class="game-box" onclick="location='./blackjack'">
                <h2>Blackjack</h2>
                <p>Try your hand at beating the dealer!</p>
            </div>
            <div class="game-box" onclick="location='./dices'">
                <h2>Dices</h2>
                <p>Test your luck with the roll of a dice.</p>
            </div>
            <div class="game-box" onclick="location='./mines'">
                <h2>Mines</h2>
                <p>Navigate the board without triggering the mines.</p>
            </div>
            <div class="game-box" onclick="location='./poker'">
                <h2>Poker</h2>
                <p>Challenge your skills in this classic card game.</p>
            </div>
        </div>
        <p>Good luck, and may the odds be ever in your favor! 🍀</p>
    </div>
</body>
