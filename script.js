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

 // Getting any stored tasks for 11am - 12pm from local storage
 var localStorage11am = localStorage.getItem("11");
 $("#11 .description").val(localStorage11am);

 // Getting any stored tasks for 12pm - 1pm from local storage
 var localStorage12pm = localStorage.getItem("12");
 $("#12 .description").val(localStorage12pm);

 // Getting any stored tasks for 1pm - 2pm from local storage
 var localStorage1pm = localStorage.getItem("13");
 $("#13 .description").val(localStorage1pm);

 // Getting any stored tasks for 2pm - 3pm from local storage
 var localStorage2pm = localStorage.getItem("14");
 $("#14 .description").val(localStorage2pm);

 // Getting any stored tasks for 3pm - 4pm from local storage
 var localStorage3pm = localStorage.getItem("15");
 $("#15 .description").val(localStorage3pm);

 // Getting any stored tasks for 4pm - 5pm from local storage
 var localStorage4pm = localStorage.getItem("16");
 $("#16 .description").val(localStorage4pm);

 // Getting any stored tasks for 5pm - 6pm from local storage
 var localStorage5pm = localStorage.getItem("17");
 $("#17 .description").val(localStorage5pm);

 // Changing background depending on time 
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
