var headerEl = $('.jumbotron');
var containerEl = $('.container');
var rowEl = $('<div>').addClass('.row');
var dateEl = $('#currentDay');
var hourBlockEl = ('<div>');

var today = moment();
var currentTime;


headerEl.append(dateEl);
dateEl.text(today.format("MMMM D YYYY"));

hourBlockEl.text('test');

rowEl.append(hourBlockEl);

containerEl.append(rowEl);