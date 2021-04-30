-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
<<<<<<< HEAD
-- Généré le : ven. 30 avr. 2021 à 17:08
=======
-- Généré le : mer. 28 avr. 2021 à 11:27
>>>>>>> master
-- Version du serveur :  5.7.32
-- Version de PHP : 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Base de données : `todolist`
--

-- --------------------------------------------------------

--
-- Structure de la table `mission`
--

CREATE TABLE `mission` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `dateCreate` date DEFAULT NULL,
  `deadLine` date DEFAULT NULL,
<<<<<<< HEAD
  `tableto` varchar(255) DEFAULT NULL,
=======
  `table` varchar(255) DEFAULT NULL,
>>>>>>> master
  `idUser` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `mission`
--

<<<<<<< HEAD
INSERT INTO `mission` (`id`, `title`, `dateCreate`, `deadLine`, `tableto`, `idUser`) VALUES
(1, 'Cree un todolist', '2021-01-20', '2021-04-28', 'todo', 4),
(3, 'Faire les courses', '2021-01-27', '2021-05-27', 'todo', 4),
(4, 'achat accessoires voiture', '2021-04-23', '2021-06-27', 'freeTime', 4),
(5, 'Site Wordpress', '2021-03-27', '2021-04-17', 'todo', 4),
(6, 'faire sport', '2021-04-10', '2021-04-30', 'freeTime', 4),
(17, 'test', '2021-04-28', '2021-04-30', 'todo', 4),
(18, 'LAPLATEFORME', '2021-04-28', '2021-05-07', 'todo', 4),
(19, 'test', '2021-04-28', '2021-05-05', 'todo', 4),
(20, 'LAPLATEFORME', '2021-04-28', '2021-05-09', 'todo', 4),
(21, 'Mini-Chaise Rond', '2021-04-28', '2021-05-07', 'freeTime', 4),
(22, 'LAPLATEFORMEssasas', '2021-04-28', '2021-05-01', 'todo', 4),
(23, 'SIGNAL TITLE', '2021-04-28', '2021-05-05', 'todo', 4),
(24, 'Mini-Chaise Rond', '2021-04-28', '2021-05-04', 'todo', 4),
(25, 'Vase', '2021-04-28', '2021-05-04', 'todo', 4),
(26, 'Mini-Chaise Rond', '2021-04-28', '2021-05-07', 'freeTime', 4),
(27, 'Mini-Chaise Rond', '2021-04-28', '2021-04-29', 'todo', 4),
(28, 'LAPLATEFORME', '2021-04-29', '2021-05-07', 'todo', 4);

-- --------------------------------------------------------

--
-- Structure de la table `task`
--

CREATE TABLE `task` (
  `id` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `idMission` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `task`
--

INSERT INTO `task` (`id`, `description`, `status`, `idMission`) VALUES
(1, '10 kilo de pomme de terre', 1, 3),
(2, '3 chips de frommage', 0, 3),
(3, '5 kilo de tomate', 0, 3),
(4, 'faire une maquette', 0, 1),
(5, '2 pasteques', 0, 3),
(6, 'faire la partie front', 1, 1),
(7, 'ajouter mode payement', 0, 5),
(8, 'ajouter un forme de contact', 0, 5),
(9, 'ajouter la page ABOUT US', 0, 4),
(10, '2 fleure', 1, 25),
(11, '4 lala', 1, 25),
(12, '', 0, 22),
(13, '', 0, 22),
(14, '', 0, 19),
(15, '', 0, 20),
(16, 'azdazd', 1, 25),
(17, '', 1, 24),
(18, 'siiganle 1', 0, 23),
(19, 'azdazd', 0, 26),
(20, 'ergerg', 0, 26),
(21, 'je veux une grande salle avec ', 0, 21);

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `username`, `email`, `password`) VALUES
(1, 'morad', 'morad@labrid.com', '$2y$10$x3j/aj9aMPVbhBGxzd.yrem4fMAY3d2ndisOREgIY3nyNqAJ9UO7e'),
(3, 'nadir', 'nadir@zian.com', '$2y$10$VrgyyPCjtktMGTtJnRWole0uL6Ib6eu3z2KkOKMG/1H8yaqwPtC4S'),
(4, 'ikram', 'ikram@fouadi.com', '$2y$10$Tp8UY/DiEPxwtwIevbUJuueC8tD8WRNro6m7kQuT70WJw7HzlY7eu'),
(6, '', '', '$2y$10$LgCLS7OA3xyJ3jrSnNcfTui0h.sHv/E7LIABrBI/VHuSO0pa/d6MG'),
(7, 'hachim', 'hachim@fouadi.com', '$2y$10$Do0TvgEKUK/aK5q4U9Er2uFf1o0GW0IF8V3EN1aHbJqpefoBjxal.'),
(8, 'yassine', 'yassine@labrid.com', '$2y$10$TJscR1UvKGO5Jpd/KVoU5ePbz10yjGkrkZKwdZowo.7B9cYRqd4TW'),
(9, 'karima', 'karima@labrid.com', '$2y$10$21T0s48Qb3m3LTMWCU1mXeX0twu2.f0lUBOVFXuXq5vCmg1jgaKFy');
=======
INSERT INTO `mission` (`id`, `title`, `dateCreate`, `deadLine`, `table`, `idUser`) VALUES
(1, 'Cree un todolist', '2021-01-20', '2021-04-28', 'todo', 3),
(3, 'Faire les courses', '2021-01-27', '2021-05-27', 'todo', 3),
(4, 'achat accessoires voiture', '2021-04-23', '2021-06-27', 'freeTime', 3),
(5, 'Site Wordpress', '2021-03-27', '2021-04-17', 'todo', 3),
(6, 'faire sport', '2021-04-10', '2021-04-30', 'freeTime', 3),
(7, 'test', '2021-04-28', '2021-05-05', 'todo', 3),
(8, 'Mini-Chaise Rond', '2021-04-28', '2021-05-04', 'todo', 3);
>>>>>>> master

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `mission`
--
ALTER TABLE `mission`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
<<<<<<< HEAD
-- Index pour la table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idMission` (`idMission`);

--
-- Index pour la table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
=======
>>>>>>> master
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `mission`
--
ALTER TABLE `mission`
<<<<<<< HEAD
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT pour la table `task`
--
ALTER TABLE `task`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT pour la table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
=======
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
>>>>>>> master

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `mission`
--
ALTER TABLE `mission`
  ADD CONSTRAINT `mission_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`);
<<<<<<< HEAD

--
-- Contraintes pour la table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `task_ibfk_1` FOREIGN KEY (`idMission`) REFERENCES `mission` (`id`);
=======
>>>>>>> master
