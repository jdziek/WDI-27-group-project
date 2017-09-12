#Notitia
-
#### Installation

To run this code you will need to:

- Download or clone the repo
- In your command line run `yarn` and that will install everything needed to be able run this code
- From the directory just run `gulp` and it should direct you to the browser, with Notitia.

-
### The Project
This was built as a group project involving three

This project was built as a MEAN stack application using:

- Mongo - For the database
- Express - For the web-framework
- Angular - For the client-side framework
- Node - For the server-side language

We also included:

- Regular login/register
- Image upload using Amazon Web Services (s3)
- oAuth login
- TDD


The app is based on a teaching and learning basis. In which users can post something that they want to teach someone or post about something that they want to learn, the user would put where they would want to meet someone, we used Google Maps for this part.

#####There are different filters for looking through posts:

- All - returns all posts.
- Teaching and Learning - when one is selected then only posts which are for 'Teaching' will appear, and vice-versa.
- A date range - a user can select two dates and posts within and including those dates will be shown.
- Radius - Using a slider a user can search for posts that are '8km' from their current location.
- Search bar - A general search which searches for a title from a users inputting text, i.e. a user types in "investment banking" and with no other filters selected any posts which involve this input will be shown.

#####Other features
Users can also comment on posts as a form of communication.

Users can leave reviews on other users profile's with a rating system also put in place.


-
#####Software and Languages

Here is a list of the software and languages used in the project:

- HTML 5
- SCSS
- JavaScript ES6
- Gulp
- NPM
- Git & GitHub
- Express
- Node.js
- Yarn
- Bootstrap (Grid only)
- JSON
- AngularJS
- Mocha
- JWT
- Mongo

-
###Obstacles

One obstacle that we overcame was getting date range filter to work, wanting to be able to only use one date picker to for the user so when one date is selected on the same date picker you could choose another date and the days in between would be highlighted, however we couldn't get this to work, so we used two date pickers to filter the dates instead.

Another obstacle which proved a challenge was getting the features that we wanted to use from using the Google Maps to link and work with the rest of the app. Often they would collide with each other, causing one to work and one to break, after separating logic then joining it together in a simpler way we managed to overcome this.

-

### Enhancement and Development

We have compiled a list of advancements we would like to add to the project, these were not worked on due to either timing:

- Using an external API to give suggestions to users when they are making a new post based on the location that they have selected, perhaps TripAdvisor or Google Places.
- We would've liked to include direct messaging in the web app, instead of an external link that takes a user to a their email account.
- Adding a few animations across the app, e.g. on the filter option the box to slide down and the arrow to transition smoothly from facing up to facing down.
