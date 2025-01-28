---
layout: page 
title: Toolkits
permalink: /toolkit-login
search_exclude: true
---

{% include nav/homejava.html %}

<style>
.login-container {
    margin: 0 auto;
    max-width: 600px;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
}

.login-container h1 {
    margin-bottom: 20px;
    text-align: center;
}

.login-container form p {
    margin: 15px 0;
}

.login-container button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    text-align: center;
}

.login-container button:hover {
    background-color: #0056b3;
}

table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
}

table, th, td {
    border: 1px solid #ddd;
}

th, td {
    padding: 10px;
    text-align: left;
}

.message {
    color: red;
    margin-top: 10px;
}

.details-button {
    display: block;
    margin-top: 20px;
    padding: 10px;
    text-align: center;
    background-color: #28a745;
    color: white;
    text-decoration: none;
    border-radius: 5px;
}

.details-button:hover {
    background-color: #218838;
}
</style>

<div class="login-container">
    <h1>User Login (Java)</h1>
    <form id="javaForm" onsubmit="javaLogin(); return false;">
        <p>
            <label>
                User ID:
                <input type="text" name="uid" id="uid" required>
            </label>
        </p>
        <p>
            <label>
                Password:
                <input type="password" name="password" id="password" required>
            </label>
        </p>
        <p>
            <button type="submit">Login</button>
        </p>
        <p id="java-message" class="message"></p>
    </form>
    <!-- Data Table -->
    <table id="javaTable" style="display: none;">
        <thead>
            <tr>
                <th>Name</th>
                <th>Github Id</th>
                <th>Email</th>
                <th>Age</th>
                <th>Roles</th>
            </tr>
        </thead>
        <tbody id="javaResult">
            <!-- JavaScript-generated data -->
        </tbody>
    </table>
    <a href="{{ site.baseurl }}/javaUI" id="javaButton" class="details-button" style="display: none;">Java Details</a>
</div>

<script type="module">
    import { login, javaURI, fetchOptions } from '{{ site.baseurl }}/assets/js/api/config.js';

    // Function to handle Java login
    window.javaLogin = function () {
        const options = {
            URL: `${javaURI}/authenticate`,
            callback: javaDatabase,
            message: "java-message",
            method: "POST",
            cache: "no-cache",
            body: {
                uid: document.getElementById("uid").value,
                password: document.getElementById("password").value,
            },
        };
        login(options);
    };

    // Function to fetch and display Java data
    function javaDatabase() {
        const URL = `${javaURI}/api/person/get`;
        const loginForm = document.getElementById('javaForm');
        const dataTable = document.getElementById('javaTable');
        const dataButton = document.getElementById('javaButton');
        const resultContainer = document.getElementById("javaResult");
        resultContainer.innerHTML = '';

        fetch(URL, fetchOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Spring server response: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                loginForm.style.display = 'none';
                dataTable.style.display = 'block';
                dataButton.style.display = 'block';

                const tr = document.createElement("tr");
                const name = document.createElement("td");
                const ghid = document.createElement("td");
                const id = document.createElement("td");
                const age = document.createElement("td");
                const roles = document.createElement("td");

                name.textContent = data.name;
                ghid.textContent = data.uid;
                id.textContent = data.email;
                age.textContent = data.age;
                roles.textContent = data.roles.map(role => role.name).join(', ');

                tr.appendChild(name);
                tr.appendChild(ghid);
                tr.appendChild(id);
                tr.appendChild(age);
                tr.appendChild(roles);
                resultContainer.appendChild(tr);

                // Redirect to the student calendar after successful data fetch
            sessionStorage.setItem("loggedIn", "true");
            setTimeout(() => {
                window.location.href = "{{ site.baseurl }}/student/calendar";
            }, 5000); 
            })
            .catch(error => {
                console.error("Java Database Error:", error);
                const errorMsg = `Java Database Error: ${error.message}`;
                const tr = document.createElement("tr");
                const td = document.createElement("td");
                td.textContent = errorMsg;
                td.colSpan = 4;
                tr.appendChild(td);
                resultContainer.appendChild(tr);
            });
    }

        window.onload = function() {
        javaDatabase();
    };
</script>
