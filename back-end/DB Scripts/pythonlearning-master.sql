use pythonlearning;

# CLEAN TABLES
DROP TABLE Testcases;
DROP TABLE Questions;
DROP TABLE Tutorials;

# CREATE TABLES
CREATE TABLE Tutorials (
	Tid INT NOT NULL,
	name VARCHAR(100) NOT NULL,
	description VARCHAR(2000) NOT NULL,
	code VARCHAR(1000),
	PRIMARY KEY ( Tid )
);

CREATE TABLE Questions (
	Qid INT NOT NULL,
	name VARCHAR(40) NOT NULL,
	tags VARCHAR(50) NOT NULL,
	question VARCHAR(1000) NOT NULL,
	description VARCHAR(2000) NOT NULL,
	difficulty ENUM('easy','medium','hard'),
	Tid INT,
	PRIMARY KEY ( Qid ),
	FOREIGN KEY ( Tid ) REFERENCES Tutorials(Tid)
);

CREATE TABLE Testcases (
	TCid INT NOT NULL,
	test VARCHAR(1000) NOT NULL,
	code VARCHAR(1000) NOT NULL,
	Qid INT NOT NULL,
	PRIMARY KEY ( TCid ),
	FOREIGN KEY (Qid) REFERENCES Questions(Qid)
);

# INSERT DATA

INSERT INTO Tutorials (Tid, name, description) VALUES (1, 'Print Statements', 'This question is asking you to use Python’s built-in function print(). Functions are a topic that will be covered later on, but for now all you need to know is that Python has some built-in functions which take some input between the brackets and can perform some operations. print() is one of those built-in functions. Whatever you put in between the brackets of a print statement will be displayed on the screen. For example, if you write print(2) you should see a 2 appear on the screen. An important note is that any letters or words need to be surrounded by quotes. We will dive into the reason for quotes around words later on, but for now always wrap words and letters with quotes. For example, print("Sally") the word Sally will be displayed. The built-in print function is often used by beginners and experts alike to debug code and is an important tool in your toolkit.');
INSERT INTO Tutorials (Tid, name, description) VALUES (2, 'Variables', 'So what are variables exactly? Variables are something you might be familiar with from taking math classes in high school. In math we use variables to denote a value we know exists, but we do not know what it is just yet. For example, it is common to see statements like 4 + x = 9 in math. We do not yet know the value of x, so we call it x. Until we do some rearranging and find out that x = 5. In programming we also use variables, but we use them slightly differently than we do in math. In programming we assign variables a specific value and then we refer to that variable within the rest of our code. For example, what if I want to print supercalifragilistic 15 times it is a little annoying to keep typing out supercalifragilistic. Instead I could assign a variable x the value of supercalifragilistic, like so x = "supercalifragilistic" and then just write print(x) fifteen times. Basically in programming we use variables to make our lives easier and to not have to repeat the same thing over and over. We assign the variables their value, so it is not like it is in math where you are typically looking for the value of x. There are a few important rules that Python has about variables. Python variables rules: Variables must start with a letter or underscore (i.e. x, _x, or xyz are all valid variable names), Variables cannot start with a number or be just a number (i.e. these are not valid variable names 1 or 1x), Variables names are case-sensitive, so x and X are considered different variables, Variable names cannot contain spaces (i.e. xyz is a valid variable name, but x y z is not), Variable names can only contain numbers, letters, or an underscore (i.e. x, xyz, variable_name, _x, x2, hey2 are all valid variable names, but 1, 1x, x&, x! Are all invalid variable names).');
INSERT INTO Tutorials (Tid, name, description) VALUES (3, 'Numbers', 'Programming languages are not very smart, they need to be explicitly told that something like 2 is a number. Not only do they need to be told that 2 is a number they need to be told what kind of number 2 is. As you may recall from math class there are different types of numbers. There are Integers which are whole numbers and there are decimal numbers. Of course there are more types of numbers than just whole numbers or decimal numbers, but for our purposes we will just focus on these two. In Python whole numbers are called integers and decimal numbers are called float numbers. Once again, since Python is not nearly as smart as you, so it does not realize that 1 and 1.0 are actually the same number. If you were to write the following code:print(type(1));print(type(1.0));. You will notice that 1 is of the type integer and 1.0 is the type float.');
INSERT INTO Tutorials (Tid, name, description) VALUES (-1, 'Not Found', 'The requested question can not be found or does not exist.');

INSERT INTO Questions (Qid, name, description, tags, question, difficulty, Tid) VALUES (-1, 'Question Not Found', 'The requested question can not be found or does not exist.', 'Not Found', '', 'easy', -1);
INSERT INTO Testcases (TCid, test, code, Qid) VALUES (-1, 'Question Not Found', '', -1);


 #Q1
INSERT INTO Questions (Qid, name, description, tags, question, difficulty, Tid) VALUES (1, 'Hello to the world of coding!', 'This question focuses on the topic of print statements in Python.', 'PrintStatement', 'Write could which will print the following statement: "Hello world, here I am!".', 'easy', 1);
INSERT INTO Testcases (TCid, test, code, Qid) VALUES (1, 'If you see "Hello world, here I am!" displayed on your screen, you have passed the test cases.', '\nprint(\\"Hello world, here I am!\\")\n', 1);

 #Q2
INSERT INTO Questions (Qid, name, description, tags, question, difficulty, Tid) VALUES (2, 'So...What is the value of x?', 'This question focuses on the topic of variables.', 'Variables', 'Create a variable called x and assign it the value of "Hello world, here I am!". Then print that x variable.', 'easy', 2);
INSERT INTO Testcases (TCid, test, code, Qid) VALUES (2, 'If you see "Hello world, here I am!" displayed on your screen, you have passed the test cases.', '\nx = \\"Hello world, here I am!\\"\nprint(x)\n', 2);

 #Q3
INSERT INTO Questions (Qid, name, description, tags, question, difficulty, Tid) VALUES (3, 'Integers and floats and numbers...oh my!', 'This question focuses on the topic of number types in Python.', 'Numbers', 'In the same way you used Python’s built-in function print(), now we are going to use the Python’s built-in function type(). type() is another built-in function that can tell us the "type" of a thing in Python. Use the print statement to print the type of 2 and repeat this for the type of 2.0 on a separate line.', 'easy', 3);
INSERT INTO Testcases (TCid, test, code, Qid) VALUES (3, "If you see <class 'int'>, <class 'float'> You have passed the test cases.", '\nprint(type(2))\nprint(type(2.0))\n', 3);
