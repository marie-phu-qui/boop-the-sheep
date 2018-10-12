# BOOP THE SHEEP
<p align="center">
<img src='https://ubisafe.org/images/sheep-vector-1.png'>
</p>
Ice country, a flock of sheeps are wearing hawaiian shirts. It is intriging. You just cannot resist to boop the sheep, but be careful some electric sheeps are hidden through the harmless cozy cool caprinaes, and they are up to no good.

# Environment
Boop the sheep features two worlds. The ice world of hawaiian shirts sheeps, and the tropical world of leather jacket sheeps. They are both similar with random electric sheep that will buzz you. After 5 buzz you will automatically change world. The non electrical sheeps will just jump out of the screen when clicked.

# Goal
Boop all the harmless sheeps. \
Developper goal : Using TTD approach. <3 Enzyme and Jest <3 

# User Stories
##  MVP
- Game rules : Random sheep is electric. Sheep roulette times.

- As a user:
  - I see an ice world 
  - I see sheeps wearing hawaiian shirts
  - I can boop a sheep
    - a non electric sheep will jump out of screen
    - an electric sheep will electrocute me and stay there
  - The sheeps are moving slowly on the screen
  - If I boop and electric sheep the surrounding sheeps are afraid of the lightning effect and stay away from the booped electric sheep
  - I die after 5 bad boop

- As a developper :
  - I use canvas
  - I have moving sheep on this canvas
  - My sheeps have a random characteristic of electric or not
  - I decrease booper lives (starting from 5) at each bad boop 


##  Stretch
- Game rules : Every sheep has defining props : { wool_color: (string); outfit_color: (string); eye_color: (string); smile : (boolean); (optional : legs: (int))}; only the groupe of sheep with the same one property value are electrical at the same time. \
-> Strech. The electric state can changes if a storm comes.

- As a user:
  - I see an tropical island world 
  - I see sheeps wearing leather jackets
  - The sheeps are moving more slowly on grassy patch because they eat
  - A booped electric sheep will caring a lightning effet wool coat / leather jacket for 3 seconds after boop
  - I can acces to my best scores. 
  - I can access the secret Volcano Pit level
  

- As a developper : 
  - I am learning and using React Native, I feel great ! 
  - The Volcano Pit : Push only the electrical sheep down the lava bath - Admire the stormy effects. Nice. You loose if you push 3 harmless sheeps down the pit in a row. Sheep roast. Random times.
  - I set up different difficulty level - the sheeps tend to move more, there are more electric sheeps
  - Master trick : If two booped electric sheeps are close enough (nothing in betwen them) they overcharge and turn back into regular sheeps (cf : conways game of life)
  
 ### Extension : Electric sheep
 Same game. But you are the sheep. \
 Do not get booped by the geant finger, run surrounded by as many sheeps as you can to create friction and become and electric sheep.
 

# Tools
Using canvas for the web app. \
Using React Native for the mobile version

