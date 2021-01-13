use pythonlearning;

CREATE TABLE Tutorials (
	Tid INT NOT NULL,
	name VARCHAR(40) NOT NULL,
	description VARCHAR(2000) NOT NULL,
	code VARCHAR(100),
	PRIMARY KEY ( Tid )
);

CREATE TABLE Questions (
	Qid INT NOT NULL,
	name VARCHAR(40) NOT NULL,
	tags VARCHAR(50) NOT NULL,
	question VARCHAR(300) NOT NULL,
	description VARCHAR(1000) NOT NULL,
	difficulty ENUM('easy','medium','hard'),
	Tid INT,
	PRIMARY KEY ( Qid ),
	FOREIGN KEY ( Tid ) REFERENCES Tutorials(Tid)
);

CREATE TABLE Testcases (
	TCid INT NOT NULL,
	test VARCHAR(200) NOT NULL,
	code VARCHAR(200) NOT NULL,
	Qid INT NOT NULL,
	PRIMARY KEY ( TCid ),
	FOREIGN KEY (Qid) REFERENCES Questions(Qid)
);

