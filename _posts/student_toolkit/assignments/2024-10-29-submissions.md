---
toc: false
title: Submission Page
permalink: /student/submissions
search_exclude: true
layout: post
---

<title>Submission Form</title>
<style>
    select, input[type="url"], textarea, button {
        width: 100%;
        padding: 15px; 
        font-size: 18px; 
        margin: 12px 0; 
        border: 1px solid #ddd;
        border-radius: 6px; 
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    textarea {
        resize: vertical;
        min-height: 150px; 
    }
    button {
        background-color: #4CAF50;
        color: white;
        font-size: 18px; 
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    button:hover {
        background-color: #45A049;
    }
    .modal-content h2 {
        font-size: 28px; 
        color: white;
        margin-bottom: 20px;
    }
    .output-box {
        margin-top: 15px;
        font-size: 30px;
        color: #ffffff;
        animation: moving-glow2 2s infinite;
    }
    .Assignment-Name{
        font-size: 20px; 
        color: white;
    }
    .Assignment-Content{
        font-size: 16px; 
        color: white;
    }
    @keyframes moving-glow {
        0% {
            box-shadow: 0 0 10px rgba(81, 0, 255, 0.8);
        }
        50% {
            box-shadow: 0 0 30px rgba(81, 0, 255, 0.8);
        }
        100% {
            box-shadow: 0 0 10px rgba(81, 0, 255, 0.8);
        }
    }
    @keyframes moving-glow2 {
        0% {
            box-shadow: 0 0 10px rgba(0, 255, 162, 0.8);
        }
        50% {
            box-shadow: 0 0 30px rgba(0, 255, 162, 0.8);
        }
        100% {
            box-shadow: 0 0 10px rgba(0, 255, 162, 0.8);
        }
    }
</style>

<div id="modal" class="modal">
    <div class="modal-content">
        <h2>Submit here</h2>
        <select id="assignment-select">
            <option value="" disabled selected>Select a Assignment</option>
        </select>
    </div>
    <div class="Assignment-Content" id="Assignment-Content">Assignment-Content</div>
    <br><br>
    <div>
        <label for="submissionContent" style="font-size: 18px;">Submission Content:</label>
        <input type="url" id="submissionContent" required />
    </div>
    <br><br>
    <div>
        <label for="comments" style="font-size: 18px;">Comments:</label>
        <textarea id="comments" rows="4" style="width: 100%;"></textarea>
    </div>
    <br><br>
    <button id="submit-assignment">Submit Assignment</button>
    <br><br>
    <div class="output-box" id="outputBox"></div>
    <br><br>
    <h1>Previous Submissions for: </h1>
    <div class="Assignment-Name" id="Assignment-name">Assignment-Content</div>
    <br><br>
    <table id="submissions-table" style="width: 100%; margin-top: 20px;">
        <thead>
            <tr>
                <th>Submisssion Content</th>
                <th>Grade</th>
                <th>Feedback</th>
            </tr>
        </thead>
        <tbody>
            <!-- Submissions will be populated here -->
        </tbody>
    </table>
    
</div>


<script type="module">
    import { javaURI, fetchOptions } from '{{site.baseurl}}/assets/js/api/config.js';
    let selectedTask = "";
    let tasks = "";
    let assignmentIds = [];
    let submissions=[];
    let assignIndex = 0;
    let assignments;
    let userId=0;
    let Student;

    document.getElementById("submit-assignment").addEventListener("click", Submit);
    function Submit() {
        let urllink_submit=javaURI+"/api/submissions/submit/";
        const submissionContent = document.getElementById('submissionContent').value;
        const comment=document.getElementById('comments').value;
        getUserId();
        const student_id=userId;
        const assigmentId=assignments[assignIndex-1].id;
        urllink_submit+=assigmentId.toString();
        const data = new FormData();
        data.append("studentId", student_id);
        data.append("content", submissionContent);
        data.append("comment", comment);

        fetch(urllink_submit, {
            method: 'POST',
            credentials: 'include',
            body: data,
        })
        .then(response => {
            const outputBox = document.getElementById('outputBox');
            if (response.ok) {
                outputBox.innerText = 'Successful Submission! ';
                return response.json();
            } else {
                outputBox.innerText = 'Failed Submission! ';
                throw new Error('Failed to submit data: ' + response.statusText);
            }
        })
        .then(result => {
            console.log('Submission successful:', result);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    }



    async function fetchAssignments() {
        try {
            const response = await fetch(javaURI+"/api/assignments/debug", {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                }
            });
            assignments=await response.json();
            populateAssignmentDropdown(assignments);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    }

    function populateAssignmentDropdown(Assignments) {
        const assignmentSelect = document.getElementById('assignment-select');
        Assignments.forEach(assignment => {
            const option = document.createElement('option');
            option.value = assignment.name;
            option.textContent = assignment.name;
            assignmentSelect.appendChild(option);
            assignmentIds.push(assignment.id);
        });
    }
    
    document.getElementById("assignment-select").addEventListener("change", function() {
        selectedTask = this.value;
        assignIndex = this.selectedIndex;
        document.getElementById("Assignment-Content").innerText=assignments[assignIndex-1].description;
        document.getElementById("Assignment-name").innerText= this.value;
        fetchSubmissions();
    });


     async function getUserId(){
        const url_persons = `${javaURI}/api/person/get`;
        await fetch(url_persons, fetchOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Spring server response: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                userId=data.id;


            })
            .catch(error => {
                console.error("Java Database Error:", error);
            });
    }


    

    async function fetchSubmissions(){
        const urllink=javaURI+"/api/submissions/getSubmissions";
        const urllink2=javaURI+"/assignment/"+assignIndex.toString();
        const theUserId=await getUserId();
        try {
            const response = await fetch(`${urllink}/${userId}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                }
            });
            const Submissions=await response.json();
            populateSubmissionsTable(Submissions);
        } catch (error) {
            console.error('Error fetching submissions:', error);
        }
    }

    function populateSubmissionsTable(submissions) {
        const tableBody = document.getElementById('submissions-table').getElementsByTagName('tbody')[0];
        tableBody.innerHTML = ''; 
    
        submissions.forEach(submission => {
            const row = document.createElement('tr');
            //console.log(submission.assignmentid+" "+assignIndex);
            if(submission.assignmentid==assignIndex){
                const contentCell = document.createElement('td');
                contentCell.textContent = submission.content || 'N/A'; 
                row.appendChild(contentCell);
    
                const gradeCell = document.createElement('td');
                gradeCell.textContent = submission.grade || 'Ungraded'; 
                row.appendChild(gradeCell);
    
                const feedbackCell = document.createElement('td');
                feedbackCell.textContent = submission.feedback || 'No feedback yet'; 
                row.appendChild(feedbackCell);
    
    
                
                tableBody.appendChild(row);
            }
    
           
        });
    }

    getUserId();
    fetchSubmissions();
    fetchAssignments();
</script>
