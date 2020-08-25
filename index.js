$(document).ready(function(){
  //alert("Ready");
  $("#search").click(function() {
    Search();
    getImage();
  });
});

function Search() {
  $.ajax({
    type: "Get",
    url: "https://shielded-mesa-66786.herokuapp.com/data.json",
    dataType: "json",
    success: function(data) {
      var i = 0;
      var txt = "";
      data.forEach(e => {
        if (e.date == $("#date").val()) {
          txt += "<tr>"+
            "<td>" + (i+=1) +"</td>"+
            "<td>" + e.number + "</td>"+
            "<td>" + e.name + "</td>"+
            "<td>" + e.email + "</td>"+
            "<td>" + e.phone + "</td>"+
          "</tr>";
        }
        //alert("Change Date " + $("#date").val());
        document.getElementById('txt').innerHTML = txt;
      });
    },
    error: function(){
      alert("json not found search");
    }
  });
}

function getImage() {
  var date = $("#date").val();
if(date != "") {
  $.ajax({
    url:"https://shielded-mesa-66786.herokuapp.com/controller.php",
    method:"POST",
    data:{date:date},
    dataType:"JSON",
    success:function(data)
    {
     //$('#employee_name').text(data.name);
     alert(data.name + " : " + data.date);
    },
    error: function(){
      alert("json not found image");
    }
  });
} else {
  alert("no data");
}
}

function input() {
  alert("Text1 " + $("#tt").val());
}
