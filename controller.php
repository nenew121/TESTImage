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
  
  function getImage() {
  if(isset($_POST["date"]))
  {
      $arrName = array();
      $files = glob("./Image/" . $_POST["date"] . "/*.*");
      foreach($files as $file)
      { 
        $imageData = base64_encode(file_get_contents($file));
        if($imageData) {
          $src = 'data: '.mime_content_type($file).';base64,'.$imageData;
          array_push($arrName, $src);
        }
      }

      if($arrName) {
        $myObj->name = "Show image";
        $myObj->images = $arrName;
        echo json_encode($myObj);
      } else {
        $myObj->name = "No image";
        $myObj->images = $arrName;
        echo json_encode($myObj);
      } 
    }
  }

  function testDelete() {
    $files = glob("./Image/" . $_POST["date"] . "/*.*");
    $arrName = array();
    $i = 1;
    foreach ($files as $file) {
      if (unlink($file)) {
        $txt1 = $i++;
      }
    }
    $myObj->mass = "Delete : " . $txt1 . $files[0];
    $myObj->list1 = $arrName;
    $myObj->list2 = $txt1;
    echo json_encode($myObj);
  }
}
?>
