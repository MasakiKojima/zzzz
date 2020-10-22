<?php

// stylesheet
function stylesheet($file) {
  $str = date('U', filemtime(__DIR__ . '/../css/' . $file));
  echo '<link href="/assets/css/' . $file . '?' . $str . '" rel="stylesheet">' . "\n";
}

// javascript
function javascript($file, $load) {
  $str = date('U', filemtime(__DIR__ . '/../js/' . $file));
  if ($load) {
    echo '<script src="/assets/js/' . $file . '?' . $str . '" ' . $load . '></script>' . "\n";
  } else {
    echo '<script src="/assets/js/' . $file . '?' . $str . '"></script>' . "\n";
  }
}
