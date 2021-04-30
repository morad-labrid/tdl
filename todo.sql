-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : mer. 28 avr. 2021 à 11:27
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
  `table` varchar(255) DEFAULT NULL,
  `idUser` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Déchargement des données de la table `mission`
--

INSERT INTO `mission` (`id`, `title`, `dateCreate`, `deadLine`, `table`, `idUser`) VALUES
(1, 'Cree un todolist', '2021-01-20', '2021-04-28', 'todo', 3),
(3, 'Faire les courses', '2021-01-27', '2021-05-27', 'todo', 3),
(4, 'achat accessoires voiture', '2021-04-23', '2021-06-27', 'freeTime', 3),
(5, 'Site Wordpress', '2021-03-27', '2021-04-17', 'todo', 3),
(6, 'faire sport', '2021-04-10', '2021-04-30', 'freeTime', 3),
(7, 'test', '2021-04-28', '2021-05-05', 'todo', 3),
(8, 'Mini-Chaise Rond', '2021-04-28', '2021-05-04', 'todo', 3);

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
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `mission`
--
ALTER TABLE `mission`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `mission`
--
ALTER TABLE `mission`
  ADD CONSTRAINT `mission_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `user` (`id`);
