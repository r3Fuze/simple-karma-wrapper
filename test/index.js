/* globals describe, it */
"use strict";

var expect = require("chai").expect,
    simpleKarmaWrapper = require("..");

describe("simple-karma-wrapper", function() {
    it("should export the '.start()' function", function() {
        expect(simpleKarmaWrapper).to.have.property("start");
    });

    it("should export the '.run()' function", function() {
        expect(simpleKarmaWrapper).to.have.property("run");
    });
});
