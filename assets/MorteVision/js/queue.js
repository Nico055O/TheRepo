// import uri
import { javaURI } from '../../js/api/config.js';

let assignment = null;
let currentQueue = [];

let person;

document.getElementById('addQueue').addEventListener('click', addToQueue);
document.getElementById('removeQueue').addEventListener('click', removeFromQueue);

let timerInterval;
let timerlength;
let queueUpdateInterval;

const URL = javaURI + "/api/assignments/"
console.log(URL)

// timer function to start countdown for person
function startTimer() {
    let time = timerlength;
    timerInterval = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        document.getElementById('timerDisplay').textContent =
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        time--;
        if (time < 0) {
            clearInterval(timerInterval);
            moveToDoneQueue();
        }
    }, 1000);
}

// ensure accessible outside of current module
window.startTimer = startTimer;

async function fetchQueue() {
    const response = await fetch(URL + `getQueue/${assignment}`);
    if (response.ok) {
        const data = await response.json();
        updateQueueDisplay(data);
    }
}

async function fetchTimerLength() {
    console.log("test")
    const response = await fetch(URL + `getPresentationLength/${assignment}`);
    if (response.ok) {
        const data = await response.json();
        console.log(data);
        timerlength = data;
        document.getElementById('timerDisplay').textContent = `${Math.floor(timerlength / 60).toString().padStart(2, '0')}:${(timerlength % 60).toString().padStart(2, '0')}`;
    }
}

// add user to waiting
async function addToQueue() {
    await fetch(URL + `addToWaiting/${assignment}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([person])
    });
    fetchQueue();
}

// remove user from waiting
async function removeFromQueue() {
    await fetch(URL + `removeToWorking/${assignment}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify([person])
    });
    fetchQueue();
}

// move user to completed
async function moveToDoneQueue() {
    const firstPerson = [currentQueue[0]];
    await fetch(URL + `doneToCompleted/${assignment}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(firstPerson)
    });
    fetchQueue();
}

// reset queue - todo: admin only
async function resetQueue() {
    await fetch(URL + `resetQueue/${assignment}`, {
        method: 'PUT'
    });
    fetchQueue();
}

// update display - ran periodically
function updateQueueDisplay(queue) {
    currentQueue = queue.waiting;

    const notGoneList = document.getElementById('notGoneList');
    const waitingList = document.getElementById('waitingList');
    const doneList = document.getElementById('doneList');

    notGoneList.innerHTML = queue.working.map(person => `<div class="card">${person}</div>`).join('');
    waitingList.innerHTML = queue.waiting.map(person => `<div class="card">${person}</div>`).join('');
    doneList.innerHTML = queue.completed.map(person => `<div class="card">${person}</div>`).join('');
}

document.getElementById('beginTimer').addEventListener('click', startTimer);

// Start the interval to periodically update the queue
function startQueueUpdateInterval(intervalInSeconds) {
    if (queueUpdateInterval) clearInterval(queueUpdateInterval); // Clear existing interval if any
    queueUpdateInterval = setInterval(() => {
        console.log("Updating queue...");
        fetchQueue();
        fetchTimerLength();
    }, intervalInSeconds * 1000);
}

// Stop the interval for queue updates if needed
function stopQueueUpdateInterval() {
    if (queueUpdateInterval) clearInterval(queueUpdateInterval);
}

window.addEventListener('load', () => {
    fetchUser();
    showAssignmentModal();
});

async function fetchUser() {
    const response = await fetch(javaURI + `/api/person/get`, {
        method: 'GET',
        cache: "no-cache",
        credentials: 'include',
        headers: { 
            'Content-Type': 'application/json',
            'X-Origin': 'client' 
        }
    });
    if (response.ok) {
        const userInfo = await response.json();
        person = userInfo.name;
        console.log(person);
    }
}

async function showAssignmentModal() {
    const modal = document.getElementById('assignmentModal');
    const modalDropdown = document.getElementById('modalAssignmentDropdown');

    const response = await fetch(URL + 'debug');
    if (response.ok) {
        const assignments = await response.json();
        modalDropdown.innerHTML = assignments.map(assignment =>
            `<option value="${assignment.id}">${assignment.name}</option>`
        ).join('');
    }

    modal.style.display = 'block';

    // Add event listener for the confirm button
    document.getElementById('confirmAssignment').addEventListener('click', () => {
        const selectedAssignment = modalDropdown.value;
        if (selectedAssignment) {
            assignment = selectedAssignment; // Set the global assignment variable
            fetchQueue();
            startQueueUpdateInterval(10);
            fetchTimerLength();
            modal.style.display = 'none';
        } else {
            alert('Please select an assignment.');
        }
    });
}

fetchAssignments();
fetchQueue();