-- Drop Tables

DROP TABLE IF EXISTS `question_concept`;
DROP TABLE IF EXISTS `question_prereq_concept`;
DROP TABLE IF EXISTS `user_concept`;
DROP TABLE IF EXISTS `user_question`;
DROP TABLE IF EXISTS `user`;
DROP TABLE IF EXISTS `concept`;
DROP TABLE IF EXISTS `question`;

-- Create Tables

CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `concept` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `level` int DEFAULT NULL,
  `tutorial` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `question` (
  `id` int NOT NULL AUTO_INCREMENT,
  `description` varchar(1000) DEFAULT NULL,
  `title` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `question_concept` (
  `question_id` int NOT NULL,
  `concept_id` int NOT NULL,
  PRIMARY KEY (`question_id`,`concept_id`),
  KEY `question_concept_concept_id_fkey_idx` (`concept_id`),
  CONSTRAINT `question_concept_concept_id_fkey` FOREIGN KEY (`concept_id`) REFERENCES `concept` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `question_concept_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `question_prereq_concept` (
  `question_id` int NOT NULL,
  `prereq_concept_id` int NOT NULL,
  PRIMARY KEY (`question_id`,`prereq_concept_id`),
  KEY `question_prereq_concept_concept_id_fkey_idx` (`prereq_concept_id`),
  CONSTRAINT `question_prereq_concept_concept_id_fkey` FOREIGN KEY (`prereq_concept_id`) REFERENCES `concept` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `question_prereq_concept_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `user_concept` (
  `user_id` int NOT NULL,
  `concept_id` int NOT NULL,
  `completed` tinyint DEFAULT NULL,
  PRIMARY KEY (`user_id`,`concept_id`),
  KEY `user_concept_concept_id_fkey_idx` (`concept_id`),
  CONSTRAINT `user_concept_concept_id_fkey` FOREIGN KEY (`concept_id`) REFERENCES `concept` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_concept_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `user_question` (
  `user_id` int NOT NULL,
  `question_id` int NOT NULL,
  `completed` tinyint DEFAULT NULL,
  PRIMARY KEY (`user_id`,`question_id`),
  KEY `user_question_question_id_fkey_idx` (`question_id`),
  CONSTRAINT `user_question_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `question` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `user_question_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Insert Data

LOCK TABLES `user` WRITE;
INSERT INTO `user` (`id`, `email`) VALUES (1,'user1@example.com'),(2,'user2@example.com');
UNLOCK TABLES;

SET SESSION sql_mode='NO_AUTO_VALUE_ON_ZERO';
LOCK TABLES `concept` WRITE;
INSERT INTO `concept` (`id`, `name`, `level`) 
VALUES (0,'start',0),(1,'print',1),(2,'data_types',1),(3,'data_types',2),(4,'data_types',3),(5,'variables',1),(6,'variables',2),(7,'variables',3),(8,'variables',4),(9,'comparison_operators',1),(10,'logical_operators',1),(11,'arithmetic_operators',1),(12,'if_else',1),(13,'if_else',2),(14,'while_loops',1);
UNLOCK TABLES;
SET SESSION sql_mode='';

LOCK TABLES `question` WRITE;
INSERT INTO `question` (`id`, `description`, `title`) VALUES (1,'Write code which will print the following statement: \"Hello world, here I am!\".','Hello to the world of coding!'),(2,'In the same way you used Python’s built-in function print(), now we are going to use the python’s built-in function type() which will help us determine the “type” of data we are looking at. Use the print and type functions to see what type of data “Hello world!” is. You should see <type ‘str’> which tells us that this is a string data type. Strings in python can be surrounded by double quotes or single quotes. There are several other data types in python which we will explore.','What is \"Hello world!\"?'),(3,'Create a variable called x and assign it the value of “Hello world!”. Then print that x variable. Note that there are no declarations in python, meaning you can’t just have “x” on it’s own; you must assign a value to “x”.','So...What is the value of x?'),(4,'Aside from strings, there are several other kinds of data in python. Use the print and type functions to print the type of the following pieces of data(, each on a new line|| not necessary correcting in branch):\n\n2\n5.5\nTrue\n\nThese are the most common data types you will use: int (integer), float (floating point number), and bool (boolean). You will be learning a lot more about these data types and even more data types in the coming questions.','The Different Kinds of Data'),(5,'Now that you’ve learned about int, bool, string, and float, try storing each in a different variable and printing them out. Store the following pieces of data using variables a, b, c, d and then print them out:\n\n1\n5.0\nFalse\n“Goodbye”\n\nThe types of the variables are the same as the values they are assigned. You can check this out by using the type() function!\n','Storing Various Data in Variables');
UNLOCK TABLES;

LOCK TABLES `question_concept` WRITE;
INSERT INTO `question_concept` (`question_id`, `concept_id`) VALUES (1,1),(2,2),(4,3),(3,5),(5,6);
UNLOCK TABLES;

LOCK TABLES `question_prereq_concept` WRITE;
INSERT INTO `question_prereq_concept` (`question_id`, `prereq_concept_id`) VALUES (1,0),(2,1),(3,1),(4,2),(5,5);
UNLOCK TABLES;

LOCK TABLES `user_concept` WRITE;
INSERT INTO `user_concept` (`user_id`, `concept_id`, `completed`) VALUES (1,0,1),(1,1,1),(1,2,0),(1,3,0),(1,4,0),(1,5,0),(1,6,0),(1,7,0),(1,8,0),(1,9,0),(1,10,0),(1,11,0),(1,12,0),(1,13,0),(1,14,0),(2,0,1),(2,1,0),(2,2,0),(2,3,0),(2,4,0),(2,5,0),(2,6,0),(2,7,0),(2,8,0),(2,9,0),(2,10,0),(2,11,0),(2,12,0),(2,13,0),(2,14,0);
UNLOCK TABLES;

LOCK TABLES `user_question` WRITE;
INSERT INTO `user_question` (`user_id`, `question_id`, `completed`) VALUES (1,1,1),(1,2,0),(1,3,0),(1,4,0),(1,5,0),(2,1,0),(2,2,0),(2,3,0),(2,4,0),(2,5,0);
UNLOCK TABLES;