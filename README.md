## Overview

A one stop shop where anybody can obtain relevant athletic training information in order to train like today’s top athletes. The site will show you the types workouts you need to do, the muscle groups targeted, descriptions of which athletes complete these workouts, and an interface to track workouts. 

### Problem

The page is necessary as there is currently no place on the internet that gives you a centralized location of information that gives you this data. Places like bodybuilding.com and league sites just give you workouts catered to a certain muscle group, however, these websites only provide information about a particular muscle group. Another pain point would be that the majority of this information is subscription based, not open to the public.  My site will not only provide that information, free of charge, but will serve more as a roadmap to provide specific, targeted information that relates to a skill that a top athlete would have at their position. 

### User Profile

Any aspiring athlete at any level, who is looking to improve a certain part of their game. Specifically, High School student athletes and athletes who do not have access to a trainer or a mentor would highly benefit from this, as it is information that gains insight to what a top performer at their respective sport would look like. 

### Features

A list of positions by sport. 
A list of which workouts encompass multiple sports. 
Images of top athletes at the specific position. 
A search bar that allows you to search for a specific position or sport. 
A dynamic header and/or footer to take you back to the home page. 
A workout tracker which allows you to see where you are in a current workout. 

## Implementation

It could be implemented by high school athletic coaches, personal trainers, gym teachers, and minor league sports organizations. The site may deployed and hosted with Heroku and Netlify in order to keep it running.


### Tech Stack

React.js, HTML, JavaScript, CSS, SASS, API’s, Axios, Node.js, Express.js, MUI Component Library, Git. 

### APIs

At the moment, all of the data will be hosted in a backend repo. However there may be implementation of a free API wger.de, in order to better organize the workout tracker if time allows. 

### Sitemap

LandingPage: Access the site. 
HomePage: Select a workout based on a position
WorkoutDetailsPage: See the details of the workout which include the type of training, description of what top athlete would use the workout, muscles worked, and other positions in which this workout would encompass. 
WorkoutPage: Shows the duration, exercises, time intervals, and an image of the position you are training for.

### Mockups

https://www.figma.com/proto/ANXcYfjBdoAmqFzSz9g6G6/UpSkill-Prototype-Mockup?node-id=0-1&t=kFwFC2TUcEtK0qnb-1


### Data

Workouts.JSON {
      "id": 1,
      "type": "Strength Training",
      "description": "This is one of the workouts in which top level center fielders such as Aaron Judge use to further develop greater bat speed and power in their swings.",
      "muscles": ["Quadriceps", "Hamstrings", "Glutes", "Core"],
      "img": "https://example.com/images/back_squat.jpg",
      "img_grid": [
        "https://example.com/images/squat_start.jpg",
        "https://example.com/images/squat_bottom.jpg",
        "https://example.com/images/squat_up.jpg"
      ]
    },

Positions.JSON {
	“id”:1,
	“sport”: “baseball”,
	“position”: “center fielder”, 
	“img”: “https://example.com/images/centerfielder.jpg”
	}, 



### Endpoints

GET ‘/‘ (workouts): gets all the workouts in workouts.JSON
GET ‘/:id' (Specific Workout): gets one workout for the respective position. 




### Auth

Since the information provided is intended to be free of charge, no Auth or signup should be required. However, in the future, the app should include functionality to create a profile to see previous workouts or suggested workouts. 

## Roadmap

Build out Backend:
API to handle GET requests to get all the workouts, a workout by a specific ID. Routes and Controllers to access the data via axios requests.
Create Workouts.JSON data for the WorkoutDetailsPage. 
Create Positions.JSON data for the HomePage.  
Implement Try Catches to account for error handling. 
Obtain Static Served Images for the data.

Build out Front-End: 
Basic Page Structure: Create the main pages (header, footer, navigation) and lay out the basic structure via HTML.
Workout Components:
Exercise Details: Display exercise names, descriptions, instructions, images, muscle groups targeted, etc.
Progress Tracking: (Optional) Implement features for users to log their workouts, track weights, reps, sets, and see their progress over time.
User Interface (UI) Design:
Styling: Add fonts from google fonts, Create variables in SASS for each component. Create a color scheme in SASS to make sure colors remain consistent.  
Visual Hierarchy: Make sure important information stands out and the overall design is easy to navigate.
Responsive Design: make sure site is responsive and that all links to the other pages work. 

Testing:
Thorough Testing: Test on different browsers and devices. Fix any bugs or usability issues.
User Feedback: Get feedback from potential users to improve the experience.
Performance Optimization: Optimize images, code, and loading screens.
Accessibility: Ensure your site is accessible to users with disabilities (use semantic HTML, provide alt text for images, keyboard navigation). 

Deployment: 
Launch: Deploy website with Heroku and Netlify. 

## Nice-to-haves

A log where you can see which workouts you have completed. Goals for the next workout you wish to do. A recommended section for workouts that you have not completed yet. Push notifications that tell you when it is the next time to train. 
