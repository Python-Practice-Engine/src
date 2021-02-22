use pythonlearning;
 
 #Q1
INSERT INTO Questions (Qid, name, description, tags, question, difficulty, Tid) VALUES (1, 'Hello to the world of coding!', 'This question focuses on the topic of print statements in Python.', 'PrintStatement', 'Write could which will print the following statement: “Hello world, here I am!”.', 'easy', 1);
INSERT INTO Testcases (TCid, test, Qid) VALUES (1, 'If you see “Hello world, here I am!” displayed on your screen, you have passed the test cases.', 1);

 #Q2
INSERT INTO Questions (Qid, name, description, tags, question, difficulty, Tid) VALUES (2, 'So...What is the value of x?', 'This question focuses on the topic of variables.', 'Variables', 'Create a variable called x and assign it the value of “Hello world, here I am!”. Then print that x variable.', 'easy', 2);
INSERT INTO Testcases (TCid, test, Qid) VALUES (2, 'If you see “Hello world, here I am!” displayed on your screen, you have passed the test cases.', 2);

 #Q3
INSERT INTO Questions (Qid, name, description, tags, question, difficulty, Tid) VALUES (3, 'Integers and floats and numbers...oh my!', 'This question focuses on the topic of number types in Python.', 'Numbers', 'In the same way you used Python’s built-in function print(), now we are going to use the python’s built-in function type(). type() is another built-in function that can tell us the “type” of a thing in Python. Use the print statement to print the type of 2 and repeat this for the type of 2.0.', 'easy', 3);
INSERT INTO Testcases (TCid, test, code, Qid) VALUES (3, "If you see <class 'int'>, <class 'float'> You have passed the test cases.", '\nprint(type(2))\nprint(type(2.0))\n', 3);
