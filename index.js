'use strict';

var jsonfile = require('jsonfile');

function readFile(filename, options) {
	return new Promise(function(resolve, reject) {
		jsonfile.readFile(filename, options, function(err, obj) {
			if (err) {
				reject(err);
			} else {
				resolve(obj);
			}

		});
	});
}

function writeFile(filename, obj, options) {
	return new Promise(function(resolve, reject) {
		jsonfile.writeFile(filename, obj, options, function(err, obj) {
			if (err) {
				reject(err);
			} else {
				resolve();
			}
		});
	});
}

module.exports = {
	readFile: readFile,
	writeFile: writeFile,
	spaces: jsonfile.spaces
};
