# Portfolio-one
My first portfolio assignment for DIG4639

For this portfolio assignment, I created an exercise app called Get Into It. This exercise app allows you to pick from a list of five different types of duration or repetition exercises to choose from. 

# Repetition Exercise
Repetition Exercises are ones that allow you to count how many "reps" you do. The three repetition exercises available are: **Push Ups, Jumping Jacks, and Sit Ups**

For each of the available repetition exercises, a new screen will come up upon the click of the button. On the screen, you will see the name of the exercise you chose, a repetition counter initially set to 0, and three buttons. The first button, `Complete Rep`, increases the rep counter by 1 for each click. The second button, `Reset`, resets the rep counter back to 0. Finally the third button, `Status`, tells the user their current rep count and their status depending on that number as well as the data table displayed below. 

Now the data table displays data for the average repetition counts for male and female depending on their age. This information is used to justify what status a user has depending on their rep. 

Below the data table is a return button that takes the user back to the Home Page

# Duration Exercise
Duration Exercises are ones that allow you to time how long it takes you to do a given task. The two repetition exercises available are: **Bicycling and Running**

For each of the available duration exercises, a new screen will come up upon the click of the button. On the screen, you will see the name of the exercise you chose, an initial timer state, a `Lap` button, a `Start` button, and a `Return` button. 

The Lap button will initially be disabled until the user clicks Start. Once start is clicked, the big timer will start but you will also note that the smaller timer starts as well. This smaller timer displays how much time the user is taking for their Lap 1. As the user continues to press Lap, the screen will display Lap (n + 1) with a new timer going as the previous one stops. This keeps track of all the Laps done and the times that each individual one was done in but also the big timer mentioned before still runs overall until the user returns to the home page through the click of the `Reset` button. 

