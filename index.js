"use strict";

var karma = require("karma"),
    path = require("path");

var karmaParseConfig = require("karma/lib/config").parseConfig;

module.exports.start = function(configFilePath, options, callback) {
    if (typeof configFilePath === "function") {
        callback = configFilePath;
        configFilePath = "karma.conf.js";
        options = {};
    }

    if (typeof configFilePath === "object") {
        callback = options;
        options = configFilePath;
        configFilePath = "karma.conf.js";
    }

    if (typeof options === "function") {
        callback = options;
        options = {};
    }

	configFilePath = path.resolve(configFilePath);

	var config = karmaParseConfig(configFilePath, {});

    // Require karma from the project dir so that it can require the plugins
    var server = require(path.normalize(config.basePath + "/node_modules/karma")).server;

    Object.keys(options).forEach(function(key) {
        config[key] = options[key];
    });

    // console.dir(config);
	server.start(config, function(exitCode) {
		if (typeof callback === "function") {
            callback();
            process.exit(exitCode);
        }
	});
};

module.exports.run = function(config, callback) {
    var runner = karma.runner;

    if (typeof config === "function") {
        callback = config;
    }

    config = config || {};

    runner.run(config, function(exitCode) {
        if (typeof callback === "function") {
            callback();
            process.exit(exitCode);
        }
    });
};
