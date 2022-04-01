const { prototype } = require("mocha");

module.exports = {
    // TODO: Create our computer function here
    add: function(a, b) {
        if (this.add.arguments.length < 2) {
            throw "Arguments missing."
        }

        if (a === undefined) {
            throw this.popo("undefined", 0);
        }
        if (b === undefined) {
            throw this.popo("undefined", 1);
        }

        if (a === null) {
            throw this.popo("null", 0);
        }
        if (b === null) {
            throw this.popo("null", 1);
        }

        if (typeof(a) == "string") {
            throw this.popo("string", 0);
        }
        if (typeof(b) == "string") {
            throw this.popo("string", 1);
        }
        return a + b;
    },

    popo: function(s, i) {
        return s + " is not a valid number [arg " + i + "].";
    }
};