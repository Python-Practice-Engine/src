describe("Tests on the Questions Table", () => {
    test("print statements is easy", done => {
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

    test("the second question is variables", done => {
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
});

