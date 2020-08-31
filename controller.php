<?php
if(isset($_POST["fnName"]))
{
  switch($_POST["fnName"]) {
    case 'getImage':
      getImage();
    break;
    case 'testDelete':
      testDelete();
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
      $arrName22 = array();
      $te = array();
      $tet = $_POST["date"];
      $files = glob("./Image/" . $_POST["date"] . "/*.*");
      foreach($files as $file)
      { 
        $imageData = base64_encode(file_get_contents($file));
        if($imageData) {
          $src = 'data: '.mime_content_type($file).';base64,'.$imageData;
          array_push($arrName, $src);
        }
        array_push($te, $file);
      }

      if($arrName) {
        $myObj->name = "Show image";
        $myObj->images = $arrName;
        $myObj->te = $te;
        $myObj->tet = $tet;
        echo json_encode($myObj);
      } else {
        $myObj->name = "No image";
        $myObj->images = $arrName;
        echo json_encode($myObj);
      }
    //}  
  }
}

function testDelete() {
  $files = glob("./Image/" . $_POST["date"] . "/*.*");
  $arrName = array();
  $arrTypeName = array();
  $i = 1;
  foreach ($files as $file) {
    if (unlink($file)) {
      $txt1 = $i++;
    }
  }
  $myObj->mass = "mass delete : " . $txt1 . " hi" . $files[0];
  $myObj->list1 = $arrTypeName;
  $myObj->list2 = $arrName;
  $myObj->list3 = $txt1;
  echo json_encode($myObj);
}

/*function deleteDir($dirPath) {
    if (! is_dir($dirPath)) {
        throw new InvalidArgumentException("$dirPath must be a directory");
    }
    if (substr($dirPath, strlen($dirPath) - 1, 1) != '/') {
        $dirPath .= '/';
    }
    $files = glob($dirPath . '*', GLOB_MARK);
    foreach ($files as $file) {
        if (is_dir($file)) {
            self::deleteDir($file);
        } else {
            unlink($file);
        }
    }
    rmdir($dirPath);
}*/
?>
