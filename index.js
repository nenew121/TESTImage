$(document).ready(function(){
  //alert("Ready");
  $("#search").click(function() {
    Search();
  });
});

function Search() {
  $.ajax({
    type: "Get",
    url: "https://shielded-mesa-66786.herokuapp.com/data.json",
    dataType: "json",
    success: function(data) {
      data.forEach(e => {
        if (e.date == $("#date").val()) {
          alert("Change Date " + $("#date").val());
        }
      });
    },
    error: function(){
      alert("json not found");
    }
  });
}

function input() {
  alert("Text1 " + $("#tt").val());
}
