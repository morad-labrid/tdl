<?php
    require_once('../class/class.php');
    $task = new user();

    if (isset($_GET['get'])=='task') {
        echo $data = $task->getTask();
    }
    

    if (isset($_GET['id'])) {
        $data = $task->valideTask($_GET['id']);
        echo ($data);
    }

    if (isset($_GET['desid'])) {
        $data = $task->desvalideTask($_GET['desid']);
        echo ($data);
    }

    if (isset($_GET['title'])) {

        $data = $task->addMission($_GET['title'], $_GET['dead'], $_GET['tableto']);
        echo ($data);
    }

    if (isset($_GET['taskdesc'])) {

        $data = $task->addtask($_GET['taskdesc'], $_GET['idmission']);
        echo ($data);
    }
?>