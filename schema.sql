-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Products'
-- 
-- ---

DROP TABLE IF EXISTS `Products`;
		
CREATE TABLE `Products` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  `slogan` VARCHAR NULL DEFAULT NULL,
  `description` INTEGER NULL DEFAULT NULL,
  `new field` INTEGER NULL DEFAULT NULL,
  `category` INTEGER NULL DEFAULT NULL,
  `default_price` INTEGER NULL DEFAULT NULL,
  `created_at` DATETIME NULL DEFAULT NULL,
  `updated_at` DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  FULLTEXT KEY ()
);

-- ---
-- Table 'Reviews'
-- 
-- ---

DROP TABLE IF EXISTS `Reviews`;
		
CREATE TABLE `Reviews` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `rating` INTEGER NULL DEFAULT NULL,
  `summary` VARCHAR NULL DEFAULT NULL,
  `recommend` CHAR NULL DEFAULT NULL,
  `response` INTEGER NULL DEFAULT NULL,
  `body` VARCHAR NULL DEFAULT NULL,
  `date` DATETIME NULL DEFAULT NULL,
  `reviewer_name` VARCHAR NULL DEFAULT NULL,
  `helpfulness` INTEGER NULL DEFAULT NULL,
  `id_Products` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'features'
-- 
-- ---

DROP TABLE IF EXISTS `features`;
		
CREATE TABLE `features` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `feature` VARCHAR NULL DEFAULT NULL,
  `value` INTEGER NULL DEFAULT NULL,
  `id_Products` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'category'
-- 
-- ---

DROP TABLE IF EXISTS `category`;
		
CREATE TABLE `category` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR NULL DEFAULT NULL,
  `id_Products` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Review_photos'
-- 
-- ---

DROP TABLE IF EXISTS `Review_photos`;
		
CREATE TABLE `Review_photos` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `url` MEDIUMTEXT NULL DEFAULT NULL,
  `id_Reviews` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Questions'
-- 
-- ---

DROP TABLE IF EXISTS `Questions`;
		
CREATE TABLE `Questions` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `question_body` MEDIUMTEXT NULL DEFAULT NULL,
  `question_date` DATETIME NULL DEFAULT NULL,
  `asker_name` VARCHAR NULL DEFAULT NULL,
  `question_helpfulness` INTEGER NULL DEFAULT NULL,
  `reported` BINARY NULL DEFAULT NULL,
  `id_Products` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Answers'
-- 
-- ---

DROP TABLE IF EXISTS `Answers`;
		
CREATE TABLE `Answers` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `body` MEDIUMTEXT NULL DEFAULT NULL,
  `date` DATETIME NULL DEFAULT NULL,
  `answerer_name` VARCHAR NULL DEFAULT NULL,
  `helpfulness` INTEGER NULL DEFAULT NULL,
  `photos` MEDIUMTEXT NULL DEFAULT NULL,
  `id_Questions` INTEGER NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys 
-- ---

ALTER TABLE `Reviews` ADD FOREIGN KEY (id_Products) REFERENCES `Products` (`id`);
ALTER TABLE `features` ADD FOREIGN KEY (id_Products) REFERENCES `Products` (`id`);
ALTER TABLE `category` ADD FOREIGN KEY (id_Products) REFERENCES `Products` (`id`);
ALTER TABLE `Review_photos` ADD FOREIGN KEY (id_Reviews) REFERENCES `Reviews` (`id`);
ALTER TABLE `Questions` ADD FOREIGN KEY (id_Products) REFERENCES `Products` (`id`);
ALTER TABLE `Answers` ADD FOREIGN KEY (id_Questions) REFERENCES `Questions` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Products` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Reviews` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `features` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `category` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Review_photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Questions` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Answers` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Products` (`id`,`name`,`slogan`,`description`,`new field`,`category`,`default_price`,`created_at`,`updated_at`) VALUES
-- ('','','','','','','','','');
-- INSERT INTO `Reviews` (`id`,`rating`,`summary`,`recommend`,`response`,`body`,`date`,`reviewer_name`,`helpfulness`,`id_Products`) VALUES
-- ('','','','','','','','','','');
-- INSERT INTO `features` (`id`,`feature`,`value`,`id_Products`) VALUES
-- ('','','','');
-- INSERT INTO `category` (`id`,`name`,`id_Products`) VALUES
-- ('','','');
-- INSERT INTO `Review_photos` (`id`,`url`,`id_Reviews`) VALUES
-- ('','','');
-- INSERT INTO `Questions` (`id`,`question_body`,`question_date`,`asker_name`,`question_helpfulness`,`reported`,`id_Products`) VALUES
-- ('','','','','','','');
-- INSERT INTO `Answers` (`id`,`body`,`date`,`answerer_name`,`helpfulness`,`photos`,`id_Questions`) VALUES
-- ('','','','','','','');
