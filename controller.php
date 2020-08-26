<?php
if(isset($_POST["fnName"]))
{
  switch($_POST["fnName"]) {
    case 'getImage':
      getImage();
    break;
    default:
      $myObj->error = "Error switch case";
      echo json_encode($myObj);
    break;
  }
}

function getImage() {
  $url = "https://shielded-mesa-66786.herokuapp.com/Image/" . $_POST["date"] . ".png";
  $file_name = basename($url);
  $imageData = base64_encode(file_get_contents($url));
  $src = 'data: '.mime_content_type($url).';base64,'.$imageData;
  //$type = mime_content_type($url);
  $type = glob("https://shielded-mesa-66786.herokuapp.com/Image/" . "*.*");
  
  if($file_name) {
    $myObj->name = strval($file_name);
    $myObj->src = $src;
    $myObj->type = $type[0];
    $myObj->date1 = "date1";
    echo json_encode($myObj);
  } else {
    $myObj->name = "Test";
    $myObj->src = "src";
    $myObj->type = "type";
    $myObj->date1 = "date1";
    echo json_encode($myObj);
  }
}

function getImage2() {
  if(isset($_POST["date"]))
  {
    $date = $_POST["date"];
    $myObj->name = "John";
    $myObj->date = $date;
    echo json_encode($myObj);
  }
}
?>
