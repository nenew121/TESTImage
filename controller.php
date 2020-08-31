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
        $myObj->name = "Test OK";
        $myObj->images = $arrName;
        $myObj->te = $te;
        $myObj->tet = $tet;
        echo json_encode($myObj);
      } else {
        $myObj->name = "Test";
        $myObj->images = "images";
        echo json_encode($myObj);
      }
    //}  
  }
}

function testDelete() {
  $date = $_POST["date"];
  $files = glob("./Image/" . strval($date) . ".*");
  $arrName = array();
  $arrName1 = array();
  $arrTypeName = array();
  $i = 1;
  //$dir_handle = opendir("./");
  foreach ($files as $file) {
    //if (unlink("./Image/".$file)) {
      //array_push($arrName, basename(file_get_contents($file)));
      //array_push($arrName, file_get_contents($file));
      //array_push($arrName, substr($file, 1, strlen($file)).split("\", $file));
      array_push($arrName, substr($file, 1, strlen($file)));
      //array_push($arrName1, str_replace("\", "", substr($file, 1, strlen($file))));
      array_push($arrTypeName, mime_content_type($file));
      $txt1 = $i++;
      if(strpos($file, $_POST["date"])) {
        $imageData = base64_encode(file_get_contents($file));
        $src = 'data: '.mime_content_type($file).';base64,'.$imageData;
        array_push($arrName, $src);
      }
    //}
  }
  $myObj->mass = "mass delete : ";
  //$myObj->list = $arrName;
  $myObj->list1 = $arrTypeName;
  $myObj->list2 = $arrName;
  //$myObj->list4 = $arrName1;
  $myObj->list3 = $txt1;
  //$myObj->list4 = $dir_handle;
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
