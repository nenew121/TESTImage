<?php
if(isset($_POST["fnName"]))
{
  switch($_POST["fnName"]) {
    case 'getImage':
      getImage();
    break;
    case 'getfile':
      getfile();
    break;
    default:
      $myObj->error = "Error switch case";
      echo json_encode($myObj);
    break;
  }
}

/*function getImage2() {
  $image = 'http://images.itracki.com/2011/06/favicon.png';
  $imageData = base64_encode(file_get_contents($image));
  $src = 'data: '.mime_content_type($image).';base64,'.$imageData;
return $src; 
}*/

function getImage() {
  if(isset($_POST["date"]))
  {
    $date = $_POST["date"];
    $myObj->name = "John";
    $myObj->date = $date;
    echo json_encode($myObj);
  }
}

function getfile() {
  $directory = "https://shielded-mesa-66786.herokuapp.com/Image"; // dir location
  if (glob($directory . "*.*") != false)
  {
   $filecount = count(glob($directory . "*.*"));
   echo $filecount;
  }
  else
  {
   echo 0;
  }
}
?>
