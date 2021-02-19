# IP -Forget-Me-Not
Warning- cannot be viewed in github because somehow gsap does not work there
This project is an interactive website that 
- reminds tech savvy users,eg; teenagers and young adults to not forget to bring their things when they leave their house 
- makes use of gamification features to subconsciously make them want to remember what they need to bring in order to get rewards in the game.

## Design Process
This mobile website is targeted towards tech savvy users, especially catered towards teenagers and young adults.

The purpose of the targeted audience in using this mobile application is
-  to remember to bring their items out of the house that might be small but be of great inconvenience if they forget to bring them out.
  
This mobile application encourages a good habit of keeping checklists by
- employing the use of gamification features to motivate them to keep a checklist.

As many users in general feel that keeping a checklist is very troublesome and a chore to do, this mobile application aims to tell users that making a checklist can be fun as well.

- As a user, I would like a fun system that encourages me to create checklists and remember to bring things 
Provide us insights about your design process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to perform an action, so that I can achieve a goal.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. 
These files should themselves either be included as a pdf file in the project itself (in an separate directory)
Include the Adobe XD wireframe as a folder. You can include the XD share url. 

## Features

- color of the animations and backgrounbd change with time
- contains a digital clock
- animation employed using lottie and gsap to keep users distracted while the application is loading
- stores a checklist using nosql
- stores user information when they sign up

 
### Existing Features
- Feature 1 - allows users X to achieve Y, by having them fill out Z
- ...

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- geolocation Api to notify users when they leave the house
- ability to delete items from the no sql database
- ability to link the user accounts accounts together

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [gsap](https://cdnjs.com/libraries/gsap)
  The project uses **gsap** for animations
- [bootstrap](https://getbootstrap.com/)
  This project uses **bootstrap** for the style
- [lottie](https://airbnb.design/lottie/)
  This project uses **lottie** to create animations

## Testing

1. log in form:
    1. Go to the "Log in" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears. (failed)
   
2. Gaining of plants:
   - try to buy a plant from the marketplace and see if it appears in my plants

3. Deduction of coins:
   - try to buy a plant from the marketplace and see if coins are deducted.(failed)


my project only works on mobile screens as this is supposed to be a mobile application.

The nav bar has some bugs that causes the div to be shown weirdly.

I have not addressed the delete info from the database and have been trying to do so for the past week.


## Credits
Jaslyn for all the programming
Jiayi for designing the icons and doing the assets
### Content
- The text for the content was written by me

### Media
- The images used in this site were obtained from Jiayi's drawing

### Acknowledgements
- Thank you to Jiayi for creating the nav bar icons.
- Thank you so much to Ms Dai for helping me and advising me alot about this project.
- Thank you Mr Malcolm for giving some suggestions to help me with my project.
