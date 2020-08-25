<?php
/*function getImage2() {
  $image = 'http://images.itracki.com/2011/06/favicon.png';
  $imageData = base64_encode(file_get_contents($image));
  $src = 'data: '.mime_content_type($image).';base64,'.$imageData;
return $src; 
}*/

getImage();
function getImage() {
  if(isset($_POST["date"]))
  {
    $date = $_POST["date"];
    $myObj->name = "John";
    $myObj->date = $date;
    echo json_encode($myObj);
  }
}
?>
