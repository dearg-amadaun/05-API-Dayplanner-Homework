$(document).ready(function () {})

//Current time and date
var currentDate = moment().format('MMMM Do YYYY');
$('#currentDay').html(currentDate);
console.log(currentDate);

//Current hour
var currentHour = moment().format('H');
console.log(currentHour);


//Need loop to check all boxes?
//Need to check box hours against current hour
//$( ".description" ).css( "border", "3px solid red" );
//$( ".description" ).css( "border", "3px solid red" );
// var rowHour = $(".timeblock");
// console.log(rowHour)
  
if (currentHour < '.col-md-1 hour') {
    $( ".description" ).addClass( "past" );
    $( ".description" ).removeClass( "present" );
    $( ".description" ).removeClass( "future" );
    
  } else if (currentHour === '.col-md-1 hour') {
    $( ".description" ).addClass( "present" );
    $( ".description" ).removeClass( "past" );
    $( ".description" ).removeClass( "future" );
    
  }else if (currentHour > '.col-md-1 hour') {
    $( ".description" ).addClass( "future" );
    $( ".description" ).removeClass( "present" );
    $( ".description" ).removeClass( "past" );
    
  };

// $( ".description" ).addClass( "past" );
// $( ".description" ).addClass( "present" );
// $( ".description" ).addClass( "future" );


//Colors and names already provided in style sheet
//if (currentHour is NOW) then (box color = RED (css .present)) else if (currentHour is PAST) then (box color = GREY (css. past)) else if (currentHour is FUTURE) then (box color = GREEN (css .future))

//Save Button listeners and local storage
//btn saveBtn col-md-1
const timeBlock = $('.time-block')
console.log(timeBlock)
const button = $('.saveBtn');


button.on('click', function() {
  var value = $(this).siblings('.description').val()
  var time = $(this).parent().attr('id')
  console.log($(this))
  console.log(value, time)

  localStorage.setItem(time, value);
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