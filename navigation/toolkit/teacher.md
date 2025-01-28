---
layout: post 
title: Teacher Toolkit
description: 
permalink: /teacher
menu: nav/homejava.html
show_reading_time: false
---

<div class="toolkit-buttons">
  <a href = "{{site.baseurl}}/teacher-toolkit/period1" class="toolkit-button" data-description="View and manage student seating arrangements across all periods of our AP CSA class. Track the progress of each team, monitor tasks assigned to individuals at each table, and gain insights into each student’s GitHub activity, including their number of commits, issues, and more!">
    <img src="{{site.baseurl}}/images/toolkit-nav-buttons/studentmanagement.png" alt="StudentManagement"/>
    <span class="button-name">Table Management</span>
    <div class="description">
      <p>View and manage student seating arrangements across all periods of our AP CSA class. Track the progress of each team, monitor tasks assigned to individuals at each table, and gain insights into each student’s GitHub activity, including their number of commits, issues, and more!</p>
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
    background: none
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