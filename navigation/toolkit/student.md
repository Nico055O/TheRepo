---
layout: post 
title: Student Toolkit
description: 
permalink: /student
menu: nav/homejava.html
show_reading_time: false
---

<div class="toolkit-buttons">
  <a href="{{site.baseurl}}/bathroom" class="toolkit-button" data-description="Toolset transforms bathroom passes and restroom management with smart digital passes, real-time occupancy tracking, and seamless feedback options. By enhancing hygiene, accessibility, and comfort, it creates a more efficient and user-friendly bathroom experience.">
    <img src="{{site.baseurl}}/images/toolkit-nav-buttons/bathroom.png" alt="Bathroom" />
    <span class="button-name">Bathroom</span>
    <div class="description">
      <p>Toolset transforms bathroom passes and restroom management with smart digital passes, real-time occupancy tracking, and seamless feedback options. By enhancing hygiene, accessibility, and comfort, it creates a more efficient and user-friendly bathroom experience.</p>
    </div>
  </a>
  <a href="{{site.baseurl}}/student-toolkit/queue" class="toolkit-button" data-description="Gamify your learning experience with these tools that make studying more interactive and fun. Discover educational games, quizzes, and activities to boost your knowledge while enjoying the process." data-authors="Author: Jane Smith">
    <img src="{{site.baseurl}}/images/toolkit-nav-buttons/group-chat.png" alt="ScreenQueue" />
    <span class="button-name">ScreenQueue</span>
    <div class="description">
      <p>Use this sleek presentation system that allows for easier accessibility to screens during live reviews. Queue system is integrated to aid line management.</p>
    </div>
  </a>
  <a href="{{site.baseurl}}/student/submissions" class="toolkit-button" data-description="Explore collaboration resources that facilitate group work and team projects. Access platforms and tools designed to enhance communication, project management, and collective problem-solving." data-authors="Author: Alex Johnson">
    <img src="{{site.baseurl}}/images/toolkit-nav-buttons/submissions.png" alt="Submissions" />
    <span class="button-name">Assignment Submissions</span>
    <div class="description">
      <p>Submit assignments on this simple and easy-to-use user interface that is fed directly to Mr. Mortensen.</p>
    </div>
  </a>

  <a href="{{site.baseurl}}/student/seedtracker" class="toolkit-button" data-description="Do you want to request seed? This will allow you to do so." data-authors="Author: Alex Johnson">
    <img src="{{site.baseurl}}/images/toolkit-nav-buttons/seedtracker.png" alt="Seed Tracker" />
    <span class="button-name">Seed Tracker</span>
    <div class="description">
      <p>Do you want to request seed? This will allow you to do so.</p>
    </div>
  </a>

  <a href="{{site.baseurl}}/teacher/sagai" class="toolkit-button" data-description="Tired of opening ChatGPT all day everyday? Want an AI companion with you on the site that helps you study for CSA? Look no further! Here you can use AI to generate hacks for practice, grade your hack answers and get feedback, and ask questions to your follow classmates and teachers!">
    <img src="{{site.baseurl}}/images/toolkit-nav-buttons/sagai.png" alt="SAGAI" />
    <span class="button-name">SAGAI</span>
    <div class="description">
      <p>Tired of opening ChatGPT all day everyday? Want an AI companion with you on the site that helps you study for CSA? Look no further! Here you can use AI to generate hacks for practice, grade your hack answers and get feedback, and ask questions to your follow classmates and teachers!</p>
    </div>
  </a>
</div>

<style>
  .toolkit-buttons {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    height: 100vh;
    margin: 0;
    padding: 20px;
  }

  .toolkit-button {
    width: 30%;
    height: auto;
    background-color: transparent;
    color: white;
    font-size: 1.5rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    text-decoration: none;
    padding-bottom: 20px;
  }

  .toolkit-button img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    filter: blur(5px);
    transition: filter 0.3s ease, transform 0.3s ease;
  }

  .toolkit-button .button-name {
    position: relative;
    z-index: 1;
    font-size: 1.2rem;
    margin: 10px 0;
  }

  .toolkit-button .description {
    opacity: 0;
    position: relative;
    background: none;
    color: white;
    padding: 10px;
    text-align: center;
    transition: opacity 0.3s ease, transform 0.3s ease;
    white-space: normal;
    width: 100%;
    z-index: 1;
    font-size: 0.8rem;
    margin-top: 10px;
  }

  .toolkit-button:hover {
    transform: scale(1.1);
  }

  .toolkit-button:hover img {
    filter: blur(0);
  }

  .toolkit-button:hover .description {
    opacity: 1;
    transform: translateY(10px);
  }
</style>