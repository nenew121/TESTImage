$(document).ready(function(){
  alert("Ready");
  $("#search").click(function() {
    Search();
  });
});
function Search() {
  alert("Change Date " + $("#date").val());
}
function input() {
  alert("Text1 " + $("#tt").val());
}
