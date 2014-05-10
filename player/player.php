<?php
	$id = $_GET["no"];
	$face = $_GET["fc"];

	if (!preg_match("/^(A|B)[0-9\-]+$/", $id)) {
		$id = "A015";
	}
	if (!preg_match("/^[0-9]$/", $face)) {
		$face = "0";
	}

	$file = "";
	$dir = "";
    
    if ($id{0} == "A") {
        $dir = "kei1";
        $file = "kei_voice_" . str_replace("-", "_", substr($id, 1)) . ".mp3";
	} else if ($id{0} == "B") {
        $dir = "kei2";
        $file = "kei2_voice_" . substr($id, 1) . ".mp3";
	}
       
?>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>暮井 慧 ボイス</title>
    <link rel="stylesheet" href="//pronama.azurewebsites.net/voice/lib/css/jquery.maximage.css" />
    <link rel="stylesheet" href="//pronama.azurewebsites.net/voice/lib/css/screen.css" />
    <link rel="stylesheet" href="//pronama.azurewebsites.net/voice/build/mediaelementplayer.min.css" />
    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #222; 
		}
		
        #bottom {
            position: absolute;
            bottom: 0px;
            height: 30px;
            width: 100%;
            overflow: hidden;
        }
    </style>
</head>
<body>
<!--

注意！ 音声ファイルは私的利用の範囲でご利用ください

//-->
    <div id="maximage">
        <img alt="" src="https://pronama.azurewebsites.net/voice/img/face<?php echo $face; ?>.png" />
    </div>
    <div id="bottom">
        <audio width="100%" id="player" src="http://pronama.jp/voice/<?php echo $dir; ?>/mp3/<?php echo $file; ?>" type="audio/mp3" controls="controls"></audio>
    </div>
    <script src="//code.jquery.com/jquery-1.11.0.js"></script>
    <script src="//pronama.azurewebsites.net/voice/build/mediaelement-and-player.min.js"></script>
    <script src="//pronama.azurewebsites.net/voice/lib/js/jquery.cycle.all.js"></script>
    <script src="//pronama.azurewebsites.net/voice/lib/js/jquery.maximage.js"></script>
    <script>
	$(function(){
		$('#maximage').maximage();
        var player = new MediaElementPlayer('#player');
    });
    </script>
</body>
</html>
