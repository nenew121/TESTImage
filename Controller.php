<?php
getImage();
/*function getImage2() {
  $image = 'http://images.itracki.com/2011/06/favicon.png';
  $imageData = base64_encode(file_get_contents($image));
  $src = 'data: '.mime_content_type($image).';base64,'.$imageData;
return $src; 
}*/

function getImage() {
  if(isset($_POST["date"]))
  {
    var date = $_POST["date"];
    $data["name"] = "Hi ".date;
  }
  echo json_encode($data);
}
?>
