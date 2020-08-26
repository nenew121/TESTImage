$(document).ready(function(){
  //alert("Ready");
  $("#search").click(function() {
    Search();
    getImage();
  });
});

function Loading(event) {
  if(event) {
    //$(".loading").css("display", "block");
    $(".loading").attr("style", "display:block")
  } else {
    //$(".loading").css("display", "none");
    $(".loading").attr("style", "display:none")
  }
}

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
  Loading(true);
  var fnName = "getImage";
  var date = $("#date").val();
  if(date != "") {
    $.ajax({
      url:"https://shielded-mesa-66786.herokuapp.com/controller.php",
      method:"POST",
      data:{fnName: fnName, date: date},
      dataType:"JSON",
      success:function(data)
      {
        var txt = "<div class='row css-ShowImage'><img id='base64image'"+
         "src='data:image/png;" + data.src.split(";")[1] + "'></div>";
        document.getElementById('ShowImage').innerHTML = txt + txt;
       //$('.ShowImage').text(txt);
         alert(data.type);
         Loading(false);
      },
      error: function(){
        alert("json not found image");
        Loading(false);
      }
    });
  } else {
    alert("no data");
    Loading(false);
  }
}
