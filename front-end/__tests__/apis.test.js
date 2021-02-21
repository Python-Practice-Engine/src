var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

var mock = new MockAdapter(axios);
// Followed this documentation: https://github.com/ctimmerm/axios-mock-adapter

describe("Gets question 1", () => {
    test("it should get question 1", () => {
        // arguments for reply are (status, data, headers)
        mock.onGet('http://localhost:3001/questions/1').reply(200, {
            data: [
              {
                Qid: 1,
                Tid: 1,
                description: `
                  This question focuses on the topic of 
                  print statements in Python.
                `,
                difficulty: "easy",
                name: "Hello to the world of coding!",
                question: `
                  Write could which will print the following statement: 
                  “Hello world, here I am!”.
                `,
                tags: "PrintStatement",
              },
            ],
          });
  
    });
  });
