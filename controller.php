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
  if(isset($_POST["date"]))
  {
    $url = "https://shielded-mesa-66786.herokuapp.com/Image/" . $_POST["date"] . ".png";
    $file_name = basename($url);
    $imageData = base64_encode(file_get_contents($url));
    $src = 'data: '.mime_content_type($url).';base64,'.$imageData;
    //$type = mime_content_type($url);
    $types = glob("https://shielded-mesa-66786.herokuapp.com/Image/" . "*.*");
    $type = "Test Type :";
    $i = 0;
    foreach($types as $dr)
    {
      $type += ($i++ . ":" . $dr);
    }

    if($file_name) {
      $myObj->name = strval($file_name);
      $myObj->src = $src;
      $myObj->type = $type;
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
}
?>
