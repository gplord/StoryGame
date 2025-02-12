# Story->Game

An open source "micro game jam" game about designing games from configurable prompts. *Look for our upcoming chapter in ACRL's Critical Digital Humanities Cookbook!*

## About StoryGame

StoryGame is a “micro game jam” activity designed to help develop game prompts using a series of randomly-generated prompts. It is designed for small groups as a brainstorming activity, and intended to be played quickly.

StoryGame focuses particularly on the role of narrative in the game design process, offering two  modes that alternate between focusing first on a game’s story or its gameplay and then flipping the scenario to first focus on the other.

While the primary goal of StoryGame is to create ideas for interesting games, it is also an exercise in considering the role of narrative in a game’s earliest concept stages.


## Installation and Setup

StoryGame is designed to be lightweight and portable, and does not require any installation or server setup to run. While it can be set up to run as a page on a website, it can also be run directly from the browser with no additional setup.

### Play Online

A playable version of StoryGame can be found on our website at: [storygame.dev](https://storygame.dev)

### No-Installation Setup

- Download this full repository (from the main Github repository page, click **Code > Download Zip**)
- Unzip the downloaded file
- Open the unzipped folder and double-click “index.html” to open the game directly in your browser. (Note: this does still require an active internet connection to run, as it relies on external web libraries.)

### Set Up on Web Server

- Download this full repository
- Unzip and rename the unzipped folder to anything you prefer (e.g. renaming the default name “StoryGame-main” to just “storygame”)
- Add the unzipped folder to any website’s filesystem at your preferred path (e.g. www.example.com/storygame/)
- Access the game at the URL you chose. (The game’s main file, index.html, will automatically display when a player accesses the URL of the folder name you chose.)

**Note**: StoryGame does not require any particular server software to run.

## Gameplay Overview

StoryGame is designed to be a group activity managed by a facilitator who helps guide the players and manages the decision-making and timekeeping.

Facilitators should familiarize themselves with the structure, rules, and pacing of each game mode, and be ready to introduce each section with a short introduction and explanation. They should also provide a brief explanation of the game’s core terms (e.g. what the game means by “Primary Sources” or “Core Mechanic,” etc.) in advance with examples of each.

By default, each mode in StoryGame is designed to take somewhere between 15-30 min. This can be adjusted by raising or lowering the duration of each round of the game, or by omitting sections from either game mode.

In each section, players will watch as the game generates 2-3 prompts (depending on section) that they can vote on, and/or reroll. These decisions and votes must be made as a full group, rather than per-team. (One of the key goals is to compare the two team’s different outcomes from the same set of prompts!)

## Game Modes

Story->Game first prompts players to create a concept for an interesting story by focusing on prompts related to the game’s narrative, and then moves into prompts that narrow this story into a particular type of gameplay.

#### Story->Game Section Order:

- **Setting > Primary Sources > Theme > Genre > Core Mechanic > Plot Twist**

(In the Custom Game editor, any of these sections can be disabled for a faster game session.)

This mode is intended to help groups get excited about an interesting story idea, and then to try to imagine how to turn that story into an interactive game that successfully complements the narrative.

Game->Story flips this order, first prompting teams to imagine an interesting gameplay concept within a particular genre, and then imagining what kind of story would meaningfully enhance the game’s concept.

#### Game->Story’s Section Order:

- **Core Mechanic > Genre > Setting > Theme > Plot Twist > Primary Sources**

By default, a full game session would first complete the Story->Game mode, and then repeat the activity in Game->Story mode to compare the approaches and outcomes. (This can be reversed in the Custom Game menu, or players/facilitators can choose to play either mode individually from the Main Menu.)


## Custom Games

Players or facilitators can create a customized version of StoryGame that fits the goals and duration time of their session.

#### Creating a Custom Game

- From the main menu, click “Build a Custom Game”
- Adjust the various settings on this menu (details below) to your preferences
- Edit/add to/delete any of the default prompts per section. (Note: if you want a particular prompt to be likelier, you can add it to the list more than once.)
- When you are happy with your options, click “Export your settings” at the top or bottom of the Custom Game menu.
- The text that appears in the text box beside “Export your settings” is your **custom game file**. Select the full text of that box (triple-click inside that box, or click inside of it and press Ctrl+A or Cmd+A to select all), copy this text, and save it in a plain text file somewhere on your computer.
- Alternatively, you can also click “Download your settings” to download the custom game file as a text file. By default this will download as “StoryGame-CustomGameSettings.txt” in your default Downloads folder.

#### Playing Your Custom Game

- (If you have just finished creating and saving your custom game file, click “Close” on the Custom Game menu to return to the Main Menu)
- From the Main Menu, click “Load a Custom Game”
- Paste the full text from your custom game file into the text box on the menu that opens. (This is the file you copied or downloaded in the previous section “Creating a Custom Game.” Make sure you have pasted the full contents of that file into the text box!)
- Click “Load Game”
- The game session will immediately load on the first enabled section of the first mode you chose.

## Gameplay

### Prompts

Each **Game Mode** (Story->Game or Game->Story) has (by default) a series of six individual sections, each with its own **Prompt**. Prompts are chosen randomly by the game for the players to choose between, and once they have selected one, they can begin to brainstorm how to incorporate that prompt into their game’s design.

Each **Section** (e.g. “Setting,” “Theme,” etc.) will have an introductory screen with a brief description of what that section/prompt means for the players and the game they are creating. Players or facilitators can briefly read this and/or define/discuss what these terms mean.

When players are ready to receive the prompts, click the “**Let’s Roll**” button to randomly generate the prompts.

### Rerolling

By design, players are allowed only one reroll per prompt. For example, if the “Core Mechanic” section offers the two prompts “Light and Dark” and “Only one minute,” players must vote to decide if they want to reroll **either** of those prompts or not. Once they have rerolled one, they cannot reroll it again or reroll the other. (One of the goals of this activity is to capture the “game jam” feeling of creativity through constraint!)

***Cheat Code!*** *If facilitators or players are unhappy enough with either of the randomly-selected prompts, the game offers a “cheat” reroll button in the upper-right corner of the game interface. This is the icon that looks like a six-sided die, and can be clicked as many times as needed to immediately reroll all current options. (This should ideally be used sparingly, but is intended to help shake a game session out of any unfun RNG ruts.)*

### Making Choices

Once rerolling is complete, players should take a brief amount of time per round (e.g. one minute) to discuss which one they want to vote for and why. All players should then vote for which prompt they’d like to choose, and then both teams must then use that same prompt! (Note for facilitators: be sure to take team sizes into account for tallying these full-group votes.)

Once a prompt is decided upon, both teams can spend the amount of time shown in the upper right (the **Round Duration**) to discuss how they want to incorporate this prompt into their game’s design. For instance, if the group has voted on the **Setting** of “Spooky Mansion,” they should start discussing what kind of story they can tell within that setting; or if they have voted on a **Core Mechanic** of “Inconvenient superpowers,” they should discuss how to design gameplay that incorporates both superpowers and some element of inconvenience in using them.

Players are encourage to take quick notes as they come to decisions, as these will be reviewed at the end of the round.

Facilitators should pay attention to the time for these discussion rounds, and draw people to a close when the time is over to keep to the game’s overall schedule.

When the discussion section is over, the facilitator can click “**Choose**” on the prompt the group chose, and the game will advance to the next **Section**.

### The Game Loop

Each **Game Mode** has (by default) six sections, each with prompts to decide on and incorporate. Players will choose their prompt and then discuss how to use them for each of these sections, and then at the end (after making the final choice for that game mode), a **Summary Screen** will show all of the choices in order as a grid view of their choices.

This screen is the players’/facilitator’s chance to review the different choices that went into their game design concept, and particularly to see how each individual prompt helped to iteratively narrow the concept into its final shape.

This screen is intended to be the chance for each team to then present their concept to the larger group, and, time permitting, for players or the facilitator to discuss how the prompts helped or changed their creative process. (Note: This is a great chance for facilitators to take notes about each team’s proposed concept, and to record the prompts that led them there as examples for future groups.)


### Game Modes

Time permitting, this activity is designed to then flip the game mode to the opposite approach (e.g. Story->Game mode flips to Game->Story mode and vice versa) to be able to compare the process and the outcomes of each mode.

Both modes feature the same core game loop described above, and will each end in the same **Summary Screen** to discuss the final game concept each team created.

### Game Over

After a game session has completed both Game Modes, the final mode’s summary screen will show the prompts of both modes together, as a review of the full session.

Once players/facilitators have recorded this and discussed their prompts and outcomes, the game is complete! (Click “Play again” at the bottom of this screen to reset the game to a default game session.)


## About

- Greg Lord (gplord@gmail.com)
- R.C. Miessler (rmiessle@gettysburg.edu)

## License

MIT License

Copyright (c) 2025 Gregory Lord and R.C. Miessler

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

