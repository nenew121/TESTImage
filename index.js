$(document).ready(function(){
  alert("Ready");
  $("#search").click(function() {
    Search();
  });
});
function Search() {
  //$("#div1").load("demo_test.txt");
  alert("Change Date " + $("#date").val());
}
function input() {
  alert("Text1 " + $("#tt").val());
}
