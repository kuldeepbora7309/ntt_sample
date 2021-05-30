/*

SQLyog Ultimate v8.55 
MySQL - 5.5.5-10.1.21-MariaDB : Database - office_rent

*********************************************************************

*/



/*!40101 SET NAMES utf8 */;



/*!40101 SET SQL_MODE=''*/;



/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`office_rent` /*!40100 DEFAULT CHARACTER SET latin1 */;



USE `office_rent`;



/*Table structure for table `office_furnitures` */



DROP TABLE IF EXISTS `office_furnitures`;



CREATE TABLE `office_furnitures` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `office_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=latin1;



/*Data for the table `office_furnitures` */



insert  into `office_furnitures`(`id`,`office_id`,`name`,`created`,`modified`) values (1,1,'printer','0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,2,'projector','0000-00-00 00:00:00','0000-00-00 00:00:00'),(3,3,'intercoms','0000-00-00 00:00:00','0000-00-00 00:00:00'),(4,4,'whiteboards','0000-00-00 00:00:00','0000-00-00 00:00:00'),(5,1,'chairs','2021-05-29 07:01:44','2021-05-29 07:01:44'),(6,1,'fan','2021-05-29 13:04:49','2021-05-29 13:04:49'),(7,1,'fan2','2021-05-29 13:08:55','2021-05-29 13:08:55'),(8,1,'fan3','2021-05-29 13:09:00','2021-05-29 13:09:00'),(9,4,'fan','2021-05-29 13:11:22','2021-05-29 13:11:22'),(10,0,'chair','2021-05-30 06:15:51','2021-05-30 06:15:51'),(11,0,'chair','2021-05-30 06:16:05','2021-05-30 06:16:05'),(12,1,'chairs','2021-05-30 06:18:23','2021-05-30 06:18:23'),(13,1,'lights','2021-05-30 06:22:21','2021-05-30 06:22:21'),(14,1,'test','2021-05-30 06:40:29','2021-05-30 06:40:29');



/*Table structure for table `office_pics` */



DROP TABLE IF EXISTS `office_pics`;



CREATE TABLE `office_pics` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `office_id` int(11) NOT NULL,
  `pic_url` text NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;



/*Data for the table `office_pics` */



insert  into `office_pics`(`id`,`office_id`,`pic_url`,`created`,`modified`) values (1,1,'https://picsum.photos/200/300?random=1','0000-00-00 00:00:00','2021-05-29 16:30:08'),(2,1,'https://picsum.photos/200/300?random=2','0000-00-00 00:00:00','2021-05-29 16:30:57'),(3,1,'https://picsum.photos/200/300?random=3','0000-00-00 00:00:00','2021-05-29 16:31:00'),(4,1,'https://picsum.photos/200/300?random=4','0000-00-00 00:00:00','2021-05-29 16:31:03'),(5,2,'https://picsum.photos/200/300?random=5','0000-00-00 00:00:00','2021-05-29 16:31:07'),(6,2,'https://picsum.photos/200/300?random=6','0000-00-00 00:00:00','2021-05-29 16:31:11'),(7,3,'https://picsum.photos/200/300?random=7','0000-00-00 00:00:00','2021-05-29 16:31:14'),(8,3,'https://picsum.photos/200/300?random=8','0000-00-00 00:00:00','2021-05-29 16:31:17'),(9,4,'https://picsum.photos/200/300?random=9','0000-00-00 00:00:00','2021-05-29 16:31:21'),(10,4,'https://picsum.photos/200/300?random=10','0000-00-00 00:00:00','2021-05-29 16:31:26');



/*Table structure for table `offices` */



DROP TABLE IF EXISTS `offices`;



CREATE TABLE `offices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `space` varchar(100) NOT NULL,
  `floor` tinyint(11) NOT NULL,
  `location` text NOT NULL,
  `rent` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;



/*Data for the table `offices` */



insert  into `offices`(`id`,`space`,`floor`,`location`,`rent`,`created`,`modified`) values (1,'5000',4,'test location 1',100,'2021-05-29 13:58:04','2021-05-29 11:07:23'),(2,'10000',8,'test location 2',200,'2021-05-29 13:58:04','2021-05-29 11:07:23'),(3,'15000',12,'test location 3',300,'2021-05-29 13:58:04','2021-05-29 11:07:23'),(4,'20000',16,'test location 4',400,'2021-05-29 13:58:04','2021-05-29 11:07:23'),(5,'18000',3,'test location 5\r\n',900,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(6,'22000',12,'test location 6\r\n',300,'0000-00-00 00:00:00','0000-00-00 00:00:00');



/*Table structure for table `package_offices` */



DROP TABLE IF EXISTS `package_offices`;



CREATE TABLE `package_offices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `package_id` int(11) NOT NULL,
  `office_id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1;



/*Data for the table `package_offices` */



insert  into `package_offices`(`id`,`package_id`,`office_id`,`created`,`modified`) values (1,1,1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,1,2,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(3,2,3,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(4,2,4,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(5,3,1,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(6,3,4,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(7,4,5,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(8,4,6,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(16,19,1,'2021-05-30 06:35:14','2021-05-30 06:35:14'),(17,19,3,'2021-05-30 06:35:14','2021-05-30 06:35:14');



/*Table structure for table `packages` */



DROP TABLE IF EXISTS `packages`;



CREATE TABLE `packages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `lease_type` enum('long','short') NOT NULL DEFAULT 'short',
  `lease_duration` varchar(55) NOT NULL,
  `rent_package` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `modified` datetime NOT NULL DEFAULT '0000-00-00 00:00:00' ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;



/*Data for the table `packages` */



insert  into `packages`(`id`,`lease_type`,`lease_duration`,`rent_package`,`created`,`modified`) values (1,'short','monthly',350,'0000-00-00 00:00:00','0000-00-00 00:00:00'),(2,'long','5',500,'0000-00-00 00:00:00','2021-05-29 13:37:18'),(3,'short','quarterly',700,'0000-00-00 00:00:00','2021-05-29 13:12:42'),(4,'long','10',5500,'0000-00-00 00:00:00','2021-05-29 13:55:37'),(19,'short','half yearly',9999,'2021-05-30 06:35:14','2021-05-30 06:35:14');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

