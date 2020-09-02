var slideIndex = 1;
$(document).ready(function(){
  Loading(true);
  showSlides(slideIndex);
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

//------- slide
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
//------- end slide
