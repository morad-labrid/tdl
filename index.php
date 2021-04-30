<?php

if (isset($_COOKIE["user"])) {
    header('location:todo.php');
}

if (isset($_GET['stm']) == "signUp") {
    $form = '
            <div class="boxConnexion">
                <div class="title">
                    <h2>Inscription</h2>
                </div>
                <ul id="error">
                </ul>
                <form action="" method="post">
                    <input type="text" name="username" id="username" placeholder="Username">
                    <br>
                    <input type="email" name="email" id="email" placeholder="E-mail">
                    <br>
                    <input type="password" name="password" id="password" placeholder="Mot de passe">
                    <br>
                    <input type="password" name="cpassword" id="cpassword" placeholder="Confirmation mot de passe">
                    <br>
                    <input type="button" id="registre" value="S\'inscrire">
                </form>
                <a href="index.php">Si vous avez déjà un compte? cliquer ici</a>
            </div>';
}else {
    $form = '
            <div class="boxConnexion">
                <div class="title">
                    <h2>Connexion</h2>
                </div>
                <ul id="error">
                </ul>
                <form action="" method="post">
                    <input type="text" name="username" id="username" placeholder="Username">
                    <br>
                    <input type="password" name="password" id="password" placeholder="Mot de passe">
                    <br>
                    <input type="button" id="login" value="Connexion">
                </form>
                <a href="?stm=signUp">Si vous avez pas un compte? cliquer ici</a>
            </div>';
}

?>

<!DOCTYPE html>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="styles/css/style.css">
    <title>Todo List - Connexion</title>
</head>

<body>
    <header></header>

    <main>
        <section>
            <?=$form?>
        </section>
    </main>

    <footer></footer>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="styles/js/script.js"></script>
</body>

</html>