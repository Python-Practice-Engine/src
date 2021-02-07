// QUESTIONS TABLE TEST CASES
describe("Tests on the Questions Table", () => {
    // TEST #1
    test("print statements is easy difficulty", done => {
      const query = global.db.query(
        "SELECT * FROM Questions WHERE tags='PrintStatement'",
        (error, results, fields) => {
          if (error) {
            throw error;
          }
          expect(results).toHaveLength(1);
          expect(results[0].difficulty).toEqual("easy");
          expect(results[0].Qid).toEqual(1);
          done();
        }
      );
    });

    // TEST #2
    test("the second question is about variables", done => {
      const query = global.db.query(
        "SELECT * FROM Questions WHERE Qid=2",
        (error, results, fields) => {
          if (error) {
            throw error;
          }
          expect(results).toHaveLength(1);
          expect(results[0].tags).toEqual("Variables");
          done();
        }
      );
    }); 

    // TEST #3
    test("the third question is about numbers", done => {
      const query = global.db.query(
        "SELECT * FROM Questions WHERE Qid=3",
        (error, results, fields) => {
          if (error) {
            throw error;
          }
          expect(results).toHaveLength(1);
          expect(results[0].tags).toEqual("Numbers");
          expect(results[0].Qid).toEqual(3);
          done();
        }
      );
    });

    // TEST #4
    test("each question has a tutorial", done => {
      const query = global.db.query(
        "SELECT * FROM Questions",
        (error, results, fields) => {
          if (error) {
            throw error;
          }
          for (const i in results) {
            expect(results[i].Tid).toEqual(expect.any(Number));
          }
          done();
        }
      );
    });
});

// TUTORIALS TABLE TEST CASES
describe("Tests on the Tutorials Table", () => {
    // TEST #1
    test("all tutorials have a Tid, name, and description", done => {
      const query = global.db.query(
        "SELECT * FROM Tutorials",
        (error, results, fields) => {
          if (error) {
            throw error;
          }
          for (const i in results) {
            expect(results[i].Tid).toBeGreaterThan(0);
            expect(results[i].name).toEqual(expect.any(String));
            expect(results[i].description).toEqual(expect.any(String));
          }
          done();
        }
      );
    });

    // TEST #2
    test("Tutorials and Questions correspond 1-1 to each other", done => {
      const query = global.db.query(
        "SELECT * FROM Tutorials, Questions",
        (error, results, fields) => {
          if (error) {
            throw error;
          }
          for (const i in results) {
            expect(results[i].Tid).toEqual(results[i].Qid);
          }
          done();
        }
      );
    });
});

// TESTCASES TABLE TEST CASES
describe("Tests on the Testcases Table", () => {
    // TEST #1
    test("print statement test case code actually uses the print function", done => {
      const query = global.db.query(
        "SELECT code FROM Testcases, Questions WHERE Questions.tags='PrintStatement' AND Testcases.TCid=Questions.Qid",
        (error, results, fields) => {
          if (error) {
            throw error;
          }
          expect(results).toHaveLength(1);
          expect(results[0].code).toMatch(new RegExp('print(.*)'));
          done();
        }
      );
    });

    // TEST #2
    test("there exists a test case for each question", done => {
      const query = global.db.query(
        "SELECT TCid,Testcases.Qid FROM Testcases, Questions",
        (error, results, fields) => {
          if (error) {
            throw error;
          }
          for (const i in results) {
            expect(results[i].TCid).toBeGreaterThan(0);
          }
          done();
        }
      );
    });
});