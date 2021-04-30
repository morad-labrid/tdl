<?php
    require_once('../class/class.php');
    $user = new user();

    // SECURISE LES INPUTS
    $username = trim(htmlspecialchars($_POST['username']));
    $email = trim(htmlspecialchars($_POST['email']));
    $password = trim(htmlspecialchars($_POST['password']));

    echo $insert = $user->insertUser($username, $email ,$password);
?>