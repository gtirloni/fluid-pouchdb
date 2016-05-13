// A convenience script to start the test harness, used for manual QA.
"use strict";
var fluid = require("infusion");
var gpii  = fluid.registerNamespace("gpii");

require("./lib/harness");
require("./pouch-config.js");

fluid.setLogging(true);

gpii.test.pouch.harness({
    port: 6789,
    pouchConfig: {
        databases: gpii.tests.pouch.config.databases
    },
    distributeOptions: [
        {
            source: "{that}.options.pouchConfig",
            target: "{that gpii.pouch}.options"
        }
    ]
});
