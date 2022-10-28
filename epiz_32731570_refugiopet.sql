-- phpMyADM SQL Dump
-- version 4.9.0.1
-- https://www.phpmyADM.net/
--
-- Host: sql303.byetcluster.com
-- Tempo de geração: 28/10/2022 às 10:55
-- Versão do servidor: 10.3.27-MariaDB
-- Versão do PHP: 7.2.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `epiz_32731570_refugiopet`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `ADM`
--

CREATE TABLE `ADM` (
  `IDADM` int(11) NOT NULL,
  `NOME` varchar(45) NOT NULL,
  `EMAIL` varchar(45) NOT NULL,
  `LOGIN` varchar(17) NOT NULL,
  `SENHA` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `ANIMAL`
--

CREATE TABLE `ANIMAL` (
  `IDANIMAL` int(11) NOT NULL,
  `NOME` varchar(45) DEFAULT NULL,
  `IMAGEM` varchar(45) DEFAULT NULL,
  `DISP_ADOCAO` varchar(45) DEFAULT NULL,
  `TIPOANIMAL` varchar(45) DEFAULT NULL,
  `ADM_IDADM` int(11) NOT NULL,
  `RACA_IDRACA` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estrutura para tabela `RACA`
--

CREATE TABLE `RACA` (
  `IDRACA` int(11) NOT NULL,
  `NOME` varchar(45) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `ADM`
--
ALTER TABLE `ADM`
  ADD PRIMARY KEY (`IDADM`);

--
-- Índices de tabela `ANIMAL`
--
ALTER TABLE `ANIMAL`
  ADD PRIMARY KEY (`IDANIMAL`,`ADM_IDADM`,`RACA_IDRACA`),
  ADD KEY `FK_ANIMAL_ADM_IDX` (`ADM_IDADM`),
  ADD KEY `FK_ANIMAL_RACA1_IDX` (`RACA_IDRACA`);

--
-- Índices de tabela `RACA`
--
ALTER TABLE `RACA`
  ADD PRIMARY KEY (`IDRACA`);

--
-- Restrições para dumps de tabelas
--

--
-- Restrições para tabelas `ANIMAL`
--
ALTER TABLE `ANIMAL`
  ADD CONSTRAINT `FK_ANIMAL_ADM` FOREIGN KEY (`ADM_IDADM`) REFERENCES `ADM` (`IDADM`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_ANIMAL_RACA1` FOREIGN KEY (`RACA_IDRACA`) REFERENCES `RACA` (`IDRACA`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
