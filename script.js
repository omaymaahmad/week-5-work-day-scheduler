$(document).ready(function () {
  $("#currentDay").text(moment());

  $(".saveBtn").on("click", function () {
    var usersTask = $(this).siblings(".description").val();
    var timeTaskScheduled = $(this).parent().attr("id");

    localStorage.setItem(timeTaskScheduled, usersTask);
  });

  // Getting any stored tasks for 8am - 9am from local storage
  var localStorage8am = localStorage.getItem("8");
  $("#8 .description").val(localStorage8am);

  // Getting any stored tasks for 9am - 10am from local storage
  var localStorage9am = localStorage.getItem("9");
  $("#9 .description").val(localStorage9am);
});
