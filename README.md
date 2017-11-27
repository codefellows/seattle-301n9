
# seattle-301n9
*Class lecture repo for seattle-301n9. Lead Instructor: JB Tellez*

[![](https://img.shields.io/badge/canvas-301n9-blue.svg)](https://canvas.instructure.com/courses/1245195)
[![](https://img.shields.io/badge/Labs-301n9-yellow.svg)](https://github.com/codefellows-seattle-301n9)
[![](https://img.shields.io/badge/slack-301n9-orange.svg)](https://codefellows.slack.com/messages/seattle-301n9)

<a id="top"></a>
## Code 301

- [Course Overview & Objectives](#courseoverview)
- [Daily Lecture Structure](#lectures)
- [Weekly Overviews](#weeklyoverviews)
- [Course Materials in this Repository](#materials)
- [Course Operations](#operations)
- [Course GitHub Organization & Setup](#organization)
- [Course Grading & Prework; Other Academic Information](#grading)
- [Student Setup & Lab Workflow](#studentsetup)

<a id="courseoverview"></a>
## Course Overview

This course guides students through the collaborative process of developing a single page, dynamic web application, using the MVC (Model-View-Controller) design pattern.

The lab assignments for the course:

- Weeks 1 thru 4: Fulfillment, via pair-programming, of TODO items from starter code in a pre-existing blog application that evolves throughout the course. This is a real-world exercise for students in collaboration while learning and extending an existing codebase. These assignments are also a foundation for tackling technical challenges, developing code-reading skills, and gaining knowledge of application architecture.
- Week 5 and 6: Working with the same partner each day, writing and deploying a mobile-only book app. This is an exercise in creating full-stack applications which can be added as a personal portfolio item for future employers.

##### Course Learning Objectives

- Students will collaboratively design and create a single page web application from scratch using MVC architecture built with clean HTML, CSS, and JavaScript that satisfies stakeholder requirements captured in user stories.
- Students will have the skills to enroll in a Code 401 course or attain an entry-level website development job or internship by completing the course requirements.


[-top-](#top)

---

<a id="lectures"></a>
## Daily Lecture Structure

Daily lectures typically follow a three-part pattern: code review of the previous day's lab, introduction/demo of new material, and preparation for the daily lab assignment:

##### Code Review

Using the evolving codebase as the starting point for daily lectures, the class will walk through the previous days assignment(s).  This portion of lecture will be a discussion-based code review that is inviting and engaging. A typical code review lasts around 30-45 minutes, but can go much longer. It may be necessary to do upwards of 60-90 minutes of code review if the students are not comprehending the previously assigned lab materials.

##### Introduction and Demonstration of New Material

The subsequent portion of lecture will be focused on the introduction of new concepts, often with a series of introductory slides. Sometimes a deeper dive into topics feature live code demos, documentation reviews, and whiteboard diagrams.

##### Preparation for Lab

In weeks 1 thru 4, we will open up the codebase in editor and walk through the REVIEW and TODO items defined for that day in the starter code, making sure to read through each task description and paraphrase or discuss any confusing terminology.

In week 5 and 6, we will review the feature tasks and user stories for the lab assignment and discuss the way these tasks should be incorporated into the book app.

[-top-](#top)

---

<a id="weeklyoverviews"></a>
## Weekly Overviews

### Weeks 1-2: View

***The focus of the View module is understanding and constructing the view layer of a basic MVC web application.***

The View module begins in Class 1 with an introduction to mobile-first design and  responsive development principles, and includes the fundamentals of modular CSS, SMACSS, the box model, positioning, layouts, media queries, and design.  In Class 2, using jQuery and the JavaScript constructor pattern, we'll examine DOM selection, traversal, and manipulation; in addition, an introduction to Agile methodology is presented on this day. In Class 3 we'll explore jQuery events, effects, delegation, and principles of code modularity. In Class 4 the practical applications of typography and HTML templates are covered, ES6 template literals are presented, and a 3rd-party templating library is introduced ([Handlebars](http://handlebarsjs.com)). Class 5 is a form-building workshop that brings it all together and gives students an opportunity to apply their skills to the discussion and implementation of a new (old) problem: HTML forms.

##### Week 1-2 (View) Learning Objectives

* Managing the view layer: Students will construct and manage interactive, client-side websites by creating and altering the Document Object Model through selection, traversal, and manipulation.

### Week 3-4: Model

***The focus of this week is on the MVC model layer through the use of Node.js and PostgreSQL, providing students their first hands-on interaction with a full-stack application.***

The Model module begins in Class 6 with an introduction to the use of AJAX and JSON in the contexts of both the Web Request/Response Cycle (WRRC) and locally stored data files. In addition, the ES6 `let` and `const` variable declarations are presented on this day. The primary jQuery AJAX methods used during this week are **$.ajax(), $.get(), $.getJSON()**. Class 7 is an introduction to server-side code using Node.js, NPM, and Express. In Class 8 students are introduced to CRUD, persistence, and database concepts and get their first exposure to PostgreSQL. Class 9 focuses on more advanced SQL topics including joins and relations. Class 10 is an introduction to concepts of functional programming via the use of the JavaScript array methods **.map(), .filter(), .reduce()**.  

##### Week 3-4 (Model) Learning Objectives

* Students will write a model layer in their applications that accesses and transforms persisted client-side data,  conforming to common WRRC, FP, and CRUD conventions.

### Week 5-6: Controller

***The focus of this week is the controller layer of an MVC application.  Through the use of [Page.js](https://visionmedia.github.io/page.js/), students will be introduced to client-side routing, deployments and development environments, managing application state, and general OOP based modularity & refactoring.***

The Controller module begins in Class 11 with an introduction to single-page applications (SPAs) and client-side routing concepts using the 3rd-party library Page.js. In Class 12, the focus is on rounding out and solidifying HTTP and REST concepts, and token-based access of data from external APIs. Class 13 is centered on the concepts of production environments and deployment, culminating in deployment of the blog application and the booklist on Heroku. Class 14 is a deeper examination into the role of middleware in the management of application state, specifically getting/setting URL parameters with Page.js via its `context` object. Class 15 is for review and also the transition into Project Week.

##### Week 5-6 (Controller) Learning Objectives

* Students will finalize their MVC apps by:

    * completing our Single-Page App pattern with routing and controllers

    * integrating with 3rd-party REST APIs to display external data

    * and deploying to production environments with a pre-existing server.


### Week 7-8: Project Week

In teams, students create a single page web application that demonstrates command of all of the primary concepts discussed in this course.  Overall, the application should make API calls, have dynamic functionality, and display a well-factored MVC architecture. Groups should be generally be self-managing. They will need to have proper Agile processes in place in order to keep their project in scope and delivered on time.

[-top-](#top)




---

<a id="grading"></a>
## Course Grading & Prework; Other Academic Information

##### Grade Weightings

- See the Canvas course for the grade weightings and gradebook.

##### Prework

- Here is the prework GitHub repo link: [Code-301-prework](https://github.com/codefellows/code-301-prework)

##### Attendance

- Students are expected to maintain a 90% attendance rate.

##### Quizzes

- Course quizzes (one per week, published on Friday afternoon to be completed over the subsequent weekend) are administered through Canvas.

##### One On Ones

- The instructor will do one-on-one meetings with each student during Week 2 and possibly also during Week 4.

##### Reading Assignments

- Reading is one of the primary language-learning processes that students will utilize to develop their skills. Each day, one or more reading assignments is due before the start of lecture. Students are expected to make at least one observation and ask a question to promote curiosity and class discussion. Their submission is completed by them and graded within the Canvas course. The reading submissions in Canvas are by default setup to be graded with either a ‘complete’ or ‘incomplete’ mark, and as a result, the late submission policy is not in effect for reading assignments.


[-top-](#top)

---

<a id="studentsetup"></a>
## Student Setup & Lab Workflow

The README for the first lab assignment (../labs/01-mobile-first) has detailed instructions for students in setting up their local directories on their laptops and also instructions in pair-programming process.

[-top-](#top)
