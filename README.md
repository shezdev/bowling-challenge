Bowling Challenge - My Approach
================================
https://travis-ci.org/shezdev/bowling-challenge
* Overall - To use a test-driven approach (using Jasmine) to develop the business logic with JavaScript and the front-end with html, jQuery and JavaScript.
* Initially I used diagramming firstly to draw out what I wanted the interface to look like from the user's perspective, and then I thought about what objects I would need and how they related to eachother.
* I got a long way into the business logic, then realised my tests hadn't been running properly!
* At the same time, completely changed my approach with the game class (to be initialised with 10 frame objects, that could be accessed.)
* Tests have been re-written!
* I have created a basic interface where the following features can be demonstrated.

Perfect Game:
-------------
![Perfect Game Example](images/PerfectGame.png)

Gutter Game:
-------------
![Gutter Game Example](images/GutterGame.png)

* I also included ability for a user to play a game themselves (however the logic behind the frame total in frame 10 needs investigating!)

How to play:
============
* Open your command line and install a clone of this repo.
* Run atom . to open Atom from your current directory.
* Open SpecRunner.html in Atom, and drag the tab to your Chrome web browser.
* press command + alt + i to open the Chrome developer console.

'''
g = new Game;

g.playFrame1(10,0);

g.playFrame2(10,0);

g.playFrame3(10,0);

g.playFrame4(10,0);

g.playFrame5(10,0);

g.playFrame6(10,0);

g.playFrame7(10,0);

g.playFrame8(10,0);

g.playFrame9(10,0);

g.playFrame10(10,10,10);

g;

Game
_frame1
:
Frame
_frameScore
:
30
_roll1
:
10
_roll2
:
0
_roll3
:
0
_strikeType
:
"X"
__proto__
:
Object
_frame2
:
Frame
_frameScore
:
30
_roll1
:
10
_roll2
:
0
_roll3
:
0
_strikeType
:
"X"
__proto__
:
Object
_frame3
:
Frame
_frameScore
:
30
_roll1
:
10
_roll2
:
0
_roll3
:
0
_strikeType
:
"X"
__proto__
:
Object
_frame4
:
Frame
_frameScore
:
30
_roll1
:
10
_roll2
:
0
_roll3
:
0
_strikeType
:
"X"
__proto__
:
Object
_frame5
:
Frame
_frameScore
:
30
_roll1
:
10
_roll2
:
0
_roll3
:
0
_strikeType
:
"X"
__proto__
:
Object
_frame6
:
Frame
_frameScore
:
30
_roll1
:
10
_roll2
:
0
_roll3
:
0
_strikeType
:
"X"
__proto__
:
Object
_frame7
:
Frame
_frameScore
:
30
_roll1
:
10
_roll2
:
0
_roll3
:
0
_strikeType
:
"X"
__proto__
:
Object
_frame8
:
Frame
_frameScore
:
30
_roll1
:
10
_roll2
:
0
_roll3
:
0
_strikeType
:
"X"
__proto__
:
Object
_frame9
:
Frame
_frameScore
:
30
_roll1
:
10
_roll2
:
0
_roll3
:
0
_strikeType
:
"X"
__proto__
:
Object
_frame10
:
Frame
_frameScore
:
30
_roll1
:
10
_roll2
:
10
_roll3
:
9
_strikeType
:
"X"
__proto__
:
Object
_frameTotal
:
Array[10]
_gameTotal
:
300

''''

Challenge:
===========

* Challenge time: rest of the day and weekend, and the entire of Makersbnb week if you need it, until Monday 9am
* Feel free to use google, your notes, books, etc. but work on your own
* If you refer to the solution of another coach or student, please put a link to that in your README
* If you have a partial solution, **still check in a partial solution**
* You must submit a pull request to this repo with your code by 9am Monday week

Task:
-----

Count and sum the scores of a bowling game for one player (in JavaScript).

A bowling game consists of 10 frames in which the player tries to knock down the 10 pins. In every frame the player can roll one or two times. The actual number depends on strikes and spares. The score of a frame is the number of knocked down pins plus bonuses for strikes and spares. After every frame the 10 pins are reset.

As usual please start by

* Forking this repo

* Finally submit a pull request before Monday week at 9am with your solution or partial solution.  However much or little amount of code you wrote please please please submit a pull request before Monday week at 9am.  And since next week is lab week you have a full extra week to work on this.


### Optional Extra

Create a nice interactive animated interface with jQuery.

## Strikes

The player has a strike if he knocks down all 10 pins with the first roll in a frame. The frame ends immediately (since there are no pins left for a second roll). The bonus for that frame is the number of pins knocked down by the next two rolls. That would be the next frame, unless the player rolls another strike.

## Spares

The player has a spare if the knocks down all 10 pins with the two rolls of a frame. The bonus for that frame is the number of pins knocked down by the next roll (first roll of next frame).

## 10th frame

If the player rolls a strike or spare in the 10th frame they can roll the additional balls for the bonus. But they can never roll more than 3 balls in the 10th frame. The additional rolls only count for the bonus not for the regular frame count.

    10, 10, 10 in the 10th frame gives 30 points (10 points for the regular first strike and 20 points for the bonus).
    1, 9, 10 in the 10th frame gives 20 points (10 points for the regular spare and 10 points for the bonus).

## Gutter Game

A Gutter Game is when the player never hits a pin (20 zero scores).

## Perfect Game

A Perfect Game is when the player rolls 12 strikes (10 regular strikes and 2 strikes for the bonus in the 10th frame). The Perfect Game scores 300 points.

In the image below you can find some score examples.

More about ten pin bowling here: http://en.wikipedia.org/wiki/Ten-pin_bowling

![Ten Pin Score Example](images/example_ten_pin_scoring.png)

Code Review
-----------

In code review we'll be hoping to see:

* All tests passing
* The code is elegant: every class has a clear responsibility, methods are short etc.

Reviewers will potentially be using this [code review rubric](docs/review.md).  Note that referring to this rubric in advance may make the challenge somewhat easier.  You should be the judge of how much challenge you want.

CI
--

We are running JSHint on our CI server - save yourself having to wait for a build to happen by linting your code on your machine first. [Here are installations for most popular editors](http://jshint.com/install/). Grab the `.jshintrc` from this repo and have better JS!

If you don't follow the usual Jasmine convention of having your tests in `spec` and your code in `src`, or you've built your code into a little app, CI will probably fail for you as we are doing *sneaky things*&trade; to make your tests run. However, there is a simple fix:

1. Open up your `.travis.yml`
2. On line 8, you will see where it looks for your code (`'src/**/*.js'`) and your tests (`'spec/**/*.js'`)
3. Adjust these to point to the correct directories
4. Done.
