@Code
    Dim id As String = If(Request("no").IsEmpty, "A015", Request("no"))
    Dim face As String = If(Request("fc").IsEmpty, "0", Request("fc"))
End Code
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <link rel="prerender" href="http://pronama.azurewebsites.net/pronama/" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>暮井 慧 ボイス</title>
    <script src="//code.jquery.com/jquery-1.11.0.js"></script>
    <script src="@Href("build/mediaelement-and-player.min.js")"></script>
    <link rel="stylesheet" href="@Href("build/mediaelementplayer.min.css")" />
    <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css" />
    <link rel="stylesheet" href="@Href("voice.css")" />
    <style>
        .popover-content {
            font-size: 20px;
        }

        .popover-kei .popover {
            position: relative;
            display: block;
            top: 30px;
        }
    </style>
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
      <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <meta name="twitter:card" content="player">
    <meta name="twitter:site" content="pronama">
    <meta name="twitter:title" content="暮井 慧 ボイス">
    <meta name="twitter:image:src" content="https://pronama.azurewebsites.net/voice/img/img@(face).png">
    <meta name="twitter:player" content="https://pronama.azurewebsites.net/voice/player.php/?no=@id&amp;fc=@face">
    <meta name="twitter:player:height" content="350">
    <meta name="twitter:player:width" content="350">
</head>
<body>
    <div id="main" class="container">
        <div id="character" class="box">
            <div class="popover-kei" id="balloon">
                <div class="popover top">
                    <div class="arrow"></div>
                    <div class="popover-content" id="balloon-message">
                        私、暮井慧 よろしくね
                    </div>
                </div>
            </div>
            <img id="face" class="box" src="img/face0.png" />
            <div id="audio"><audio id="player" src="http://pronama.jp/voice/kei1/mp3/kei_voice_015.mp3" type="audio/mp3" controls="controls"></audio></div>
        </div>

        <div class="clearfix">
            <div id="twit"><a href="#" target="_blank"><img src="@Href("img/Twitter_logo_blue.png")" /></a></div>
        </div>

        <div class="panel-group" id="accordion" style="margin-top: 20px;">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Customize</a>
                    </h4>
                </div>
                <div id="collapseOne" class="panel-collapse collapse in">
                    <div class="panel-body">
                        <h4>Face</h4>
                        <div id="icons" class="clearfix">
                        </div>
                        <h4 style="margin-top: 30px;">Voice</h4>
                        <input type="text" class="form-control" id="word-search" value="暮井" />
                        <table id="word-list" class="easy-table easy-table-default" style="margin-top: 20px;"></table>
                    </div>
                </div>
            </div>
        </div>

        <footer id="footer">
            <a href="//pronama.azurewebsites.net/pronama/"><img src="@Href("img/logo.png")" /></a>
        </footer>
    </div>

    <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
    <script src="//pronama.azurewebsites.net/wp-content/themes/adapt/js/voice_word_list.js"></script>
    <script src="@Href("voice.js?ver=1.1")"></script>
</body>
</html>
