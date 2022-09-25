var headerEl = $('.jumbotron');
var containerEl = $('.container');
var rowEl = $('<div>').addClass('.row');
var dateEl = $('#currentDay');
var scheduleBlock1El = $('<div>');
var scheduleBlock2El = $('<div>');
var scheduleBlock3El = $('<div>');
var scheduleBlock4El = $('<div>');
var scheduleBlock5El = $('<div>');
var scheduleBlock6El = $('<div>');
var scheduleBlock7El = $('<div>');
var scheduleBlock8El = $('<div>');
var scheduleBlock9El = $('<div>');
var hourBlock1El = $('<div>').text('9AM');
var hourBlock2El = $('<div>').text('10AM');
var hourBlock3El = $('<div>').text('11AM');
var hourBlock4El = $('<div>').text('12PM');
var hourBlock5El = $('<div>').text('1PM');
var hourBlock6El = $('<div>').text('2PM');
var hourBlock7El = $('<div>').text('3PM');
var hourBlock8El = $('<div>').text('4PM');
var hourBlock9El = $('<div>').text('5PM');

// add text area classes to hourBlocks

var today = moment();
var currentTime;

// Array of schedule rows
var scheduleBlocks = [
    scheduleBlock1El, scheduleBlock2El, scheduleBlock3El, scheduleBlock4El, scheduleBlock5El,
    scheduleBlock6El, scheduleBlock7El, scheduleBlock8El, scheduleBlock9El
];

// Array of hour labels for each schedule row
var hourBlocks = [
    hourBlock1El, hourBlock2El, hourBlock3El, hourBlock4El, hourBlock5El, hourBlock6El, hourBlock7El,
    hourBlock8El, hourBlock9El
];

// Array of text events for each schedule row
var textAreaBlockStrs = [
    'test string 1', 'test string 2', 'test string 3', 'test string 4',
    'test string 5', 'test string 6', 'test string 7', 'test string 8', 'test string 9'
];

// Adds date to header
headerEl.append(dateEl);
dateEl.text(today.format("MMMM D YYYY"));

for (var i = 0; i < scheduleBlocks.length; i++) {
    
    hourBlocks[i].addClass('hour');
    scheduleBlocks[i].append(hourBlocks[i]);
    
    rowEl.append(scheduleBlocks[i]);
}

containerEl.append(rowEl);