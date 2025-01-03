// Global variables

// Set this to true to add Javascript console logs that track game status
const VERBOSE = true;

// Displayed timer duration for each round. (Default 3 minutes.)
// To-do: Replace this with a visible on-screen timer.
var SECTION_DURATION = '3 Minutes';

// ----------------------------------------------------- //

// Default game variables
var currentMode = 'sg';
var sequenceID = -1;
var gameSections = [
    'setting',
    'primarysources',
    'theme',
    'genre',
    'coremechanic',
    'plottwist',
];

// Choices to be filled in as the game progresses
var gameChoices = {
    'sg': [],
    'gs': []
}
// Counter for number of modes completed (overall game progress)
var modesComplete = 0;

function CreateGameSection(sectionID, sequenceID) {
    HideAllSections();
    var section = CloneElementAndAppendTo('#templates .game-section', '#ui-body');
    section.id = `section-${sectionID}`;
    Show(`#${section.id}`);

    document.querySelector(`#${section.id} .section-num`).innerHTML = sequenceID + 1;
    document.querySelector(`#${section.id} .sections-total`).innerHTML = gameSections.length;
    document.querySelector(`#${section.id} .section-name`).innerHTML = `Choose Your ${content[sectionID].name}!`;
    document.querySelector(`#${section.id} .section-duration`).innerHTML = SECTION_DURATION;
    document.querySelector(`#${section.id} .section-tagline`).innerHTML = content[sectionID].tagline;
    document.querySelector(`#${section.id} .section-description`).innerHTML = content[sectionID].description;
    document.querySelector(`#${section.id} .game-section-roller`).dataset.choices = content[sectionID].options;
    document.querySelector(`#${section.id} .game-section-roller`).dataset.section = sectionID;
    document.querySelector(`#${section.id} .game-section-roller`).dataset.sequence = sequenceID;

    CreateSectionOptions(sectionID, content[sectionID].options);

}
function CreateSectionOptions(sectionID, count) {
    var col_width = 12 / parseInt(count);
    for (var i = 0; i < count; i++) {
        var column = CloneElementAndAppendTo('#templates .option-card-column', `#section-${sectionID} .option-cards`);
        column.classList.remove('col-md-NUM');
        column.classList.add(`col-md-${col_width}`);
        column.id = `section-${sectionID}-${i + 1}`;
        var card = document.querySelector(`#section-${sectionID}-${i + 1} .option-card`);
        card.dataset.option = i + 1;
        card.dataset.hello = 'hi';
        var buttons = document.querySelectorAll(`#section-${sectionID}-${i + 1} .option-button .btn`);
        buttons.forEach(btn => btn.dataset.option = i + 1);
        buttons.forEach(btn => btn.dataset.section = sectionID);
    }
}

function CreateSequenceCard(sectionID, choice) {

    var card = CloneElementAndAppendTo('#templates .sequence-card-column', '#sequence-cards');
    card.id = `gamecard-${sectionID}`;
    document.querySelector(`#gamecard-${sectionID} .sequence-card-label`).innerHTML = content[sectionID].name;
    document.querySelector(`#gamecard-${sectionID} .sequence-card`).innerHTML = choice;

}

function HideAllSections() {
    document.querySelector('.game-screen').style.display = 'none';
}
function Show(elem) {
    document.querySelector(elem).style.display = 'block';
}

// Helper function for cloning elements
function CloneElementAndAppendTo(selector, parent) {
    var node = document.querySelector(selector);
    var clone = node.cloneNode(true);
    document.querySelector(parent).appendChild(clone);
    return clone;
}

function RemoveRerollButton(section) {
    $(`.game-section-roller[data-section='${gameSections[section - 1]}']`).hide();

}
function HideRerollButton(section) {
    $(`#section-${section} .reroll-button .btn-primary`).css('transform', 'none');
    $(`#section-${section} .reroll-button`).detach().appendTo('body').addClass('button-upper-right');
}

function ShowOptionCards(element) {
    var section = $(element).attr("data-section");
    HideRerollButton(section);
    $(`#section-${section} .section-info`).hide();
    $(`#section-${section} .option-cards`).show();
}

function RandomInt(max) {
    return Math.floor(Math.random() * max);
}
function LoadOptions(button) {
    if (!SequenceCheck(button)) return false;
    WriteOptions(button.attr("data-section"), button.attr("data-choices"));
}

