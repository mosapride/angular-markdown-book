<?php
$result = array();
$cdir = scandir(dirname(__FILE__  . "/markdown"));

foreach ($cdir as $key => $value) {
    if (!in_array($value, array(".",".."))) {
        if (!is_dir($dir . DIRECTORY_SEPARATOR . $value))  {
            echo $value . "\r\n";
        }
    }
}
?>
