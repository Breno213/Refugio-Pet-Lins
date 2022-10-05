-- MySQL Script generated by MySQL Workbench
-- Wed Aug 24 14:56:36 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `usuario` (
  `idusuario` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  PRIMARY KEY (`idusuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`raca`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `raca` (
  `idraca` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  PRIMARY KEY (`idraca`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`animal`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `animal` (
  `idanimal` INT NOT NULL,
  `nome` VARCHAR(45) NULL,
  /*`imagem` VARCHAR(45) NULL,*/
  `desc` VARCHAR(45) NULL,
  `disp_adocao` VARCHAR(45) NULL,
  `tipoAnimal` VARCHAR(45) NULL,
  `usuario_idusuario` INT NOT NULL,
  `raca_idraca` INT NOT NULL,
  PRIMARY KEY (`idanimal`),
  INDEX `fk_animal_usuario_idx` (`usuario_idusuario` ASC),
  INDEX `fk_animal_raca1_idx` (`raca_idraca` ASC),
  CONSTRAINT `fk_animal_usuario`
    FOREIGN KEY (`usuario_idusuario`)
    REFERENCES `mydb`.`usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_animal_raca1`
    FOREIGN KEY (`raca_idraca`)
    REFERENCES `mydb`.`raca` (`idraca`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
