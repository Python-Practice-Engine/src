describe("Tests on the Questions Table", () => {
    test("print statements is easy difficulty", done => {
      const users = global.db.query(
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

    test("the second question is about variables", done => {
      const users = global.db.query(
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

    test("the third question is about numbers", done => {
      const users = global.db.query(
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

    test("each question has a tutorial", done => {
      const users = global.db.query(
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

describe("Tests on the Tutorials Table", () => {
    test("all tutorials have a Tid, name, and description", done => {
      const users = global.db.query(
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

    
});

describe("Tests on the Testcases Table", () => {
    test("", done => {
      const users = global.db.query(
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

    
});