function WriteOptions(type, choices) {

    var rolls = new Array();
    var i = 0;

    if (VERBOSE) console.log(`STATUS: Writing Options: Type ${type} / Choices: ${choices}`);

    while (i < choices) {
        var roll = RandomInt(data[type].length);

        // Reroll if this roll chose the same option again (loop rerolling until a unique value is chosen)
        while (rolls.includes(roll)) {
            roll = RandomInt(data[type].length);
        }
        rolls[i] = roll;

        if (VERBOSE) console.log(`STATUS: Rolled ${data[type][rolls[i]]}`);

        $(`#section-${type} .option-card[data-option=${i + 1}]`).html(data[type][rolls[i]]);
        i++;
    }
    outcomes[type] = rolls;

    $(`#${type} .reroll-prompt`).css('display', 'inline-block');

}
function Reroll(type, option) {
    $(`#section-${type} .reroll`).hide();
    var roll = RandomInt(data[type].length);

    // Reroll/loop rerolling until a unique value is chosen
    while (outcomes[type].includes(roll)) {
        roll = RandomInt(data[type].length);
    }
    $(`#section-${type} .option-card[data-option=${option}]`).html(data[type][roll]);
    outcomes[type][option - 1] = roll;
}

function SequenceCheck(button) {
    return (button.attr("data-sequence") <= sequenceID);
}

// Placeholder values for the outcomes of rolls. These will be written during rolls to check roll values
var outcomes = {
    "genre": [
        -1,
        -1
    ],
    "setting": [
        -1,
        -1
    ],
    "theme": [
        -1,
        -1
    ],
    "twistMechanic": [
        -1,
        -1
    ],
    "twistPlot": [
        -1,
        -1
    ]
}

// ------------------------------------------------------- //


function ReadDefaultConf() {

    types = ['genre', 'setting', 'theme', 'coremechanic', 'plottwist', 'primarysources'];

    types.forEach(type => {
        var counter = 0;
        data[type].forEach(e => {
            var option = $('#options-template').children().clone();
            option.find('input').val(e);
            if (counter < 2) {
                option.find('.configure-option-remove').remove();
            }
            option.appendTo(`#options-${type}`);
            counter++;
        });
    });

}

// ------------------------------------------------------- //

function ConfGetGameOrder() {
    return ($('#conf-gameOrder').val());
}
function ConfGetUseTimer() {
    return ($('#conf-useTimer').is(':checked'));
}
function ConfGetTimerDuration() {
    return ($('#conf-timerDuration').val());
}
function ConfGetSections(section) {
    var included = [];
    $(`#conf-${section}Sections input:checked`).each(function () {
        included.push($(this).attr('data-section'));
    });
    return (included);
}
function ConfGetPrompts(category) {
    var prompts = [];
    $(`#options-${category} input`).each(function () {
        if ($(this).val() != '') {
            prompts.push($(this).val());
        }
    });
    return prompts;
}

function combineConfJson() {
    var gameData = {
        firstRound: '',
        useTimer: false,
        timerDuration: '',
        sections: {
            sg: [],
            gs: []
        },
        genre: [],
        setting: [],
        theme: [],
        coremechanic: [],
        plottwist: [],
        primarysources: []
    }
    gameData.firstRound = ConfGetGameOrder();
    gameData.sections.sg = ConfGetSections('sg');
    gameData.sections.gs = ConfGetSections('gs');
    gameData.useTimer = ConfGetUseTimer();
    gameData.timerDuration = ConfGetTimerDuration();
    gameData.genre = ConfGetPrompts('genre');
    gameData.setting = ConfGetPrompts('setting');
    gameData.theme = ConfGetPrompts('theme');
    gameData.coremechanic = ConfGetPrompts('coremechanic');
    gameData.plottwist = ConfGetPrompts('plottwist');
    gameData.primarysources = ConfGetPrompts('primarysources');

    return gameData;
}

function DownloadConfFile(filename) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(combineConfJson())));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}


// ------------------------------------------------------- //

// Timer functionality 
// (This section is in progress for future version)

// ------------------------------------------------------- //


function initGame() {
    if (VERBOSE) console.log("GAMESTATE: Initializing game");
    DrawInitScreen();
}

function TransitionToEnding() {
    if (VERBOSE) console.log("GAMESTATE: Transitioning to the ending");
    state = machine.transition(state, 'test');
}

