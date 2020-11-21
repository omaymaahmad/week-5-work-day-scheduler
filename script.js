$(document).ready(function () {
  $("#currentDay").text(moment());
  var currentWorkingHour = moment().hours();

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

 // Getting any stored tasks for 10am - 11am from local storage
 var localStorage10am = localStorage.getItem("10");
 $("#10 .description").val(localStorage10am);

  function checkPastPresentFuture(){
    $(".time-block").each(function(){
        var hourForBlockBeingChecked = parseInt($(this).attr("id"));
        
        if (hourForBlockBeingChecked < currentWorkingHour){
            $(this).addClass("past");
        } else if (hourForBlockBeingChecked === currentWorkingHour){
            $(this).addClass("present"); 
        } else {
            $(this).addClass("future"); 
        }
    })
  }

  checkPastPresentFuture();
});
