/* Rock Paper Scissors (Guard)

Make a game of rock-paper-scissors using DIVs as the buttons to select one of four options: rock, paper, scissors, and guard.

Add a space for a score display on the screen. Start the score at zero. (this will be tied to an application/global variable)

When any of the divs are clicked, run the logic for this game -

Generate a random move for the computer (rock/paper/scissors)
If the play chose guard
Skip the RPS logic, and subtract half a point from their score
Otherwise, run the RPS logic
Check to see if the player won against the computer
If so, add one to their score
Check if the player lost
If so subtract one from score
Check for tie
If so, do nothing to score
Once the logic is complete,
show the results of the round: You chose X, computer chose Y. 
update the score */

//when a div is clicked
    //generate random move (rock/paper/scissors)
    //if the player chose guard
        //point -0.5
        //ELSE IF
            //computer->paper player->rock
                //point -1
            //computer->scissors player->paper
                //point -1
            //computer->rock player->scissors
                //point -1
            //computer->rock player ->paper
                //score +1
            //computer->paper player->scissors
                //score +1
            //computer->scissors player->rock
                //score +1
            //computer->paper player->paper
                //score +0
            //computer->rock player->rock
                //score +0
            //computer->scissors player->scissors
                //score +0
//edit inner HTML to display player choice and computer choice and current score
