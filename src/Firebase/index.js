"use strict";

const firebase = require("firebase");

class Firebase {
    static init(config) {
        return firebase.initializeApp(config);
    }
}

module.exports = { Firebase };
