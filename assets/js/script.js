var headerEl = $('.jumbotron');
var containerEl = $('.container');
var rowEl = $('<div>').addClass('row');
var dateEl = $('#currentDay');

var hourLabel = 9;
var hourStr;
var textAreaClass;
var today = moment();
var currentTime = moment().format("HH");

// Array of schedule rows
var scheduleBlocks = [];

// Array of hour labels for each schedule row
var hourBlocks = [];

// Array of forms for each schedule row
var formBlocks = [];

// Array of event texts for each schedule row
var textAreaBlocks = [];

// Array of text events for each schedule row
var textAreaBlockStrs = [];

// Array of save buttons
var saveButtonBlocks = [];


/* Handles button clicks for adding new events to the schedule. The text from textarea for each time block is saved to local storage
with a unique key name.*/
function handleFormSubmit(event) {
    event.preventDefault();

    var newText = $(this).find('textarea').val();
    var newTextName = $(this).find('textarea').attr("name");

    if (newTextName === "event-input 0") {
        localStorage.setItem("event0", newText);
    }
    else if (newTextName === "event-input 1") {
        localStorage.setItem("event1", newText);
    }
    else if (newTextName === "event-input 2") {
        localStorage.setItem("event2", newText);
    }
    else if (newTextName === "event-input 3") {
        localStorage.setItem("event3", newText);
    }
    else if (newTextName === "event-input 4") {
        localStorage.setItem("event4", newText);
    }
    else if (newTextName === "event-input 5") {
        localStorage.setItem("event5", newText);
    }
    else if (newTextName === "event-input 6") {
        localStorage.setItem("event6", newText);
    }
    else if (newTextName === "event-input 7") {
        localStorage.setItem("event7", newText);
    }
    else {
        localStorage.setItem("event8", newText);
    }
}

function init() {
    // Adds date to header
    headerEl.append(dateEl);
    dateEl.text(today.format("MMMM D YYYY"));

    // This for loop creates the entire schedule (9 time blocks)
    for (var i = 0; i < 9; i++) {
        // First time block on schedule is at 9am
        hourLabel = (9 + i);
    
        /* This if/else block checks if time block is the past, present, or future and the sets a class
        that will be use later for the textAreaBlock element */
        if (currentTime > hourLabel) {
            textAreaClass = "past";
        }
        else if (currentTime == hourLabel) {
            textAreaClass = "present";
        }
        else {
            textAreaClass = "future";
        }

        // This if/else block adjusts the time text
        if (hourLabel > 12) {
            hourLabel -= 12;
            hourStr = hourLabel + "PM";
        }
        else if (hourLabel > 11) {
            hourStr = hourLabel + "PM";
        }
        else {
            hourStr = hourLabel + "AM";
        }

        // The main schedule block that contains the time, text area, and button is created
        scheduleBlocks.push($('<div>').addClass('col-12 d-inline-flex').css('margin-bottom', '1px'));
        
        // The time section is created
        hourBlocks.push($('<div>').addClass('hour col-1').text(hourStr));

        // Variable from local storage is checked to see if it contains stored text
        var storedText = localStorage.getItem(`event${i}`)
        if (storedText !== null) {
            // Text area is created with stored text
            textAreaBlocks.push($('<textarea>').addClass(`col-10 ${textAreaClass}`).attr('name', `event-input ${i}`).text(storedText));
            
        }
        else {
            // Text area is created without stored text
            textAreaBlocks.push($('<textarea>').addClass(`col-10 ${textAreaClass}`).attr('name', `event-input ${i}`));
        }

        // Buttons are created
        saveButtonBlocks.push($('<button>').addClass('saveBtn col-1').attr('height', '80px').append($('<i>').text('Save')));
        
        // Text area and buttons are combined under a form
        formBlocks.push($('<form>').addClass('col-12 d-inline-flex').append(textAreaBlocks[i]).append(saveButtonBlocks[i])
            .on('submit', handleFormSubmit));
        
        // Hour and form blocks are combined under a schedule block
        scheduleBlocks[i].append(hourBlocks[i]);
        scheduleBlocks[i].append(formBlocks[i]);
        rowEl.append(scheduleBlocks[i]);
    }

    // Schedule blocks are combined under the row element needed for bootstrap
    containerEl.append(rowEl);
}

init();