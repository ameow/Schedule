-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               5.7.18-log - MySQL Community Server (GPL)
-- Server OS:                    Win32
-- HeidiSQL Version:             9.4.0.5125
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for schedule
CREATE DATABASE IF NOT EXISTS `schedule` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `schedule`;

-- Dumping structure for table schedule.classes
CREATE TABLE IF NOT EXISTS `classes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `day_id` int(11) DEFAULT NULL,
  `time_id` int(11) DEFAULT NULL,
  `group_id` int(11) DEFAULT NULL,
  `lecturer_id` int(11) DEFAULT NULL,
  `room_id` int(11) DEFAULT NULL,
  `subject_id` int(11) DEFAULT NULL,
  `type_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `classes_to_day_idx` (`day_id`),
  KEY `classes_to_time_idx` (`time_id`),
  KEY `classes_to_group_idx` (`group_id`),
  KEY `classes_to_lecturer_idx` (`lecturer_id`),
  KEY `classes_to_room_idx` (`room_id`),
  KEY `classes_to_subject_idx` (`subject_id`),
  KEY `classes_to_type_idx` (`type_id`),
  CONSTRAINT `classes_to_day` FOREIGN KEY (`day_id`) REFERENCES `day` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `classes_to_group` FOREIGN KEY (`group_id`) REFERENCES `group` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `classes_to_lecturer` FOREIGN KEY (`lecturer_id`) REFERENCES `lecturer` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `classes_to_room` FOREIGN KEY (`room_id`) REFERENCES `room` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `classes_to_subject` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `classes_to_time` FOREIGN KEY (`time_id`) REFERENCES `time` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `classes_to_type` FOREIGN KEY (`type_id`) REFERENCES `type` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table schedule.classes: ~0 rows (approximately)
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;

-- Dumping structure for table schedule.course
CREATE TABLE IF NOT EXISTS `course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `number_UNIQUE` (`number`)
) ENGINE=InnoDB AUTO_INCREMENT=1192 DEFAULT CHARSET=utf8;

-- Dumping data for table schedule.course: ~1 rows (approximately)
/*!40000 ALTER TABLE `course` DISABLE KEYS */;
INSERT INTO `course` (`id`, `number`) VALUES
	(1, 1);
/*!40000 ALTER TABLE `course` ENABLE KEYS */;

-- Dumping structure for table schedule.day
CREATE TABLE IF NOT EXISTS `day` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(15) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=121 DEFAULT CHARSET=utf8;

-- Dumping data for table schedule.day: ~6 rows (approximately)
/*!40000 ALTER TABLE `day` DISABLE KEYS */;
INSERT INTO `day` (`id`, `name`) VALUES
	(5, 'вторник'),
	(1, 'понедельник'),
	(17, 'пятница'),
	(9, 'среда'),
	(21, 'суббота'),
	(13, 'четверг');
/*!40000 ALTER TABLE `day` ENABLE KEYS */;

-- Dumping structure for table schedule.group
CREATE TABLE IF NOT EXISTS `group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` int(11) DEFAULT NULL,
  `speciality_id` int(11) NOT NULL,
  `number` int(11) NOT NULL,
  `students` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `group_to_speciality_idx` (`speciality_id`),
  KEY `group_to_course_idx` (`course_id`),
  CONSTRAINT `group_to_course` FOREIGN KEY (`course_id`) REFERENCES `course` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `group_to_speciality` FOREIGN KEY (`speciality_id`) REFERENCES `speciality` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table schedule.group: ~0 rows (approximately)
/*!40000 ALTER TABLE `group` DISABLE KEYS */;
/*!40000 ALTER TABLE `group` ENABLE KEYS */;

-- Dumping structure for table schedule.lecturer
CREATE TABLE IF NOT EXISTS `lecturer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table schedule.lecturer: ~0 rows (approximately)
/*!40000 ALTER TABLE `lecturer` DISABLE KEYS */;
/*!40000 ALTER TABLE `lecturer` ENABLE KEYS */;

