---
layout: base
title: Crypto Portfolio
type: issues
permalink: /crypto/portfolio
---
<link rel="stylesheet" href="{{site.baseurl}}/assets/css/portfolio.css">
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<style>
    h1 {
        color: #333;
        margin-top: 20px;
    }
    .container {
        max-width: 1000px;
        padding: 20px;
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    .user-balance {
        margin: 20px 0;
        font-weight: bold;
    }
    /* Crypto List Styling */
    .crypto-list {
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        justify-content: center;
        overflow-y: auto;
        max-height: 400px;
        padding: 10px;
        background-color: #fafafa;
        border-radius: 10px;
        box-shadow: inset 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
    }
    .crypto-item {
        background-color: #333;
        color: #fff;
        padding: 10px;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        text-align: center;
        width: 120px;
        transition: transform 0.2s;
    }
    .crypto-item:hover {
        transform: scale(1.05);
        background-color: #444;
    }
    /* Modal Styling */
    .modal {
        display: none;
        position: fixed;
        z-index: 10;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        align-items: center;
        justify-content: center;
    }
    .modal-content {
        background-color: #fff;
        padding: 20px;
        border-radius: 10px;
        width: 90%;
        max-width: 500px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        text-align: center;
        position: relative;
        color: #333;
    }
    .chart-container {
        height: 300px;
        margin: 20px 0;
    }
    .modal-close {
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
        font-size: 18px;
        color: #333;
    }
    /* Buttons */
    .btn {
        padding: 10px 20px;
        margin: 10px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        color: #fff;
        font-size: 1em;
    }
    .btn-buy { background-color: #4CAF50; }
    .btn-sell { background-color: #f44336; }
    .btn-close { background-color: #555; }
         /* Navigation Bar */
        .navbar-logo {
            font-size: 1.5rem;
            font-weight: bold;
        }
        .navbar-links {
            display: flex;
            gap: 15px;
        }
        .navbar-links a:hover {
            background-color: #575757;
        }
</style>

<!-- Navigation Bar -->
<div class="navbar">
    <div class="navbar-logo">Crypto Portfolio</div>
    <div class="navbar-links">
        <a href="/portfolio_2025/crypto/portfolio">Portfolio</a>
        <a href="/portfolio_2025//crypto/mining">Mining</a>
        <a href="/portfolio_2025/stocks/home">Stocks</a>
    </div>
</div>

<div class="container">
    <h1>Current Balance: $<span id="user-balance">5000</span></h1>
    <div class="crypto-list" id="crypto-list-container"></div>
</div>

<!-- Modal -->
<div class="modal" id="crypto-modal">
    <div class="modal-content">
        <span class="modal-close" onclick="closeModal()">&times;</span>
        <h2 id="modal-crypto-name">Crypto Details</h2>
        <p>Current Price: $<span id="modal-crypto-price"></span></p>
        <p>Change (24h): <span id="modal-crypto-change"></span>%</p>
        <div class="chart-container">
            <canvas id="crypto-chart"></canvas>
        </div>
        <button class="btn btn-buy" onclick="buyCrypto()">Buy</button>
        <button class="btn btn-sell" onclick="sellCrypto()">Sell</button>
        <button class="btn btn-close" onclick="closeModal()">Close</button>
    </div>
</div>

<script type="module">
    import { javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';

    // Prompt user for email
    const userEmail = "toby@gmail.com"

    let userBalance = 5000;
    document.getElementById('user-balance').innerText = userBalance;

    async function fetchCryptos() {
        try {
            const response = await fetch(`${javaURI}/api/crypto/live`, fetchOptions);
            if (!response.ok) throw new Error(`Failed to fetch crypto data: ${response.status} ${response.statusText}`);
            const container = document.getElementById('crypto-list-container');
            container.innerHTML = '';
            const cryptos = await response.json();
            cryptos.forEach(crypto => {
                const item = document.createElement('div');
                item.className = 'crypto-item';
                item.innerHTML = `<strong>${crypto.name}</strong><br>$${crypto.price.toFixed(2)}`;
                item.onclick = () => openModal(crypto);
                container.appendChild(item);
            });
        } catch (error) {
            console.error('Error fetching cryptos:', error);
        }
    }

    window.openModal = function (crypto) {
        document.getElementById('modal-crypto-name').innerText = crypto.name;
        document.getElementById('modal-crypto-price').innerText = crypto.price.toFixed(2);
        document.getElementById('modal-crypto-change').innerText = crypto.changePercentage.toFixed(2);
        fetchCryptoTrend(crypto.symbol.toLowerCase(), 7);
        document.getElementById('crypto-modal').style.display = 'flex';
    };

    window.closeModal = function () {
        document.getElementById('crypto-modal').style.display = 'none';
    };

    async function fetchCryptoTrend(cryptoId, days) {
        try {
            const response = await fetch(`${javaURI}/api/crypto/trend?cryptoId=${cryptoId}&days=${days}`, fetchOptions);
            if (!response.ok) throw new Error("Failed to fetch trend data");
            const prices = await response.json();
            const ctx = document.getElementById('crypto-chart').getContext('2d');
            if (window.cryptoChart) window.cryptoChart.destroy();
            window.cryptoChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: Array.from({ length: prices.length }, (_, i) => `Day ${i + 1}`),
                    datasets: [{
                        label: `${cryptoId} Price Trend`,
                        data: prices,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        fill: true
                    }]
                }
            });
        } catch (error) {
            console.error("Error fetching trend data:", error);
        }
    }

    window.buyCrypto = async function () {
        const cryptoId = document.getElementById('modal-crypto-name').innerText;
        const usdAmount = prompt("Enter USD amount to buy:");
        if (usdAmount) {
            try {
                const response = await fetch(`${javaURI}/api/crypto/buy`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: userEmail, cryptoId, usdAmount })
                });
                const message = await response.text();
                alert(message);
                fetchCryptos(); // Refresh data
            } catch (error) {
                console.error("Error buying crypto:", error);
            }
        }
    };

    window.sellCrypto = async function () {
        const cryptoId = document.getElementById('modal-crypto-name').innerText;
        const cryptoAmount = prompt("Enter crypto amount to sell:");
        if (cryptoAmount) {
            try {
                const response = await fetch(`${javaURI}/api/crypto/sell`, {
                    method: 'POST',
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ email: userEmail, cryptoId, cryptoAmount })
                });
                const message = await response.text();
                alert(message);
                fetchCryptos(); // Refresh data
            } catch (error) {
                console.error("Error selling crypto:", error);
            }
        }
    };

    fetchCryptos();
</script>