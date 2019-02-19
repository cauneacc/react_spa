-- MySQL dump 10.13  Distrib 5.7.24, for Linux (i686)
--
-- Host: localhost    Database: netzinkubator_spa
-- ------------------------------------------------------
-- Server version	5.7.24-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `calendar`
--

DROP TABLE IF EXISTS `calendar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `calendar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `data` text NOT NULL,
  `email` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `calendar`
--

LOCK TABLES `calendar` WRITE;
/*!40000 ALTER TABLE `calendar` DISABLE KEYS */;
INSERT INTO `calendar` VALUES (1,'[{\"dateId\":0,\"isEditable\":true,\"text\":\"aaa 0 asdadf\",\"isHighlighted\":false,\"dateText\":\"Mon Nov 05 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"},{\"dateId\":1,\"isEditable\":true,\"text\":\"aaa 1\",\"isHighlighted\":false,\"dateText\":\"Tue Nov 06 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"},{\"dateId\":2,\"isEditable\":true,\"text\":\"aaa 2\",\"isHighlighted\":false,\"dateText\":\"Wed Nov 07 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"},{\"dateId\":3,\"isEditable\":true,\"text\":\"aaa 3\",\"isHighlighted\":true,\"dateText\":\"Thu Nov 08 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"},{\"dateId\":4,\"isEditable\":false,\"text\":\"\",\"isHighlighted\":false,\"dateText\":\"Fri Nov 09 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"},{\"dateId\":5,\"isEditable\":false,\"text\":\"\",\"isHighlighted\":false,\"dateText\":\"Sat Nov 10 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"},{\"dateId\":6,\"isEditable\":false,\"text\":\"\",\"isHighlighted\":false,\"dateText\":\"Sun Nov 11 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"},{\"dateId\":7,\"isEditable\":false,\"text\":\"\",\"isHighlighted\":false,\"dateText\":\"Mon Nov 12 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"},{\"dateId\":8,\"isEditable\":false,\"text\":\"\",\"isHighlighted\":false,\"dateText\":\"Tue Nov 13 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"},{\"dateId\":9,\"isEditable\":false,\"text\":\"\",\"isHighlighted\":false,\"dateText\":\"Wed Nov 14 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"}]','test@yahoo.com'),(2,'[{\"dateId\":0,\"isEditable\":true,\"text\":\"aaa 0 asdadf\",\"isHighlighted\":false,\"dateText\":\"Mon Nov 05 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"},{\"dateId\":1,\"isEditable\":true,\"text\":\"aaa 1\",\"isHighlighted\":false,\"dateText\":\"Tue Nov 06 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"},{\"dateId\":2,\"isEditable\":true,\"text\":\"\",\"isHighlighted\":false,\"dateText\":\"Wed Nov 07 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"},{\"dateId\":3,\"isEditable\":true,\"text\":\"aaa 3\",\"isHighlighted\":true,\"dateText\":\"Thu Nov 08 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"},{\"dateId\":4,\"isEditable\":false,\"text\":\"\",\"isHighlighted\":false,\"dateText\":\"Fri Nov 09 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"},{\"dateId\":5,\"isEditable\":false,\"text\":\"\",\"isHighlighted\":false,\"dateText\":\"Sat Nov 10 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"},{\"dateId\":6,\"isEditable\":false,\"text\":\"\",\"isHighlighted\":false,\"dateText\":\"Sun Nov 11 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"},{\"dateId\":7,\"isEditable\":false,\"text\":\"\",\"isHighlighted\":false,\"dateText\":\"Mon Nov 12 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"},{\"dateId\":8,\"isEditable\":false,\"text\":\"\",\"isHighlighted\":false,\"dateText\":\"Tue Nov 13 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"},{\"dateId\":9,\"isEditable\":false,\"text\":\"\",\"isHighlighted\":false,\"dateText\":\"Wed Nov 14 2018 00:00:00 GMT+0200 (Eastern European Standard Time)\"}]','email2@email.com');
/*!40000 ALTER TABLE `calendar` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-09  8:22:47
