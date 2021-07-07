//Current time and date
var currentDate = moment().format('MMMM Do YYYY');
$('#currentDay').html(currentDate)
console.log(currentDate)

//Current hour
var currentHour = moment().format('h');
console.log(currentHour)


//Need loop to check all boxes?
//Need to check box hours against current hour


// Doesn't work syntax probably bad, feel like I'm close
//Create variables for the time blocks?
// if (document.getElementById('col-md-1 hour') < currentHour) {
//     $('col-md-1 hour').addclass('past');
// }

// else if (document.getElementById('col-md-1 hour') === currentHour) {
//     $('col-md-1 hour').addclass('present');
// }

// else if (document.getElementById('col-md-1 hour') > currentHour) {
//     $('col-md-1 hour').addclass('future');
// }


//Colors and names already provided in style sheet
//if (currentHour is NOW) then (box color = RED (css .present)) else if (currentHour is PAST) then (box color = GREY (css. past)) else if (currentHour is FUTURE) then (box color = GREEN (css .future))

//Save Button listeners and local storage
//btn saveBtn col-md-1

const button = $('.saveBtn');


button.on('click', () => {
  //button.textContent = `Click count: ${event.detail}`;
  var value = $(this).siblings('description').val()
  var time = $(this).parent().attr('id')
  console.log($(this))
  //console.log(event.target)
  console.log(value, time)

  
});


$('#hour-8 .description').val(localStorage.getItem('hour-8'))
$('#hour-9 .description').val(localStorage.getItem('hour-9'))
$('#hour-10 .description').val(localStorage.getItem('hour-10'))
$('#hour-11 .description').val(localStorage.getItem('hour-11'))
$('#hour-12 .description').val(localStorage.getItem('hour-12'))
$('#hour-13 .description').val(localStorage.getItem('hour-13'))
$('#hour-14 .description').val(localStorage.getItem('hour-14'))
$('#hour-15 .description').val(localStorage.getItem('hour-15'))
$('#hour-16 .description').val(localStorage.getItem('hour-16'))
$('#hour-17 .description').val(localStorage.getItem('hour-17'))
$('#hour-18 .description').val(localStorage.getItem('hour-18'))