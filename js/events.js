//define functions here
function getIt() {
  $("p").on("click")
  alert ("Hey!")
  return;
}

function frameIt() {
  $("img").on("load")
  $("img").addClass("tasty")
}

function pressIt() {
  $("form").on("keydown")
  if (key.which === 071)
  alert ("g was pressed.")
  return;
}

function submitIt() {
  $("form").on("submit")
  alert ("Your form is going to be submitted now.")
  return;
}
$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
sumbitIt()
});
