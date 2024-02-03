---
track: "H"
title: "Project 2"
week: 18
day: 3
type: "homework"
topics: "Presentation Saturday January 27th"
---
# Project Two: Your First API

<br>
<br>
<br>


## Overview

This second project is your first foray into **building a full-stack application.** You'll be **building a Node/Express/MongoDB app** from the ground up yourself. This would be the backend portion of a Modern MERN Stack App.

***VIEWS AND VIEW ENGINES ARE NOT A PART OF THIS PROJECT***

**You will be working individually for this project;**

You get to decide what you want to build - as long as it meets the technical requirements outlined below.

Once you've decided what you will build, please contact your instructional team for approval of your idea and then begin working on the **Planning & Presentation Requirements** below. If its from the preapproved list no conversation is necessary


<br>
<br>
<br>



## Planning & Presentation Requirements

- To receive a passing grade on this project, you need to have turned in the following:

- A **[Trello](https://trello.com/) board** or **Github Project** with:

    - **User Stories**, each moving from left to right in the following
      three lists in your board:
    - **Ice Box**
    - **Current/MVP**
    - **Completed**


**User Stories must follow the following template:** _As a user, I want [feature],  because [reason]._

The _reason_ is optional if it's blatantly obvious.

[**Click here for an example you can use for inspiration**](https://trello.com/b/igfMN4t1/mongoose-movies)

<br>
<br>



> **Note:** Prioritize your user stories within the Ice Box with your "wish list" stories at the bottom.

- **Wireframes of the main pages of functionality**, e.g. Landing Page, Posts Index Page, Favorite Posts Page, Add Post Page, etc.

- You don't have to build ANY FRONTEND, but your wireframes should make it clear what you would intend for the frontend to be based on the API create.

- A **Diagram** showing the attributes of each model you used to create yourt API and the associations between the models.

![mongoose-movies](/images/drawSQL-export-2022-10-14_08_19.png)

- A Readme that fully explains to a user how to do the following:
1. How to install this app on their local machine
1. What global installations they need and what files do they need to create that didn't come in the github repo
1. How to start the app in dev mode
1. How to make an api request in Postman (i.e what port, what url etc)
1. How to run tests
1. How to start the app without dev mode.
<br>
<br>


### Finished Project Presentation

You will have a maximum of 7 minutes to present your project following these guidelines:


1. **Introduce the Project and Setup and install it:**

	☐ Intro your API by reviewing the README.
    ☐ Follow your own installation instructions in the README in a brand new fresh folder from scratch

2. **Demonstrate the Project Once Set Up:**
    ☐ Show passing automated tests.

	☐ Launch postman.

    ☐ Demonstrate Signing Up a User, Demonstrate Logging In A User, Demonstrate using a Token for authorization

    ☐ Demonstrate Create, Read, Update & Delete on a Model other than the User


3. **Show/discuss your code:**

	☐ Show the "main" Mongoose model (I don't want to see your user model unless you added something special or wierd ).

	☐ Show the controller for the main model.

    ☐ I don't want to see your tests unless you did something special, user auth & tests should plug & play do it the same every time with only very minor changes app to app.

4. **Share the experience:**

	☐ What was your biggest challenge?

	☐ What are your key learnings/takeaways?

5. **Q & A + Feedback**

<br>
<br>
<br>




## Technical Requirements

### Your App Must:

☐ **Have at least 2 data entities in in total, so one "User" schema & model and another schema & model that represents the main functional idea for your app (relationships between entities are encouraged, but not required)**

☐ **Use JWT authentication**.

☐ Have **complete CRUD data operations** on one of your data entities.

☐ Be available on Github.com (NOT ENTERPRISE) without your `.env` or `node_modules` (because of `.gitignore`) and your readme

<br>
<br>
<br>



### Optionally, Your App May:

☐ Consume a third-party API.

☐ Build a Front End App that calls your API

<br>
<br>
<br>




## Necessary Deliverables

☐ Trello
☐ Github Repo & README
☐ Psudeocode & Wireframes

<br>
<br>
<br>




## Suggested Ways to Get Started

- Because your app's functionality revolves around the logged in user, **implement authentication first!**
- **Discuss your api idea with an instructor to get their feedback before you dive too deep into user stories and wireframes.**
- **Remember to keep things small and focus on the MVP** – feature creep can doom a project!

<br>
<br>
<br>



## Project Idea Guidance (In order of complexity)
1. Create A Fruits List API (User, Fruits) **4 - 8 hours of Engineering, Including Wireframes, Building API and Testing it Manually & Automatically via JEST & SUPERTEST**
1. Create A Blog API (User, Posts) **12 - 20 hours**
1. Create A TodoList API (Users & Todo Items) **12 - 20 hours**
1. Create A Shopping Cart (Users, Carts, Items) **40 - 60 hours**
1. Create An Event Tracker (Users, Events, Attendees) **80 - 100 hours**
1. Create A Trello Board API (Users, Boards, Columns, Tasks) **80 - 100 hours**
1. Create A Grade Book API (Teacher, Subjects, Classes, Students, Assignments) **100 - 120 hours**

***These hours are in addition to the time it takes you to:***
1. Make a Readme
1. Make a Trello



If you come up with your own, anything that require more than 2 Models must be approved by **Arthur**

### Useful Resources

- **[Writing Good User Stories](https://www.freecodecamp.org/news/how-and-why-to-write-great-user-stories-f5a110668246/)** _(user story tips)_
- **[Trello](https://trello.com/)**
- **[Example Trello Board](https://trello.com/b/igfMN4t1/mongoose-movies)**
- **[How to Create ERDs](https://www.youtube.com/watch?v=QpdhBUYk7Kk)**


Other Project APIs
1. Bookmarks: As a user i can add my favorite websites to a list only i can see
2. Notes App: As a user, I can create, edit, and delete notes, categorize them, and search through my notes.
3. Expense Tracker: As a user, I can log expenses, categorize them, and view a summary of my spending.
4. Event Planner: As a user, I can schedule events, set reminders, and track upcoming events.
5. Fitness Tracker: As a user, I can record my workouts, track progress, and set fitness goals.
6. Recipe Book: As a user, I can add, edit, and search for recipes, and list ingredients for shopping.
7. Reading List: As a user, I can maintain a list of books, mark them as read, and add reviews.
8. Personal Diary: As a user, I can write diary entries, tag them, and browse through past entries.
9. Habit Tracker: As a user, I can track daily habits, set goals, and view my streaks.
10. Budget Planner: As a user, I can create a budget, log transactions, and view financial summaries.
11. Travel Journal: As a user, I can document my trips, add locations, and share experiences.
12. Goal Setter: As a user, I can set personal goals, track milestones, and monitor my progress.
13. Music Playlist Organizer: As a user, I can create playlists, add songs, and categorize them.
14. Language Learning Log: As a user, I can track new words, practice them, and monitor my learning.
15. Movie Watchlist: As a user, I can add movies to my watchlist, mark them watched, and leave comments.
16. Daily Planner: As a user, I can schedule tasks, set reminders, and organize my day.
17. Pet Care Log: As a user, I can track my pet’s activities, set reminders for care, and log vet visits.
18. Study Planner: As a user, I can organize study sessions, set goals, and track subjects.
19. Job Application Tracker: As a user, I can track job applications, set follow-up reminders, and note outcomes.
20. Gift Ideas Organizer: As a user, I can note gift ideas, link them to occasions, and track purchases.
21. Skill Learning Tracker: As a user, I can record new skills I’m learning, track my progress, and set learning goals.
22. Gardening Helper: As a user, I can keep a log of my plants, schedule care tasks, and track growth.
23. Meal Planner: As a user, I can plan meals for the week, save recipes, and track nutritional intake.
24. Book Club Organizer: As a user, I can schedule club meetings, discuss books, and share reading lists.
25. Sports Team Manager: As a user, I can manage team rosters, schedule matches, and track results.
26. Daily Affirmations: As a user, I can create and view daily affirmations, and track my mood over time.
27. Water Intake Tracker: As a user, I can log daily water intake, set hydration goals, and view trends.
28. Personal Inventory: As a user, I can catalog my belongings, categorize items, and track lending.
29. Volunteer Activity Tracker: As a user, I can log volunteer hours, track activities, and set goals.
30. Podcast Tracker: As a user, I can keep track of podcasts I listen to, mark episodes, and note favorites.
31. Art Portfolio: As a user, I can showcase my artworks, organize them into collections, and share them.
32. Sleep Tracker: As a user, I can log sleep hours, rate sleep quality, and view sleep patterns.
33. Weather Tracker: As a user, I can log weather conditions daily and view historical weather data.
34. Local Restaurant Guide: As a user, I can explore restaurants, rate them, and save favorites.
35. Personal Time Tracker: As a user, I can track time spent on various activities and analyze productivity.
36. Daily Quote App: As a user, I can view daily quotes, save favorites, and share them with others.
37. Public Speaking Progress Tracker: As a user, I can log speeches, track improvements, and set goals.
38. Simple Blogging Platform: As a user, I can write and publish blog posts, and interact with readers.
39. Homework Reminder App: As a user, I can track homework assignments and set due date reminders.
40. Personal Finance Advisor: As a user, I can receive financial tips and track my financial learning.
41. Concert Memory Keeper: As a user, I can log concerts I’ve attended, add setlists, and share my experiences.
42. Comic Book Collection: As a user, I can catalog my comic books, track issues, and rate them.
43. Local Cafe Guide: As a user, I can discover cafes nearby, save favorites, and leave reviews.
44. Gym Workout Log: As a user, I can record my exercises, track progress, and set fitness goals.
45. Mindfulness Tips App: As a user, I can access daily mindfulness tips, track practices, and note effects.
46. Vegan Recipe Sharing: As a user, I can share vegan recipes, save favorites, and comment on others.