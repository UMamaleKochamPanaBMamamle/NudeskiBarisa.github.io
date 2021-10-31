<?php
  session_start();
  if(!empty($_POST['submit'])){
    foreach($_POST as $vidname) {
      $_SESSION['vidname'] = $vidname;
    }
  }
  switch ($_SESSION['vidname']) {
    case "Kumo Desu Ga Nani Ka? Ending 1":
      $vidtype='video/mp4; codecs="av01.0.05M.08,opus"';
      $vidsrc="./KumoED1.mkv";
      $vol=0.25;
      $title="Kumo Desu Ga Nani Ka? ED1";
      break;
    case "Dirty AMV [Link Click]":
      $vidtype="video/webm";
      $vidsrc="Dirty.webm";
      $vol=0.2;
      $title="Dirty AMV (Link Click)";
      break;
    case "Build Divide: Code Black Opening 1":
      $vidtype='video/mp4; codecs="av01.0.05M.08,mp4a.40.2"';
      $vidsrc="./BDivideOP1.mkv";
      $vol=0.55;
      $title="Build Divide OP1";
      break;
    case "Grisaia no Kajitsu EP1 Scene":
      $vidtype='video/mp4; codecs="av01.0.05M.08,mp4a.40.2"';
      $vidsrc="./Grisaia_no_Kajitsu.mkv";
      $vol=0.25;
      $title="Grisaia no Kajitsu EP1";
      break;
    default:
      $vidtype="video/webm";
      $vidsrc="Dirty.webm";
      $vol=0.2;
      $title="Error";
      break;
  }
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <link rel="stylesheet" type="text/css" href="style.css">
    <title><?php echo $title ?></title>
  </head>
  <body>
    <input type="button" onclick="location.href = './list.html'" value="Video List" id="videolist"/>
    <script src="./script.js"></script>
    <video controls>
      <source src=<?php echo $vidsrc ?> type=<?php echo $vidtype ?> />
    </video><script>document.getElementsByTagName('video')[0].volume = <?php echo $vol ?>;</script>
  </body>
</html>
