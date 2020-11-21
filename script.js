$(document).ready(function() {

$('#currentDay').text(moment());

$(".saveBtn").on("click", function() {

    var usersTask = $(this).siblings(".description").val();
    console.log(usersTask);
    var timeTaskScheduled = $(this).parent().attr("id");
    console.log(timeTaskScheduled);

    localStorage.setItem(timeTaskScheduled, usersTask);
})



var localStorage8am = localStorage.getItem("8"); 
$("#8 .description").val(localStorage8am)

var localStorage9am = localStorage.getItem("9"); 
$("#9 .description").val(localStorage9am)

})