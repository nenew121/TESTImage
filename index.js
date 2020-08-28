$(document).ready(function(){
  //alert("Ready");
  $("#search").click(function() {
    //Search();
    getImage();
    //testdel();
  });
});

function Loading(event) {
  if(event) {
    $('.loading').removeClass('hide');
  } else {
    $('.loading').addClass('hide');
  }
  /*if(event) {
    //$(".loading").css("display", "block");
    $(".loading").attr("style", "display:block")
  } else {
    //$(".loading").css("display", "none");
    $(".loading").attr("style", "display:none")
  }*/
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
        var txt = "";
        data.images.forEach(e => {
          txt += "<div class='row mar_b15 css-ShowImage'><img id='base64image'"+
           "src='" + e + "'></div>";
          //"src='data:image/png;" + e.split(";")[1] + "'></div>";
        });
        document.getElementById('ShowImage').innerHTML = txt + txt;
        /*var txt = "<div class='row mar_b15 css-ShowImage'><img id='base64image'"+
         "src='data:image/png;" + data.src.split(";")[1] + "'></div>";
        document.getElementById('ShowImage').innerHTML = txt + txt;*/
         alert(data.name);
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

function testdel() {
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
        alert(data.mass);
        Loading(false);
      },
      error: function(){
        alert("json not found image5555");
        Loading(false);
      }
    });
  } else {
    alert("no data");
    Loading(false);
  }
}
