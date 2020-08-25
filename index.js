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
      var i = 0;
      data.forEach(e => {
        if (e.date == $("#date").val()) {
          $("tbody").append("<tr>"+
            "<td>" + (i+1) +"</td>"+
            "<td>" + e.number + "</td>"+
            "<td>" + e.name + "</td>"+
            "<td>" + e.email + "</td>"+
            "<td>" + e.phone + "</td>"+
          "</tr>");
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
