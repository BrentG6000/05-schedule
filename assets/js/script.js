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

function handleFormSubmit(event) {
    event.preventDefault();

    var newText = $(this).find('textarea').val();
    var newTextName = $(this).find('textarea').attr("name");
    console.log(newText);
    console.log();

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
    else if (newTextName === "event-input 8") {
        localStorage.setItem("event8", newText);
    }
}

// Adds date to header
function init() {
    headerEl.append(dateEl);
    dateEl.text(today.format("MMMM D YYYY"));

    for (var i = 0; i < 9; i++) {
        hourLabel = (9 + i);
    
        if (currentTime > hourLabel) {
            textAreaClass = "past";
        }
        else if (currentTime == hourLabel) {
            textAreaClass = "present";
        }
        else {
            textAreaClass = "future";
        }

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

        scheduleBlocks.push($('<div>').addClass('col-12 d-inline-flex').css('margin-bottom', '1px'));
        hourBlocks.push($('<div>').addClass('hour col-1').text(hourStr));
        
        textAreaBlocks.push($('<textarea>').addClass(`col-10 ${textAreaClass}`).attr('name', `event-input ${i}`));
        saveButtonBlocks.push($('<button>').addClass('saveBtn col-1').attr('height', '80px').append($('<i>').text('Save')));
        formBlocks.push($('<form>').addClass('col-12 d-inline-flex').append(textAreaBlocks[i]).append(saveButtonBlocks[i])
            .on('submit', handleFormSubmit));
        scheduleBlocks[i].append(hourBlocks[i]);
        scheduleBlocks[i].append(formBlocks[i]);
        rowEl.append(scheduleBlocks[i]);
    }

    containerEl.append(rowEl);
}

init();

// for (var i = 0; i < saveButtonBlocks.length; i++) {
//     saveButtonBlocks[i].addEventListener("click", function () {
//         console.log("Button clicked");
//     });
// }

// rowEl.on('submit', handleFormSubmit);