<?php

    class user
    {
        private $db;


        public function __construct(){
            try {
                $db = new PDO('mysql:host=localhost;dbname=todolist', "root", "");
            } catch (\Throwable $th) {
                echo $th->getMessage();
            }
            $this->db = $db;
        }


        public function insertUser($username, $email, $password){
            // HACHAGE DU PASSWORD
            $password = password_hash($password, PASSWORD_BCRYPT);

            // SELECTIONNER LE USER
            $select = $this->db->prepare('SELECT * FROM user WHERE username = :username OR email = :email');
            $select -> bindParam('username', $username);
            $select -> bindParam('email', $email);
            $select -> execute();

            $checkuser = $select->rowCount();

            // INSERTION DES DONNEES DANS LA BDD SI AUCUN USER TROUVER
            if ($checkuser === 0) {
                $insert = $this->db->prepare('INSERT INTO user(username, email, password) VALUES(:username, :email, :password)');
                $insert -> bindParam('username', $username);
                $insert -> bindParam('email', $email);
                $insert -> bindParam('password', $password);
                $insert -> execute();

                return(json_encode("ok"));
            }else {
                return(json_encode("L'utilisateur existe deja"));
            }
        }


        public function getUser($username, $password){
            // SELECTIONNER LE USER
            $select = $this->db->prepare('SELECT * FROM user WHERE username = :username');
            $select -> bindParam('username', $username);
            $select -> execute();

            $checkuser = $select->rowCount();
            $data = $select->fetch(PDO::FETCH_OBJ);
            
            if ($checkuser === 1) {
                //VERIFIER SI PASSWORD EST JUSTE
                $passHached = $data->password;
                $verefy = password_verify($password, $passHached);

                if ($verefy == true) {
                    //CREE UNE COOKIE POUR STOCKER LE USER
                    return(json_encode($data));
                }else {
                    return(json_encode("Mot de passe incorrecte"));
                }
            }else {
                return(json_encode('Aucun utilisateurs'));
            }
        }

        public function getData(){
            // SELECTIONNER LE USER
            $id = $_COOKIE['user'];
            //$select = $this->db->prepare('SELECT * FROM user INNER JOIN mission ON mission.idUser=user.id INNER JOIN task ON mission.id=task.idMission WHERE user.id=3');
            $select = $this->db->prepare("SELECT * FROM mission  WHERE mission.idUser=$id ORDER BY id DESC");
            $select -> execute();

            $data = $select->fetchAll(PDO::FETCH_OBJ);
            return json_encode($data);
        }

        public function getTask(){
            // SELECTIONNER LE USER
            //$select = $this->db->prepare('SELECT * FROM user INNER JOIN mission ON mission.idUser=user.id INNER JOIN task ON mission.id=task.idMission WHERE user.id=3');
            $select = $this->db->prepare("SELECT * FROM task ORDER BY status DESC");
            $select -> execute();

            $data = $select->fetchAll(PDO::FETCH_OBJ);
            return json_encode($data);
        }

        public function valideTask($id){
            // SELECTIONNER LE USER
            //$select = $this->db->prepare('SELECT * FROM user INNER JOIN mission ON mission.idUser=user.id INNER JOIN task ON mission.id=task.idMission WHERE user.id=3');
            $maj = $this->db->prepare("UPDATE `task` SET `status`= '1' WHERE id = $id");
            $maj -> execute();

            $select = $this->db->prepare("SELECT * FROM task WHERE id = $id");
            $select -> execute();

            $data = $select->fetchAll(PDO::FETCH_OBJ);
            return json_encode($data);
        }

        public function desvalideTask($id){
            // SELECTIONNER LE USER
            //$select = $this->db->prepare('SELECT * FROM user INNER JOIN mission ON mission.idUser=user.id INNER JOIN task ON mission.id=task.idMission WHERE user.id=3');
            $maj = $this->db->prepare("UPDATE `task` SET `status`= '0' WHERE id = $id");
            $maj -> execute();

            $select = $this->db->prepare("SELECT * FROM task WHERE id = $id");
            $select -> execute();

            $data = $select->fetchAll(PDO::FETCH_OBJ);
            return json_encode($data);
        }

        public function addMission($title, $deadLine, $tableto){
            $dateCreate = date("Y-m-d");
            $id = $_COOKIE['user'];
            // INSERTION DES DONNEES DANS LA BDD SI AUCUN USER TROUVER
            $insert = $this->db->prepare("INSERT INTO mission (title, dateCreate, deadLine, tableto, idUser) VALUES ('$title', '$dateCreate', '$deadLine', '$tableto', '$id')");
            // $insert -> bindParam('title', $title);
            // $insert -> bindParam('dateCreate', $dateCreate);
            // $insert -> bindParam('deadLine', $deadLine);
            // $insert -> bindParam('table', $table);
            // $insert -> bindParam('idUser', $id);
            $insert -> execute();

            return(json_encode($insert));
        }

        public function addtask($desc, $id){
            $status = 0;
            // INSERTION DES DONNEES DANS LA BDD SI AUCUN USER TROUVER
            $insert = $this->db->prepare("INSERT INTO task (description, status, idMission) VALUES (:description, :status, :idMission)");
            $insert -> bindParam('description', $desc);
            $insert -> bindParam('status', $status);
            $insert -> bindParam('idMission', $id);
            $insert -> execute();
            return(json_encode($insert));
        }
    

    public function getUsername(){
        // SELECTIONNER LE USER
        $id = $_COOKIE['user'];
        //$select = $this->db->prepare('SELECT * FROM user INNER JOIN mission ON mission.idUser=user.id INNER JOIN task ON mission.id=task.idMission WHERE user.id=3');
        $select = $this->db->prepare("SELECT * FROM user WHERE id = $id");
        $select -> execute();

        $data = $select->fetchAll(PDO::FETCH_OBJ);
        return $data;
    }
}
?>