var LocalStorage = require('node-localstorage').LocalStorage;
localStorage = new LocalStorage('./scratch');


// checking if user browser supports local storage
exports.checkBrowserSupport = () => {
    if (typeof(Storage) !== "undefined") {
        return true;
    } else {
        return false;
    }
}

//checking if client already has values saved in his local storage
exports.checkLocalStorage = () => {
    if (localStorage.getItem("Variables I") === null) {
        localStorage.setItem("Variables I", "0");
        localStorage.setItem("Variables II", "0");
    } else {
        console.log("Using pre-existing stored local storage values");  
    }
}

// Exporting variables and functions
// export { checkLocalStorage, checkBrowserSupport };