use pythonlearning;

CREATE TABLE Tutorials (
	Tid INT NOT NULL AUTO_INCREMENT,
	description VARCHAR(1000) NOT NULL,
	code VARCHAR(100),
	PRIMARY KEY ( Tid )
);

CREATE TABLE Questions (
	Qid INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(40) NOT NULL,
	tags VARCHAR(50) NOT NULL,
	description VARCHAR(1000) NOT NULL,
	difficulty ENUM('easy','medium','hard'),
	Tid INT,
	PRIMARY KEY ( Qid ),
	FOREIGN KEY ( Tid ) REFERENCES Tutorials(Tid)
);

CREATE TABLE Testcases (
	TCid INT NOT NULL AUTO_INCREMENT,
	code VARCHAR(100),
	Qid INT NOT NULL,
	PRIMARY KEY ( TCid ),
	FOREIGN KEY (Qid) REFERENCES Questions(Qid)
);

