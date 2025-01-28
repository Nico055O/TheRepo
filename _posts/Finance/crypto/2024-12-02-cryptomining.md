---
layout: post
title: Crypto Mining Simulator
type: issues
permalink: /crypto/mining
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Crypto Mining Simulator</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
</head>
<style>
       .notification { /* This entire style, ".notification", is what makes the notification pops out from the top right! */
       position: fixed;
       top: 20px;
       right: 20px;
       background-color: #333;
       color: white;
       padding: 10px;
       border-radius: 5px;
       z-index: 1000; // Ensure it appears above other elements
   }
</style>
<body class="bg-gray-900 text-white min-h-screen p-6">
    <div class="container mx-auto">
        <!-- Main Dashboard -->
        <div class="grid grid-cols-3 gap-4 mb-4">
            <!-- NiceHash Market -->
            <div class="dashboard-card">
                <h2>NiceHash Market</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">NICE Price</div>
                        <div class="stat-value" id="nice-price">$0.00</div>
                    </div>
                </div>
            </div>
            <!-- Ethereum Market -->
            <div class="dashboard-card">
                <h2>Ethereum Market</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">ETH Price</div>
                        <div class="stat-value" id="eth-price">$0.00</div>
                    </div>
                </div>
            </div>
            <!-- F2Pool Market -->
            <div class="dashboard-card">
                <h2>F2Pool Market</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">F2P Price</div>
                        <div class="stat-value" id="f2p-price">$0.00</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            <!-- Wallet -->
            <div class="dashboard-card">
                <h2>Wallet</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">BTC Balance</div>
                        <div class="stat-value" id="btc-balance">0.00000000</div>
                    </div>
                    <div>
                        <div class="stat-label">Pending BTC</div>
                        <div class="stat-value text-yellow-400" id="pending-balance">0.00000000</div>
                    </div>
                    <div>
                        <div class="stat-label">USD Value</div>
                        <div class="stat-value" id="usd-value">$0.00</div>
                    </div>
                    <div>
                        <div class="stat-label" id="pool-info">Min. Payout: 0.001 BTC</div>
                    </div>
                </div>
            </div>
            <!-- Mining Stats -->
            <div class="dashboard-card">
                <h2>Mining Stats</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">Hashrate</div>
                        <div class="stat-value" id="hashrate">0 MH/s</div>
                    </div>
                    <div>
                        <div class="stat-label">Shares</div>
                        <div class="stat-value" id="shares">0</div>
                    </div>
                </div>
            </div>
            <!-- Hardware -->
            <div class="dashboard-card">
                <h2>Hardware</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">Current GPU</div>
                        <div class="stat-value text-blue-400" id="current-gpu">No GPU</div>
                    </div>
                    <div>
                        <div class="stat-label">GPU Temperature</div>
                        <div class="stat-value" id="gpu-temp">0°C</div>
                    </div>
                    <div>
                        <div class="stat-label">Power Draw</div>
                        <div class="stat-value" id="power-draw">0W</div>
                    </div>
                </div>
            </div>
            <!-- Profitability -->
            <div class="dashboard-card">
                <h2>Profitability</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">24h Revenue</div>
                        <div class="stat-value" id="daily-revenue">$0.00</div>
                    </div>
                    <div>
                        <div class="stat-label">Power Cost</div>
                        <div class="stat-value text-red-400" id="power-cost">$0.00</div>
                    </div>
                </div>
            </div>
            <!-- Bitcoin Market -->
            <div class="dashboard-card">
                <h2>Bitcoin Market</h2>
                <div class="grid gap-2">
                    <div>
                        <div class="stat-label">BTC Price</div>
                        <div class="stat-value" id="btc-price">$0.00</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Mining Controls -->
        <div class="dashboard-card mt-4">
            <div class="flex justify-between items-center">
                <button id="start-mining" class="bg-green-500 hover:bg-green-600 px-4 py-2 rounded">
                    Start Mining
                </button>
                <select id="pool-selection" class="bg-gray-700 rounded px-4 py-2">
                    <option value="nicehash">NiceHash (2% fee, 4hr payout)</option>
                    <option value="ethermine">Ethermine (1% fee, 24hr payout)</option>
                    <option value="f2pool">F2Pool (2.5% fee, 12hr payout)</option>
                    <option value="bitcoin">Bitcoin (3% fee, 1hr payout)</option>
                </select>
                <button id="gpu-shop" class="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
                    GPU Shop
                </button>
            </div>
        </div>
        <!-- Performance Charts -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div class="chart-container">
                <canvas id="hashrate-chart"></canvas>
            </div>
            <div class="chart-container">
                <canvas id="profit-chart"></canvas>
            </div>
        </div>
        <!-- GPU Inventory -->
        <div class="dashboard-card mt-4">
            <h2 class="text-xl font-bold mb-4">My GPU Inventory</h2>
            <div id="gpu-inventory" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <!-- GPU inventory will be populated here -->
            </div>
        </div>
    </div>
    <!-- GPU Shop Modal -->
    <div id="gpu-shop-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden z-50">
        <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                    bg-gray-800 rounded-lg p-6 w-11/12 max-w-4xl max-h-[80vh] overflow-hidden">
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-2xl font-bold">GPU Shop</h2>
                <button id="close-shop" class="text-gray-400 hover:text-white text-3xl">&times;</button>
            </div>
            <div class="overflow-y-auto pr-2" style="max-height: calc(80vh - 100px);">
                <div id="gpu-list" class="grid gap-4">
                    <!-- GPUs will be inserted here -->
                </div>
            </div>
        </div>
    </div>
    <script type="module">
        import { login, javaURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js'; //imports config.js
        let hashrateChart, profitChart;
        let updateInterval;
        // Initialize charts and setup
        document.addEventListener('DOMContentLoaded', async () => {
            initializeCharts();
            setupEventListeners();
            await updateAllMarketPrices();
            await updateNiceHashPrice();
            await loadGPUs();
            startPeriodicUpdates();
        });
        function initializeCharts() {
            const chartConfig = {
                type: 'line',
                options: {
                    responsive: true,
                    animation: false,
                    scales: {
                        x: {
                            grid: { color: 'rgba(255, 255, 255, 0.1)' }
                        },
                        y: {
                            grid: { color: 'rgba(255, 255, 255, 0.1)' }
                        }
                    },
                    plugins: {
                        legend: {
                            labels: { color: 'rgba(255, 255, 255, 0.9)' }
                        }
                    }
                }
            };
            hashrateChart = new Chart(
                document.getElementById('hashrate-chart').getContext('2d'),
                {
                    ...chartConfig,
                    data: {
                        labels: [],
                        datasets: [{
                            label: 'Hashrate (MH/s)',
                            data: [],
                            borderColor: '#b144ff',
                            backgroundColor: 'rgba(177, 68, 255, 0.2)',
                            borderWidth: 3,
                            fill: true
                        }]
                    }
                }
            );
            profitChart = new Chart(
                document.getElementById('profit-chart').getContext('2d'),
                {
                    ...chartConfig,
                    data: {
                        labels: [],
                        datasets: [{
                            label: 'Profit (USD)',
                            data: [],
                            borderColor: '#BE0102',
                            backgroundColor: 'rgba(190, 1, 2, 0.2)',
                            borderWidth: 3,
                            fill: true
                        }]
                    }
                }
            );
        }
        function setupEventListeners() {
            document.getElementById('start-mining').addEventListener('click', toggleMining);
            document.getElementById('gpu-shop').addEventListener('click', openGpuShop);
            document.getElementById('pool-selection').addEventListener('change', switchPool);
        }
        async function startPeriodicUpdates() {
            updateInterval = setInterval(async () => {
                await updateAllMarketPrices();
                await updateNiceHashPrice();
            }, 3600000);
        }
        // API Calls
        async function loadGPUs() {
            try {
                const options = {
                    ...fetchOptions,
                    method: 'GET',
                    cache: 'no-cache'
                };
                const response = await fetch(`${javaURI}/api/mining/shop`, options);
                const gpus = await response.json();
                console.log('GPUs:', gpus); // Log the GPUs to check the structure
                renderGpuShop(gpus);
            } catch (error) {
                console.error('Error loading GPUs:', error);
            }
        }
           async function toggleMining() {
            try {
                const options = {
                    ...fetchOptions,
                    method: 'POST',
                    cache: 'no-cache'
                };
                const response = await fetch(`${javaURI}/api/mining/toggle`, options);
                const result = await response.json();
                updateMiningButton(result.isMining); // Ensure this reflects the correct state
                await updateMiningStats(); // Refresh stats after toggling
            } catch (error) {
                console.error('Error toggling mining:', error);
            }
        }
        async function toggleGPU(gpuId) {
            try {
                const options = {
                    ...fetchOptions,
                    method: 'POST',
                    cache: 'no-cache'
                };
                const response = await fetch(`${javaURI}/api/mining/gpu/toggle/${gpuId}`, options);
                const result = await response.json();
                if (result.success) {
                    showNotification(result.message);
                    await updateMiningStats(); // Refresh the display
                } else {
                    showNotification(result.message || 'Failed to toggle GPU');
                }
            } catch (error) {
                console.error('Error toggling GPU:', error);
                showNotification('Error toggling GPU: ' + error.message);
            }
        }
        window.buyGpu = async function(gpuId) {
            try {
                const options = {
                    ...fetchOptions,
                    method: 'POST',
                    cache: 'no-cache'
                };
                const response = await fetch(`${javaURI}/api/mining/gpu/buy/${gpuId}`, options);
                const result = await response.json();
                console.log('Response Status:', response.status); // Log the response status
                console.log('Result:', result); // Log the parsed result
                if (response.ok) { // Check if the response status is OK (200)
                    showNotification(result.message);
                    await loadGPUs();
                    await updateMiningStats();
                } else {
                    // Notify the user if they already own the GPU
                    showNotification(result.message || 'Failed to buy GPU');
                }
            } catch (error) {
                console.error('Error buying GPU:', error);
                showNotification('Error buying GPU: ' + error.message);
            }
        }
        async function switchPool(event) {
            try {
                const options = {
                    ...fetchOptions,
                    method: 'POST',
                    cache: 'no-cache',
                    body: JSON.stringify({ pool: event.target.value })
                };
                const response = await fetch(`${javaURI}/api/mining/pool`, options);
                const result = await response.json();
                if (result.success) {
                    showNotification(`Switched to ${event.target.value}`);
                }
            } catch (error) {
                console.error('Error switching pool:', error);
            }
        }
        async function updateMiningStats() {
            try {
                const options = {
                    ...fetchOptions,
                    method: 'GET',
                    cache: 'no-cache'
                };
                const response = await fetch(`${javaURI}/api/mining/stats`, options);
                const stats = await response.json();
                console.log('Stats fetched:', stats); // Debug log to check the fetched stats
                updateDisplay(stats); // Ensure this function correctly updates the UI
                updateCharts(stats); // Ensure this updates the charts as well
            } catch (error) {
                console.error('Error updating mining stats:', error);
            }
        }
        // UI Updates
        function updateDisplay(stats) {
            console.log('Updating display with stats:', stats); // Debug log
            if (!stats) return; // Guard clause for undefined stats
            // Update BTC Balance
            document.getElementById('btc-balance').textContent = (parseFloat(stats.btcBalance) || 0).toFixed(8);
            // Update Pending BTC
            document.getElementById('pending-balance').textContent = (parseFloat(stats.pendingBalance) || 0).toFixed(8);
            // Update Hashrate
            document.getElementById('hashrate').textContent = `${(parseFloat(stats.hashrate) || 0).toFixed(2)} MH/s`;
            // Update Shares
            document.getElementById('shares').textContent = stats.shares || 0;
            // Update GPU Temperature
            document.getElementById('gpu-temp').textContent = `${(typeof stats.averageTemperature === 'number' ? stats.averageTemperature : 0).toFixed(1)}°C`;
            // Update Power Draw
            document.getElementById('power-draw').textContent = `${(typeof stats.powerConsumption === 'number' ? stats.powerConsumption : 0).toFixed(0)}W`;
            // Update Daily Revenue
            document.getElementById('daily-revenue').textContent = `$${(typeof stats.dailyRevenue === 'number' ? stats.dailyRevenue : 0).toFixed(2)}`;
            // Update Power Cost
            document.getElementById('power-cost').textContent = `$${(typeof stats.powerCost === 'number' ? stats.powerCost : 0).toFixed(2)}`;
            // Update Current GPU
            if (stats.activeGPUs && stats.activeGPUs.length > 0) {
                document.getElementById('current-gpu').textContent = stats.activeGPUs[0].name; // Display the first active GPU
            } else {
                document.getElementById('current-gpu').textContent = 'No GPU';
            }
            // Render GPU Inventory
            renderGpuInventory(stats); // Ensure this function is correctly populating the GPU inventory
        }
        function renderGpuInventory(stats) {
            const inventoryElement = document.getElementById('gpu-inventory');
            if (!inventoryElement || !stats.gpus) return;
            inventoryElement.innerHTML = '';
            if (stats.gpus.length === 0) {
                inventoryElement.innerHTML = `
                    <div class="text-gray-400 text-center p-4">
                        No GPUs in inventory. Visit the shop to buy some!
                    </div>
                `;
                return;
            }
            stats.gpus.forEach(gpu => {
                const gpuCard = document.createElement('div');
                gpuCard.className = 'bg-gray-800 rounded-lg p-4 shadow-lg';
                // Calculate efficiency and daily estimates
                const efficiency = (gpu.hashrate / gpu.power).toFixed(3);
                const dailyRevenue = gpu.hashrate * 86400 / (1e12);
                const dailyPowerCost = (gpu.power * 24) / 1000 * 0.12;
                const dailyProfit = dailyRevenue - dailyPowerCost;
                gpuCard.innerHTML = `
                    <div class="flex justify-between items-start">
                        <div class="flex-1">
                            <h3 class="text-lg font-bold text-white">${gpu.name}</h3>
                            <div class="grid grid-cols-2 gap-4 mt-2">
                                <div class="text-sm">
                                    <p class="text-gray-400">Performance</p>
                                    <p class="text-white">⚡ ${gpu.hashrate} MH/s</p>
                                    <p class="text-white">🔌 ${gpu.power}W</p>
                                    <p class="text-white">📊 ${efficiency} MH/W</p>
                                </div>
                                <div class="text-sm">
                                    <p class="text-gray-400">Daily Estimates</p>
                                    <p class="text-green-400">💰 $${dailyRevenue.toFixed(2)}</p>
                                    <p class="text-red-400">💡 -$${dailyPowerCost.toFixed(2)}</p>
                                    <p class="text-blue-400">📈 $${dailyProfit.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
                inventoryElement.appendChild(gpuCard);
            });
        }
        function updateCharts(stats) {
            const now = new Date().toLocaleTimeString();
            // Update hashrate chart
            hashrateChart.data.labels.push(now);
            hashrateChart.data.datasets[0].data.push(stats.hashrate);
            // Update profit chart
            profitChart.data.labels.push(now);
            profitChart.data.datasets[0].data.push(stats.profit);
            // Keep only last 10 points
            if (hashrateChart.data.labels.length > 10) {
                hashrateChart.data.labels.shift();
                hashrateChart.data.datasets[0].data.shift();
                profitChart.data.labels.shift();
                profitChart.data.datasets[0].data.shift();
            }
            hashrateChart.update();
            profitChart.update();
        }
        function updateMiningButton(isActive) {
            const button = document.getElementById('start-mining');
            if (isActive) {
                button.textContent = 'Stop Mining';
                button.className = 'bg-red-500 hover:bg-red-600 px-4 py-2 rounded';
            } else {
                button.textContent = 'Start Mining';
                button.className = 'bg-green-500 hover:bg-green-600 px-4 py-2 rounded';
            }
        }
        function renderGpuShop(gpus) {
            const gpuListElement = document.getElementById('gpu-list');
            gpuListElement.innerHTML = '';
            // Group GPUs by category
            const categories = {
                'Free Starter GPU': gpus.filter(gpu => gpu.price === 0),
                'Budget GPUs ($50-500)': gpus.filter(gpu => gpu.price > 0 && gpu.price <= 500),
                'Mid-Range GPUs ($500-1500)': gpus.filter(gpu => gpu.price > 500 && gpu.price <= 1500),
                'High-End GPUs ($1500-3000)': gpus.filter(gpu => gpu.price > 1500 && gpu.price <= 3000),
                'Premium GPUs ($3000+)': gpus.filter(gpu => gpu.price > 3000)
            };
            Object.entries(categories).forEach(([category, categoryGpus]) => {
                if (categoryGpus.length === 0) return;
                const categoryHeader = document.createElement('div');
                categoryHeader.className = `text-xl font-bold mb-4 mt-6 ${getCategoryColor(category)}`;
                categoryHeader.textContent = category;
                gpuListElement.appendChild(categoryHeader);
                categoryGpus.forEach(gpu => {
                    const gpuCard = createGpuCard(gpu, category);
                    gpuListElement.appendChild(gpuCard);
                });
            });
        }
        function createGpuCard(gpu, category) {
            const card = document.createElement('div');
            card.className = `gpu-card mb-4 ${getCategoryClass(category)}`;
            // Calculate daily estimates
            const dailyRevenue = (gpu.hashRate || 0) * 86400 / (1e12); // Ensure hashRate is defined
            const dailyPowerCost = (gpu.powerConsumption || 0) * 24 / 1000 * 0.12; // Ensure powerConsumption is defined
            const dailyProfit = dailyRevenue - dailyPowerCost;
            const roi = dailyProfit > 0 ? (gpu.price / dailyProfit) : Infinity; // Avoid division by zero
            card.innerHTML = `
                <div class="flex justify-between items-start">
                    <div class="flex-1">
                        <h3 class="text-lg font-bold ${getCategoryColor(category)}">${gpu.name}</h3>
                        <div class="grid grid-cols-2 gap-4 mt-2">
                            <div class="text-sm">
                                <p class="text-gray-400">Performance</p>
                                <p class="text-white">⚡ ${(gpu.hashRate || 0).toFixed(2)} MH/s</p>
                                <p class="text-white">🔌 ${(gpu.powerConsumption || 0).toFixed(0)}W</p>
                                <p class="text-white">🌡️ ${(gpu.temperature || 0).toFixed(1)}°C</p>
                            </div>
                            <div class="text-sm">
                                <p class="text-gray-400">Daily Estimates</p>
                                <p class="text-green-400">💰 $${dailyRevenue.toFixed(2)}</p>
                                <p class="text-red-400">💡 -$${dailyPowerCost.toFixed(2)}</p>
                                <p class="text-blue-400">📈 $${dailyProfit.toFixed(2)}</p>
                            </div>
                        </div>
                        <div class="mt-2 text-sm">
                            <p class="text-gray-400">Efficiency: ${((gpu.hashRate || 0) / (gpu.powerConsumption || 1)).toFixed(3)} MH/W</p>
                            <p class="text-gray-400">ROI: ${roi.toFixed(1)} days</p>
                        </div>
                    </div>
                    <div class="text-right ml-4">
                        <p class="text-xl font-bold ${getCategoryColor(category)}">
                            ${gpu.price === 0 ? 'FREE' : '$' + gpu.price.toLocaleString()}
                        </p>
                        <button onclick="window.buyGpu(${gpu.id})" 
                                class="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded mt-2">
                            ${gpu.price === 0 ? 'Get Free' : 'Buy'}
                        </button>
                    </div>
                </div>
            `;
            return card;
        }
        // Utility functions
        function getCategoryColor(category) {
            const colors = {
                'Free Starter GPU': 'text-green-400',
                'Budget GPUs ($50-500)': 'text-blue-400',
                'Mid-Range GPUs ($500-1500)': 'text-purple-400',
                'High-End GPUs ($1500-3000)': 'text-orange-400',
                'Premium GPUs ($3000+)': 'text-red-400'
            };
            return colors[category] || 'text-white';
        }
        function getCategoryClass(category) {
            const classes = {
                'Free Starter GPU': 'starter',
                'Budget GPUs ($50-500)': 'budget',
                'Mid-Range GPUs ($500-1500)': 'mid-range',
                'High-End GPUs ($1500-3000)': 'high-end',
                'Premium GPUs ($3000+)': 'premium'
            };
            return classes[category] || '';
        }
        function openGpuShop() {
            const modal = document.getElementById('gpu-shop-modal');
            modal.classList.remove('hidden');
        }
        // Add close shop functionality
        document.getElementById('close-shop').addEventListener('click', () => {
            const modal = document.getElementById('gpu-shop-modal');
            modal.classList.add('hidden');
        });
        // Close modal when clicking outside
        document.getElementById('gpu-shop-modal').addEventListener('click', (e) => {
            if (e.target.id === 'gpu-shop-modal') {
                e.target.classList.add('hidden');
            }
        });
        // Define all functions first
        function updateMarketDisplay(markets) {
            if (!markets) return; // Guard clause
            const elements = {
                'nice-price': markets.nicehash,
                'nice-change': markets.nicehashChange,
                'eth-price': markets.ethereum,
                'eth-change': markets.ethereumChange,
                'f2p-price': markets.f2pool,
                'f2p-change': markets.f2poolChange,
                'btc-price': markets.bitcoin,
                'btc-change': markets.bitcoinChange
            };
            for (const [id, value] of Object.entries(elements)) {
                const element = document.getElementById(id);
                if (element) {
                    element.textContent = id.includes('price') ? 
                        `$${(value || 0).toFixed(2)}` : 
                        `${(value || 0).toFixed(2)}%`;
                }
            }
        }
        async function updateAllMarketPrices() {
            const markets = ['btc', 'eth', 'f2p'];
            // Show loading state
            markets.forEach(id => {
                const priceElement = document.getElementById(`${id}-price`);
                if (priceElement) priceElement.textContent = 'Loading...';
            });
            try {
                const response = await fetch(`${javaURI}/api/crypto/prices`, {
                    method: 'GET',
                    mode: 'cors',
                    cache: 'no-cache',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                if (!response.ok) throw new Error('Network response was not ok');
                const data = await response.json();
                // Log the data to see its structure
                console.log('API Response:', data);
                // Update markets except NiceHash
                updatePriceDisplay('btc', data.bitcoin);
                updatePriceDisplay('eth', data.ethereum);
                updatePriceDisplay('f2p', data['ftx-token']);
                // Update game state with new BTC price
                if (data.bitcoin && data.bitcoin.usd) {
                    gameState.btcPrice.current = data.bitcoin.usd;
                }
            } catch (error) {
                console.error('Error fetching market prices:', error);
                markets.forEach(id => {
                    const priceElement = document.getElementById(`${id}-price`);
                    if (priceElement) priceElement.textContent = 'API Error';
                });
            }
        }
        // Function to update NiceHash price
        async function updateNiceHashPrice() {
            const priceElement = document.getElementById('nice-price');
            const changeElement = document.getElementById('nice-change');
            try {
                // Simulate NiceHash price based on Bitcoin price
                const btcPrice = gameState.btcPrice.current;
                const nicePrice = btcPrice * 0.00002 * (1 + (Math.random() * 0.1 - 0.05)); // Random variation ±5%
                const change = (Math.random() * 4 - 2); 
                // Update display
                if (priceElement) priceElement.textContent = `$${nicePrice.toFixed(2)}`;
                if (changeElement) {
                    changeElement.textContent = `${change.toFixed(2)}%`;
                    changeElement.style.color = change >= 0 ? '#2ecc71' : '#e74c3c';
                }
            } catch (error) {
                console.error('Error updating NiceHash price:', error);
                if (priceElement) priceElement.textContent = 'Error';
                if (changeElement) {
                    changeElement.textContent = '0.00%';
                    changeElement.style.color = '#ffffff';
                }
            }
        }
        // Helper function to update display with validation
        function updatePriceDisplay(id, data) {
            const priceElement = document.getElementById(`${id}-price`);
            const changeElement = document.getElementById(`${id}-change`);
            // Check if data exists and has required properties
            if (!data || typeof data.usd === 'undefined') {
                if (priceElement) priceElement.textContent = 'N/A';
                if (changeElement) changeElement.textContent = '0.00%';
                return;
            }
            // Update price
            if (priceElement) {
                const formattedPrice = Number(data.usd).toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
                priceElement.textContent = `$${formattedPrice}`;
            }
            // Update change percentage if it exists
            if (changeElement) {
                const changeValue = data.usd_24h_change ? Number(data.usd_24h_change).toFixed(2) : '0.00';
                changeElement.textContent = `${changeValue}%`;
                changeElement.style.color = changeValue >= 0 ? '#2ecc71' : '#e74c3c';
            }
        }
        // Update all prices every hour
        setInterval(() => {
            updateAllMarketPrices();
            updateNiceHashPrice();
        }, 3600000);
        // gameState
        const gameState = {
            btcPrice: {
                current: 0
            }
        };
        function showNotification(message) {
            console.log('Notification:', message); // Debug log
            const notificationElement = document.createElement('div');
            notificationElement.textContent = message;
            notificationElement.className = 'notification'; // Ensure this class is styled
            document.body.appendChild(notificationElement);
            // Remove the notification after a few seconds
            setTimeout(() => {
                document.body.removeChild(notificationElement);
            }, 3000);
        }
    </script>
</body>
</html>