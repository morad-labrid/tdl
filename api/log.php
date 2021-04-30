<?php

    require_once('../class/class.php');
    $user = new user();

    // SECURISE LES INPUTS
    $username = trim(htmlspecialchars($_POST['username']));
    $password = trim(htmlspecialchars($_POST['password']));

    echo $data = $user->getUser($username, $password);

?>