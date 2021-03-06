$(document).ready(function(){
  Loading(true);
  //alert("Ready");
  $("#search").click(function() {
    getImage();
  });
  $("#deleted").click(function() {
    testdel();
  });
  $(".picker").on("change", function() {
    var date = $(this).val();
    $(".date").val(date);
  });
  Loading(false);
});

function Loading(event) {
  if(event) {
    $("#date").attr("disabled", true);
    $("#search").attr("disabled", true);
    $('.loading').removeClass('hide');
  } else {
    $("#date").attr("disabled", false);
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
        if(data.images.length > 0) {
          var txt = "";
          data.images.forEach(e => {
            txt += "<div class='row mar_b15 css-ShowImage'><img id='base64image'"+
             "src='" + e + "'></div>";
          });
          document.getElementById('ShowImage').innerHTML = txt;
        } else {
          alert("ไม่มีข้อมูล");
        }
         //alert(data.name);
         Loading(false);
      },
      error: function(){
        alert("json not found image");
        Loading(false);
      }
    });
  } else {
    alert("กรุณาเลือกวันที่");
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
