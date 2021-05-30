/*

SQLyog Ultimate v8.55 
MySQL - 5.5.5-10.1.21-MariaDB : Database - atm

*********************************************************************

*/



/*!40101 SET NAMES utf8 */;



/*!40101 SET SQL_MODE=''*/;



/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;

/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

CREATE DATABASE /*!32312 IF NOT EXISTS*/`atm` /*!40100 DEFAULT CHARACTER SET latin1 */;



USE `atm`;



/*Table structure for table `balances` */



DROP TABLE IF EXISTS `balances`;



CREATE TABLE `balances` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `current_balance` int(20) NOT NULL,
  `currency_2000` int(15) NOT NULL DEFAULT '0',
  `currency_500` int(25) NOT NULL DEFAULT '0',
  `currency_200` int(11) NOT NULL DEFAULT '0',
  `currency_100` int(11) NOT NULL DEFAULT '0',
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;



/*Data for the table `balances` */



insert  into `balances`(`id`,`current_balance`,`currency_2000`,`currency_500`,`currency_200`,`currency_100`,`created`,`modified`) values (1,50000,15,25,22,31,'2021-05-30 00:00:00','2021-05-30 11:37:45');



/*Table structure for table `users` */



DROP TABLE IF EXISTS `users`;



CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `auth_token` varchar(255) DEFAULT NULL,
  `otp` varchar(300) DEFAULT NULL,
  `name` varchar(300) NOT NULL,
  `account_number` varchar(100) NOT NULL,
  `pin_number` int(11) NOT NULL,
  `current_balance` int(11) DEFAULT '0',
  `created` datetime DEFAULT NULL,
  `modified` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;



/*Data for the table `users` */



insert  into `users`(`id`,`auth_token`,`otp`,`name`,`account_number`,`pin_number`,`current_balance`,`created`,`modified`) values (1,'5wnznna7fc',NULL,'Kuldeep HDFC','999999999',9990,20000,'2019-05-06 10:58:08','2021-05-30 11:37:45'),(2,NULL,NULL,'Kuldeep ICICI','888888888',2222,7000,'2021-05-30 00:00:00','2021-05-30 11:25:44');



/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;

/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;

/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