function SetupGameSection(id) {
    if (VERBOSE) console.log(`GAMESTATE: Setting up game section #${sequenceID}: ${gameSections[sequenceID]}`);
    CreateGameSection(gameSections[sequenceID], sequenceID);
}

DrawInitScreen();

function DrawInitScreen() {
    SetLogoToCurrentGameMode();
    $('#section-init').show();
}
function DrawGameSection(id) {
    $('.overlay').hide();
    $('.game-screen').hide();
    var id = gameSections[id];
    $(`#section-${id}`).show();
}
function DrawGameSummary() {
    if (modesComplete > 1) {
        DrawGameOver();
        return;
    }
    $('.overlay').hide();
    $('.game-screen').hide();
    $(`#section-summary`).show();
    var currentText = (currentMode == 'sg') ? 'Story&rarr;Game' : 'Game&rarr;Story';
    var flippedText = (currentMode == 'sg') ? 'Game&rarr;Story' : 'Story&rarr;Game';
    $(`#section-summary .col-section`).html(currentText);
    $(`#section-flip .change-mode`).html(`Flip to ${flippedText}`);
    $(`#section-flip`).show();
    DrawRoundSummary(currentMode, '#section-flip .summary-round', 1);
}
function DrawGameOver() {
    $('.overlay').hide();
    $('.game-screen').hide();
    $(`#section-summary-gameover`).show();
    var currentText = (currentMode == 'sg') ? 'Story&rarr;Game' : 'Game&rarr;Story';
    $(`#section-summary-gameover .col-section`).html(currentText);
    $(`#section-gameover`).show();
    var mode1 = (data.firstRound == 'sg') ? 'sg' : 'gs';
    var mode2 = (data.firstRound == 'sg') ? 'gs' : 'sg';
    var modes = [mode1, mode2];
    for (var i = 0; i < modesComplete; i++) {
        DrawRoundSummary(modes[i], '#section-gameover .summary-fullgame', i + 1);
    }
}

function DrawRoundSummary(mode, parent, roundID) {
    if (VERBOSE) console.log(`STATUS: Drawing round summary for mode: ${mode}`);
    $('#sequence-cards').html('');
    var modeName = (mode == 'sg') ? 'Story&rarr;Game' : 'Game&rarr;Story';
    var summaryTitle = `<h4>Your ${modeName} Summary</h4>`;
    $(`${parent} .summary-round-${roundID} .round-summary-title`).html(summaryTitle);
    for (var i = 0; i < gameChoices[mode].length; i++) {
        sectionID = gameChoices[mode][i].sectionID;
        var card = CloneElementAndAppendTo('#templates .sequence-card-column', `${parent} .summary-round-${roundID}`);
        card.classList.add(`gamecard-${sectionID}`);
        card.classList.remove('col-md-2');
        card.classList.add('col-md-4');
        document.querySelector(`${parent} .summary-round-${roundID} .gamecard-${sectionID} .sequence-card-label`).innerHTML = gameChoices[mode][i].sectionName;
        document.querySelector(`${parent} .summary-round-${roundID} .gamecard-${sectionID} .sequence-card`).innerHTML = gameChoices[mode][i].choice;
    }
}

function RevealGameCard() {
    $('.gamecard').show();
    for (var i = 0; i < sequenceID; i++) {
        $(`#gamecard-${gameSections[i]}`).show();
    }
}

function AdvanceGame() {
    sequenceID++;
    if (sequenceID > 0) {
        RevealGameCard();
        RemoveRerollButton(sequenceID);
    }
    if (sequenceID < gameSections.length) {
        if (VERBOSE) console.log("GAMESTATE: Next sequence");
        SetupGameSection(sequenceID);
        DrawGameSection(sequenceID);
    } else {
        modesComplete++;
        if (VERBOSE) console.log("GAMESTATE: Entering game summary");
        DrawGameSummary();
    }
}

// Checks for end of game at the end of each mode
function CheckGameEnd() {
    if (modesComplete > 1) {
        if (VERBOSE) console.log("STATUS: End of game.");
    } else {
        ResetGame();
        state = machine.transition(state, 'next');
    }
}

