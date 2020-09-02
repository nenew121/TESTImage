$(document).ready(function(){
  Loading(true);
  //alert("Ready");
  $("#search").click(function() {
    getImage();
  });
  $("#deleted").click(function() {
    testdel();
  });
  Loading(false);
});

function Loading(event) {
  if(event) {
    $("#search").attr("disabled", true);
    $('.loading').removeClass('hide');
  } else {
    $("#search").attr("disabled", false);
    $('.loading').addClass('hide');
  }
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
        });
        document.getElementById('ShowImage').innerHTML = txt;
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
  var fnName = "testDelete";
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
