//server.js
const app = require("./app.js");
// import {checkBrowserSupport, checkLocalStorage} from './Concept-Map/localStorage.js';
const localStorage = require("./Concept-Map/localStorage.js");

if (!localStorage.checkBrowserSupport) {
  console.log("No local storage support on the current browser please switch to supported browser");
}

// checkLocalStorage();

app.listen(3001, () => {
  console.log("running on port 3001");
});
