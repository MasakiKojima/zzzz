<?php

$root = $_SERVER['DOCUMENT_ROOT'];
$path = '/' . ltrim(parse_url(urldecode($_SERVER['REQUEST_URI']))['path'], '/');

if (file_exists($root . $path)) {
    // トレイリングスラッシュ
    if (is_dir($root . $path) && substr($path, -1) !== '/') {
        header("Location: $path/");
        exit;
    }

} else {
    // 404 Page
    header($_SERVER['SERVER_PROTOCOL'] . ' 404 Not Found');
    return true;
}

// .htmlでphpを動作
$filename = $_SERVER["SCRIPT_FILENAME"];
if (preg_match("/\.html$/", $filename)) {
    chdir(dirname($filename));
    return require $filename;
}
return false;
