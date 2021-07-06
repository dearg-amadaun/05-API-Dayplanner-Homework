//Current time and date
var currentDate = moment().format('MMMM Do YYYY');
$('#currentDay').html(currentDate);
console.log(currentDate)

//Current hour
var currentHour = moment().format('hA');
console.log(currentHour)

//Kind of works
//Need loop to check all boxes?
$(".hour").filter(function() {
    return $(this).text().trim() < currentHour;
  })
  .nextAll(".description")
  .first()
  .addClass("past");

$(".hour").filter(function() {
    return $(this).text().trim() === currentHour;
  })
  .nextAll(".description")
  .first()
  .addClass("present");

  $(".hour").filter(function() {
    return $(this).text().trim() > currentHour;
  })
  .nextAll(".description")
  .first()
  .addClass("future");

//Need to check box hours against current hour


/* Doesn't work syntax probably
if (document.getElementById('col-md-1 hour') < currentHour) {
    $('col-md-1 hour').addclass('past');
}

else if (document.getElementById('col-md-1 hour') === currentHour) {
    $('col-md-1 hour').addclass('present');
}

else if (document.getElementById('col-md-1 hour') > currentHour) {
    $('col-md-1 hour').addclass('future');
}
*/

//Colors and names already provided in style sheet
//if (currentHour is NOW) then (box color = RED (css .present)) else if (currentHour is PAST) then (box color = GREY (css. past)) else if (currentHour is FUTURE) then (box color = GREEN (css .future))

//Save Button listeners and local storage