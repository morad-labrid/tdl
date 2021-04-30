<?php
require_once('class/class.php');
$user = new user();

if (!isset($_COOKIE["user"])) {
    header('location:index.php');
}

$data = $user->getUsername();
$user = $data[0]->username;


?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/d34f22fe3f.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="styles/css/styleTodo.css">
    <title>ToDo list</title>
</head>

<body>
    <header>
        <nav>Déconnexion</i></nav>
        <p>To Do List</p>
        <div class="name">
            <p><?= substr($user,0,2); ?></p>
        </div>
    </header>
    <main>
        <!-- :::::::::::::::::::::TO DO::::::::::::::::::::: -->
        <section class="toDo" id="toDo">
            <div class="topBar">
                <div>
                    <div></div>
                    <p>&nbsp;&nbsp;To do</p>
                    <p class="countTask"></p>
                </div>
                <nav id="showAddMission"><i class="fas fa-plus"></i></nav>
                <nav id="hideAddMission"><i class="fas fa-times"></i></nav>
            </div>
            <div class="container" id="containerToDo">
                <p class="notice"></p>
                <br>
                <form method="post" class="mission">
                    <input type="text" name="title" id="title" placeholder="Nom de la mission">
                    <input type="date" name="dead" id="dead" placeholder="Date de fin">
                    <br>
                    <input type="button" id="addMission" value="GO">
                </form>
            </div>
        </section>
        <!-- :::::::::::::::::::::PROGRESS::::::::::::::::::::: -->
        <section class="progress">
            <div class="topBar">
                <div>
                    <div></div>
                    <p>&nbsp;&nbsp;In free time</p>
                    <p class="countTask"></p>
                </div>
                <nav id="showAddMission"><i class="fas fa-plus"></i></nav>
                <nav id="hideAddMission"><i class="fas fa-times"></i></nav>
            </div>
            <div class="container" id="containerToDo">
                <p class="notice"></p>
                <br>
                <form method="post" class="mission">
                    <input type="text" name="title" id="title" placeholder="Nom de la mission">
                    <input type="date" name="dead" id="dead" placeholder="Date de fin">
                    <br>
                    <input type="button" id="addMission" value="GO">
                </form>
            </div>
        </section>
        <!-- :::::::::::::::::::::URGENT::::::::::::::::::::: -->
        <section class="urgent">
            <div class="topBar">
                <div>
                    <div></div>
                    <p>&nbsp;&nbsp;Urgent</p>
                    <p class="countTask"></p>
                </div>
            </div>
            <div class="container">
                <p class="notice"></p>
                <br>
            </div>
        </section>
        <!-- :::::::::::::::::::::DONE::::::::::::::::::::: -->
        <section class="done">
            <div class="topBar">
                <div>
                    <div></div>
                    <p>&nbsp;&nbsp;Fini</p>
                    <p class="countTask">(??)</p>
                </div>
            </div>
            <div class="container">
                <p class="notice">vous avez fini ?? missions</p>
                <br>
            </div>
        </section>
    </main>

    <footer>
        <ul>
            <li><a href="">Facebook</a></li>
            <li><a href="">Instagram</a></li>
        </ul>
        <p>Cpyright Morad</p>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="styles/js/script.js"></script>
</body>

</html>