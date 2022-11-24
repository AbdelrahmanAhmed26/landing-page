# Landing Page Project

## Table of Contents

- [Instructions](#instructions)

## Instructions

This is a project for the Udacity Front End Developer Nanodegree. The goal of this project is to create a landing page that is fully responsive and has a navigation menu that is dynamically created based on the number of sections on the page.

### How to run the project

1. Extract the zip file
2. Open the `index.html` file in your browser

## The project directory

index.html - The main html file
css/style.css - The main css file
js/app.js - The main javascript file
README.md - the project description file

## The modifications in the project

1. I added section 4 in the html file.
2. I added javascript in html file.
3. The navigation menu is dynamically created based on the number of sections on the page using javascript (I used the`document.getElementById()` method to get the sections and then used function to build the navigation menu and then used for loop to create lists of sections and links and then append them to the navigation menu and then used `addEventListener()` method to add event listener to the links and then used `scrollIntoView()` method to scroll to the section when the link is clicked and then used `.appendChild()` method to append lists for unordered list.
4. Adding `addEventListener()` For when near top of the section, the section is highlighted and remove the highlight when the section is not near the top of the page.
