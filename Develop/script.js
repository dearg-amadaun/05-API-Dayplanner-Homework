//Current time and date
var currentDate = moment().format('MMMM Do YYYY');
$('#currentDay').html(currentDate);




//Need to check box hours against current time

//Colors and names already provided in style sheet
//if (currentHour is NOW) then (box color = RED) else if (currentHour is PAST) then (box color = GREY) else if (currentHour is FUTURE) then (box color = GREEN)