function SetLogoToCurrentGameMode() {
    var path = "";
    var filename = (currentMode == 'sg') ? 'Logo-StoryGame' : 'Logo-GameStory';
    document.querySelector('#gamelogo').src = `./images/${path}${filename}.png`;
    var oppositeClass = (currentMode == 'sg') ? 'gs' : 'sg';
    document.querySelector('#ui').classList.remove(oppositeClass);
    document.querySelector('#ui').classList.add(currentMode);
}

function ChangeGameMode() { // Change base game mode between Story->Game and Game->Story
    EmptyGameBoard();
    sequenceID = -1;
    currentMode = (currentMode == 'sg') ? 'gs' : 'sg';
    SetLogoToCurrentGameMode();
    if (VERBOSE) console.log(`STATUS: Changed to mode: ${currentMode}`);
    gameSections = data.sections[currentMode];
    AdvanceGame();
}
function EmptyGameBoard() { // Empty the contents of the UI and all sequence cards
    document.querySelector('#ui-body').innerHTML = '';
    document.querySelector('#sequence-cards').innerHTML = '';
}

function LoadGame() {
    var obj = JSON.parse($('#loadgame-input').val());
    data = obj;
    currentMode = data.firstRound;
    SetLogoToCurrentGameMode();
    gameSections = (currentMode == "sg") ? data.sections.sg : data.sections.gs;
    CloseLoadMenu();
    AdvanceGame();
}

function RecordGameChoice(mode, section, choice) {
    //gameChoices[mode][section] = choice;
    var option = {};
    option.sectionID = section;
    option.sequenceID = sequenceID;
    option.sectionName = content[section].name;
    option.choice = choice;
    gameChoices[mode].push(option);
}



// ----------------------------------------------------------- //

// UI/Menu click handlers


$('body').on('click', '.game-section-roller', function () {

    $(this).html("<img src='./images/D6.png' />").addClass("d6");
    ShowOptionCards($(this));
    LoadOptions($(this));

});

$('body').on('click', '.change-mode', function () {
    ChangeGameMode();
});

$('body').on('click', '.choose', function () {
    if (VERBOSE) console.log(`STATUS: Chose game option: Section ${this.dataset['section']}, Option ${this.dataset['option']}}`);
    var chosenOption = $(`#section-${this.dataset['section']} .option-card[data-option=${this.dataset['option']}]`).html();
    document.querySelector(`#section-${this.dataset.section}`).dataset['choice'] = chosenOption;
    RecordGameChoice(currentMode, this.dataset.section, chosenOption);
    CreateSequenceCard(this.dataset.section, chosenOption);
    AdvanceGame();
});

$('body').on('click', '.reroll', function () {
    if (VERBOSE) console.log(`STATUS: Rerolling ${$(this).attr('data-section')}`);
    Reroll($(this).attr('data-section'), $(this).attr('data-option'));
})

$('body').on('click', '.configure-option-add', function () {
    var type = ($(this).attr('data-option-type'));
    $('#options-template').children().clone().appendTo(`#options-${type}`);
});

$('body').on('click', '.configure-option-remove', function () {
    $(this).closest('.row').remove();
});

$('body').on('click', '.configure-export', function () {
    var exportJson = JSON.stringify(combineConfJson());
    $('.configure-export-output').val(exportJson);
    $('.configure-download').css('display', 'block');
});
$('body').on('click', '.export-jump', function () {
    document.querySelector('.exportbox').scrollIntoView();
});

$('body').on('click', '.configure-download', function () {
    DownloadConfFile('StoryGame-CustomGameSettings.txt');
});

$('body').on('click', '.section-roll', function () {
    LoadSectionOptions($(this));
});

$('body').on('click', '.action-next', function () {
    AdvanceGame();
});
$('body').on('click', '.action-loadgame', function () {
    LoadGame();
});
$('body').on('click', '.action-close-load', function () {
    CloseLoadMenu();
});

$('body').on('click', '.open-menu-config', function () {
    $('#ui-active').hide();
    $('#config').appendTo($('#menu-config'));
    ReadDefaultConf();
});
$('body').on('click', '.close-menu-config', function () {
    $('#ui-active').show();
    $('#config').appendTo($('#templates'));
});

$('body').on('click', '.open-menu-load', function () {
    $('#ui-active').hide();
    $('#load').appendTo($('#menu-load'));
});
$('body').on('click', '.close-menu-load', function () {
    CloseLoadMenu();
});

function CloseLoadMenu() {
    $('#ui-active').show();
    $('#load').appendTo($('#templates'));
}
