var containerEl = $('.container');
var dateEL = $('<div>');

var today = moment();

containerEl.text('test');

containerEl.append(dateEL);
dateEL.text(today.format("MMMM DO YYYY, h:mm:ss a"));