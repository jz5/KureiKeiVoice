$(function () {
    var g_no = "";
    var g_face = "0"
    var g_msg = "";

    // bootstrap
    $('.collapse').collapse();

    // table
    var html = "";
    for (var i = 0; i < w.length; i++) {

        html += '<tr>';
        html += '<td>' + w[i].no + '</td>';
        html += '<td>' + w[i].word + '</td>';
        html += '<td>' + w[i].tag + '</td>';

        var file = "";
        var dir = "";
        if (w[i].no.charAt(0) == "A") {
            dir = "kei1";
            file = "kei_voice_" + w[i].no.substr(1).replace("-", "_");
        } else {
            dir = "kei2";
            file = "kei2_voice_" + w[i].no.substr(1);
        }

        html += '<td><a href="#" class="select-voice" data-content="' + w[i].no + '">select</a></td>';
        html += '</tr>';
    }
    $("#word-list").html('<thead><th>No.</th><th>Word</th><th>Tags</th><th>Select</th></thead><tbody id="wrod-list-body">' + html + '</tbody>');
    $('#wrod-list-body tr').hide();
    $('#wrod-list-body tr:contains("暮井")').show();

    $('#word-search').keyup(function () {
        if (!$(this).val()) {
            $('#wrod-list-body tr').show();
        } else {
            $('#wrod-list-body tr').hide();
            $('#wrod-list-body tr:contains(' + this.value + ')').show();
        }
    });

    $(".select-voice").click(function () {
        setAudio($(this).attr("data-content"));
        return false;
    });

    // icon
    var html = "";
    for (var i = 0; i <= 9; i++) {
        html += '<div class="trim"><a href="#"><img src="img/face' + i + '.png" class="icon" data-content="' + i + '" /></a></div>';
    }
    $("#icons").html(html);
    $(".icon").click(function () {
        setFace($(this).attr("data-content"));
        return false;
    });

    // player
    var player = new MediaElementPlayer('#player');
    player.pause();

    $("#face").click(function () {
        if (player.src != "") player.play();
        return false;
    });

    //
    var params = get_url_vars();
    setAudio(params["no"]);
    setFace(params["fc"]);

    function get_url_vars() {
        var vars = new Object, params;
        var temp_params = window.location.search.substring(1).split('&');
        for (var i = 0; i < temp_params.length; i++) {
            params = temp_params[i].split('=');
            if (params[0]) {
                vars[decodeURIComponent(params[0])] = decodeURIComponent((params[1] || "").replace(/\+/g, " "));
            }
        }
        return vars;
    }

    function setAudio(id) {
        var exits = false;
        var word;

        for (var i = 0; i < w.length; i++) {
            if (id == w[i].no) {
                exits = true;
                word = w[i].word;
                break;
            }
        }

        if (!exits) {
            id = "A015";
            word = "私、暮井慧 よろしくね";
        }

        // global
        g_no = id;
        g_msg = word;

        // balloon
        $("#balloon-message").text(word);
        $("#balloon").show();

        // player
        var file = "";
        var dir = "";
        if (id.charAt(0) == "A") {
            dir = "kei1";
            file = "kei_voice_" + id.substr(1).replace("-", "_");
        } else {
            dir = "kei2";
            file = "kei2_voice_" + id.substr(1);
        }
        
        // setSrc 動作しないブラウザあり
        //player.setSrc('http://pronama.jp/voice/' + dir + '/mp3/' + file + '.mp3');
        //player.play();

        $("#audio").html('<audio id="player" src="' + 'http://pronama.jp/voice/' + dir + '/mp3/' + file + '.mp3' + '" type="audio/mp3" controls="controls"></audio>');
        player = new MediaElementPlayer('#player');
        player.play();
        
        $("#audio").show();

        setTwit();
    }

    function setFace(id) {
        if (!id || !id.match(/^\d$/)) {
            id = "0";
        }

        g_face = id;

        $("#face").attr("src", "img/face" + id + ".png");
        setTwit();
    }

    function setTwit() {
        var url = 'http://pronama.jp/voice/?no=' + g_no + ((g_face != "0") ? '&fc=' + g_face : '');;
        $("#twit a").attr("href", 'http://twitter.com/share?url=' + encodeURIComponent(url) + '&text=' + encodeURIComponent(g_msg) + '&hashtags=' + encodeURIComponent('暮井慧ボイス'));
    }
});