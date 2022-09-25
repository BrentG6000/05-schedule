var headerEl = $('.jumbotron');
var containerEl = $('.container');
var rowEl = $('<div>').addClass('row');
var dateEl = $('#currentDay');

var hourLabel = 9;
var hourStr;
var textAreaClass;
var today = moment();
var currentTime = moment().format("hh");

// Array of schedule rows
 var scheduleBlocks = [];

// Array of hour labels for each schedule row
var hourBlocks = [];

// Array of event texts for each schedule row
var textAreaBlocks = [];

// Array of text events for each schedule row
var textAreaBlockStrs = [];

var saveButtonBlocks = [];

// Adds date to header
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
    textAreaBlocks.push($('<textarea>').addClass(`col-11 ${textAreaClass}`));
    saveButtonBlocks.push($('<button>').addClass('saveBtn').append($('<i>').text('test')));
    scheduleBlocks[i].append(hourBlocks[i]);
    scheduleBlocks[i].append(textAreaBlocks[i]);
    scheduleBlocks[i].append(saveButtonBlocks[i]);
    rowEl.append(scheduleBlocks[i]);
}

containerEl.append(rowEl);