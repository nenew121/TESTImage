$(document).ready(function(){
  alert("Ready");
});
function getDate() {
var txt = document.getElementById("date").value
  //alert("Change Date " + txt);
  alert("Change Date " + $("#date").val());
}
function input() {
  alert("Text1 " + $("#tt").val());
}
