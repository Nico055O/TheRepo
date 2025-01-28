---
layout: none
permalink: /stocks/leaderboard
title: Leaderboard
---

<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Leaderboard</title>
  <style>
    /* General Reset */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }

    body {
      font-family: Arial, sans-serif;
      background-color: #F4F4F9;
      color: #333;
      margin: 0;
      padding: 0;
    }

    /* Navbar Styling */
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 20px;
      background-color: #001F3F; /* Dark blue background */
      color: #fff;
    }
    .navbar .logo {
      font-size: 24px;
      font-weight: bold;
      letter-spacing: 2px;
    }
    .navbar .nav-buttons {
      display: flex;
      gap: 20px;
    }
    .navbar .nav-buttons a {
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      padding: 8px 16px;
      border-radius: 4px;
      transition: background-color 0.3s;
    }
    .navbar .nav-buttons a:hover {
      background-color: #FF8C00; /* Orange hover effect */
    }

    /* Main Dashboard Layout */
    .dashboard {
      display: flex;
      gap: 20px;
      padding: 20px;
    }

    .dashboard-content {
      flex: 3;
    }

    .sidebar {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    /* Leaderboard Table Styling */
    section {
      background: #fff;
      border-radius: 12px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      padding: 20px;
      margin: 20px 0;
    }

    h1, h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #2c3e50;
    }

    table {
      width: 100%;
      border-collapse: collapse;
    }

    thead {
      background-color: #001F3F;
      color: #fff;
    }

    th, td {
      padding: 12px 15px;
      text-align: center;
      border-bottom: 1px solid #ddd;
    }

    tbody tr:nth-child(even) {
      background-color: #f9f9f9;
    }

    tbody tr:hover {
      background-color: #f1f7ff;
      cursor: pointer;
    }

    td:first-child {
      font-weight: bold;
      color: #e67e22;
    }

    tbody tr:nth-child(1) td:first-child {
      color: #f1c40f;
      font-size: 1.2em;
    }
    tbody tr:nth-child(2) td:first-child {
      color: #95a5a6;
    }
    tbody tr:nth-child(3) td:first-child {
      color: #cd7f32;
    }

    /* Search Bar */
    .search-container {
      margin-bottom: 20px;
      display: flex;
    }
    .search-container input[type="text"] {
      flex: 1;
      padding: 12px;
      border: none;
      border-radius: 4px 0 0 4px;
      outline: none;
      font-size: 16px;
    }
    .search-button {
      background-color: #FF8C00;
      color: #fff;
      border: none;
      border-radius: 0 4px 4px 0;
      padding: 12px 20px;
      cursor: pointer;
      font-size: 16px;
      transition: background-color 0.3s;
    }
    .search-button:hover {
      background-color: #E07B00;
    }

    /* Summary Cards */
    .summary-cards {
      display: flex;
      justify-content: space-between;
      margin: 20px 0;
    }
    .card {
      flex: 1;
      margin: 10px;
      padding: 20px;
      border-radius: 8px;
      color: #fff;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    .card-orange { background-color: #FF8C00; }
    .card-purple { background-color: #6A0DAD; }
    .card-darkblue { background-color: #001F3F; }

    .card h2 { font-size: 20px; }
    .card p { font-size: 36px; font-weight: bold; }
  </style>
</head>
<body>

  <!-- Navbar -->
  <div class="navbar">
    <div class="logo">Leaderboard</div>
    <div class="nav-buttons">
      <a href="#">Home</a>
      <a href="#">Rankings</a>
      <a href="#">Profile</a>
    </div>
  </div>

  <!-- Dashboard -->
  <div class="dashboard">
    <!-- Main Content -->
    <div class="dashboard-content">
      <!-- Search -->
      <div class="search-container">
        <input type="text" placeholder="Search for a user..." />
        <button class="search-button">Search</button>
      </div>
    <div class="navbar">
        <div class="links">
            <a href="/portfolio_2025/crypto/portfolio" id="portfolioLink">Investing Portfolio</a>
            <a href="/portfolio_2025/crypto/mining" id="miningLink">Crypto Mining</a>
            <a href="/portfolio_2025/crypto/team" id="TeamLink">Team Stats</a>
            <a href="/portfolio_2025/crypto/leaderboard" id="leaderboardLink">Leaderboard</a>
        </div>
    </div>
      <!-- Summary Cards -->
      <div class="summary-cards">
        <div class="card card-orange">
          <h2>Top Rank</h2>
          <p>#1</p>
        </div>
        <div class="card card-purple">
          <h2>Users</h2>
          <p>1500+</p>
        </div>
        <div class="card card-darkblue">
          <h2>Average Balance</h2>
          <p>$12,345</p>
        </div>
      </div>

      <!-- Leaderboard Table -->
      <section>
        <h2>Top 10 Users by Balance</h2>
        <table id="top-users-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Balance</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            <!-- Data will be inserted dynamically -->
          </tbody>
        </table>
      </section>
    </div>

    <!-- Sidebar -->
    <div class="sidebar">
      <div class="stock-table">
        <h2>Your Stocks</h2>
        <table>
          <tr><th>Stock</th><th>Value</th></tr>
          <tr><td>Apple</td><td>$150.00</td></tr>
          <tr><td>Amazon</td><td>$3,200.00</td></tr>
        </table>
      </div>
    </div>
  </div>

  <script>
    // Fetch leaderboard data from the server
    fetch('http://localhost:8085/api/rankings/leaderboard')
      .then(response => response.json())
      .then(data => {
        const topUsersTable = document.querySelector('#top-users-table tbody');
        data.forEach((user, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${index + 1}</td>
            <td>$${Number(user.balance).toFixed(2)}</td>
            <td>${user.name}</td>
          `;
          topUsersTable.appendChild(row);
        });
      })
      .catch(error => console.error('Error fetching leaderboard data:', error));
  </script>
</body>
</html>