-- Dumping structure for table schedule.room
CREATE TABLE IF NOT EXISTS `room` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `number` char(10) NOT NULL,
  `type_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `number_UNIQUE` (`number`),
  KEY `room_to_type_idx` (`type_id`),
  CONSTRAINT `room_to_type` FOREIGN KEY (`type_id`) REFERENCES `type` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=357 DEFAULT CHARSET=utf8;

-- Dumping data for table schedule.room: ~42 rows (approximately)
/*!40000 ALTER TABLE `room` DISABLE KEYS */;
INSERT INTO `room` (`id`, `number`, `type_id`) VALUES
	(1, '521', 1),
	(5, '255', 5),
	(6, '256', 6),
	(7, '240', 7),
	(8, 'м 506', 5),
	(9, 'м 604', 6),
	(10, '517', 5),
	(11, '255-б', 6),
	(14, '248-а', 5),
	(15, '520', 6),
	(16, '255 а', 5),
	(17, '253', 6),
	(20, 'м 505', 5),
	(21, 'м 507', 6),
	(23, '518', 7),
	(25, '519', 6),
	(28, 'м 508', 6),
	(29, '248', 5),
	(30, '249', 6),
	(33, '257', 7),
	(34, '255-а', 5),
	(43, '607', 1),
	(46, '605', 1),
	(49, '250', 7),
	(50, '234', 7),
	(51, '513', 5),
	(52, '522', 6),
	(56, '314', 5),
	(60, 'м 314', 5),
	(73, '338', 5),
	(74, '345', 6),
	(81, '300-а', 5),
	(82, '300-б', 6),
	(85, '334', 5),
	(86, '334’', 6),
	(120, 'м  604', 6),
	(125, '600-г', 5),
	(126, '600-в', 6),
	(130, 'м 608', 6),
	(139, '600-б', 7),
	(213, ' м 608', 6),
	(253, 'м 314/520', 6);
/*!40000 ALTER TABLE `room` ENABLE KEYS */;

-- Dumping structure for table schedule.speciality
CREATE TABLE IF NOT EXISTS `speciality` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(40) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table schedule.speciality: ~0 rows (approximately)
/*!40000 ALTER TABLE `speciality` DISABLE KEYS */;
/*!40000 ALTER TABLE `speciality` ENABLE KEYS */;

-- Dumping structure for table schedule.subject
CREATE TABLE IF NOT EXISTS `subject` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` char(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3872 DEFAULT CHARSET=utf8;

-- Dumping data for table schedule.subject: ~43 rows (approximately)
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
INSERT INTO `subject` (`id`, `name`) VALUES
	(1885, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'),
	(1877, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'),
	(1864, '!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'),
	(1772, 'А и ТЧ'),
	(1773, 'А иТЧ'),
	(1702, 'Алгебра и теория чисел'),
	(1699, 'Англ.  яз.'),
	(1503, 'Англ. яз'),
	(1860, 'Англ. яз нач. (Ф)'),
	(1504, 'Англ. яз.'),
	(1798, 'Англ. яз. (Ф)'),
	(1605, 'Англ. яз. (ф) до'),
	(1876, 'Англ. Яз. Нач. (Ф)'),
	(1875, 'Англ. Яз.(ф)'),
	(1598, 'Англ.яз'),
	(1545, 'Англ.яз.'),
	(1602, 'Англ.яз.(ф)'),
	(1632, 'Бел. Яз'),
	(1635, 'Бел. Яз.'),
	(1627, 'Введение в IT (до 18.04)'),
	(1629, 'Введение в IT (до18.04)'),
	(1491, 'ГА'),
	(1587, 'ГА (ф)'),
	(1511, 'ГА(ф)'),
	(1490, 'Геометрия и алгебра'),
	(1592, 'Дискретная математика и Математическая логика'),
	(1695, 'ДМ и МЛ'),
	(1522, 'ДМиМЛ'),
	(1499, 'МА'),
	(1676, 'МА (ф)'),
	(1512, 'МА(Ф)'),
	(1535, 'Математический анализ'),
	(1513, 'Прогр.'),
	(1693, 'Прогр. (1/2)'),
	(1516, 'Прогр.(1/2)'),
	(1551, 'Программирование'),
	(1588, 'Программирование (1/2)'),
	(1837, 'ТГ'),
	(1835, 'Теория графов'),
	(1492, 'УП'),
	(1711, 'УП (Л)'),
	(1747, 'Учебная практика'),
	(1532, 'Физическая культура');
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;

-- Dumping structure for table schedule.time
CREATE TABLE IF NOT EXISTS `time` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `start` time(4) NOT NULL,
  `end` time(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Dumping data for table schedule.time: ~0 rows (approximately)
/*!40000 ALTER TABLE `time` DISABLE KEYS */;
/*!40000 ALTER TABLE `time` ENABLE KEYS */;

-- Dumping structure for table schedule.type
CREATE TABLE IF NOT EXISTS `type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=1589 DEFAULT CHARSET=utf8;

-- Dumping data for table schedule.type: ~4 rows (approximately)
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` (`id`, `name`) VALUES
	(1, '0'),
	(7, '1'),
	(5, '2.1'),
	(6, '2.2');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
