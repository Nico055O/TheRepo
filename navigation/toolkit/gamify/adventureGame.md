---
layout: base
title: Adventure Game
permalink: /gamify/adventureGame
---

<style>
    
#custom-prompt {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f0f8ff; /* Light blue background */
    border-radius: 12px;
    border: 1px solid #87ceeb; /* Sky blue border */
    padding: 25px;
    width: 400px;
    max-width: 90%;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
    z-index: 1000;
}

#custom-prompt-box {
    text-align: center;
    position: relative;
    padding: 40px 20px 20px; /* Extra padding at the top for the close button */
}


#custom-prompt-message {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #4682b4; /* Steel blue text color */
}

#custom-prompt-input {
    width: 90%;
    padding: 12px;
    border: 1px solid #87ceeb; /* Sky blue border */
    border-radius: 8px;
    margin-bottom: 20px;
    font-size: 16px;
    color: #333; /* Darker text for input */
    background-color: #ffffff; /* White input background */
    box-shadow: inset 0px 2px 4px rgba(0, 0, 0, 0.1);
}

#custom-prompt-submit {
    padding: 12px 25px;
    background-color: #4682b4; /* Steel blue button background */
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background-color 0.3s ease-in-out, transform 0.2s ease;
}

#custom-prompt-submit:hover {
    background-color: #5a9bd3; /* Slightly lighter blue */
    transform: scale(1.05);
}

#custom-prompt-close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    font-weight: bold;
    color: #87ceeb; /* Sky blue close button */
    background: none;
    border: none;
    cursor: pointer;
    transition: color 0.2s ease-in-out, transform 0.2s ease;
    line-height: 1;
}

#custom-prompt-close:hover {
    color: #4682b4; /* Steel blue on hover */
    transform: scale(1.2); /* Slight grow effect */
}



</style>
<div id="score" style="position: absolute; top: 75px; left: 10px; color: black; font-size: 20px; background-color: white;">
   Time: <span id="timeScore">0</span>
</div>

<div id="gameContainer">
    <div id="promptDropDown" class="promptDropDown" style="z-index: 9999">
    <!-- <a href="javascript:void(0)" id="leaderboard-header">&times; Leaderboard</a> -->
    </div>
    <canvas id='gameCanvas'></canvas>
</div>

<!-- <div id="custom-alert" class="custom-alert">
    <button onclick="closeCustomAlert()" id="custom-alert-message"></button>
</div>

<div id="custom-prompt" style="display: none;">
    <div id="custom-prompt-box">
        <button id="custom-prompt-close" onclick="closeCustomPrompt()">✕</button>
        <p id="custom-prompt-message"></p>
        <input type="text" id="custom-prompt-input" placeholder="Type your answer here..." />
        <button id="custom-prompt-submit">Submit</button>
    </div>
</div> -->


<script type="module">
    import GameControl from '{{site.baseurl}}/assets/js/adventureGame/GameControl.js';
    import Prompt from '{{site.baseurl}}/assets/js/adventureGame/Prompt.js';
    import { getStats } from '{{site.baseurl}}/assets/js/adventureGame/StatsManager.js';

    const path = "{{site.baseurl}}";
    GameControl.start(path);
    GameControl.startTimer()
    Prompt.initializePrompt();


    window.submitAnswer = submitAnswer;
    window.showCustomPrompt = showCustomPrompt;
    window.closeCustomPrompt = closeCustomPrompt;

    window.onload = function() {
        getStats();
    };
</script>
