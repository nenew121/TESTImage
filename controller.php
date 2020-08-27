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
    //$url = "https://shielded-mesa-66786.herokuapp.com/Image/" . $_POST["date"] . ".png";
    /*$url = "./Image/" . $_POST["date"] . ".png";
    $file_name = basename($url);
    $imageData = base64_encode(file_get_contents($url));*/
    //if ($imageData != "") {
      //$src = 'data: '.mime_content_type($url).';base64,'.$imageData;
      $arrName = array();
      $type = "";
      $file_name = "";
      $files = glob("./Image/" . "*.*");
      foreach($files as $file)
      { 
        $file_name = basename($file);
        array_push($arrName, $file_name);
        //$imageData = base64_encode(file_get_contents($file));
        //$src = 'data: '.mime_content_type($file).';base64,'.$imageData;
        $type += $dr;
      }

      if($file_name) {
        $myObj->name = $arrName;
        //$myObj->src = $src;
        $myObj->type = $type;
        $myObj->date1 = "date1";
        echo json_encode($myObj);
      } else {
        $myObj->name = "Test";
        //$myObj->src = "src";
        $myObj->type = "type";
        $myObj->date1 = "date1";
        echo json_encode($myObj);
      }
    //}  
  }
}
?>
