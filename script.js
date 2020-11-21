$(document).ready(function() {

$('#currentDay').text(moment());

$("#saveBtn").on("click", function() {

    var usersTask = $(this).siblings(".description").val();
    console.log(usersTask)
    var timeTaskScheduled = $(this).parent().attr("id");
    console.log(timeTaskScheduled)
})








})