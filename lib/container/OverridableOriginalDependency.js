/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

const ModuleDependency = require("../dependencies/ModuleDependency");
const makeSerializable = require("../util/makeSerializable");

class OverridableOriginalDependency extends ModuleDependency {
	constructor(request) {
		super(request);
	}

	/**
	 * @returns {string | null} an identifier to merge equal requests
	 */
	getResourceIdentifier() {
		return this.request + " (not overridden)";
	}

	get type() {
		return "overridable original";
	}
}

makeSerializable(
	OverridableOriginalDependency,
	"webpack/lib/container/OverridableOriginalDependency"
);

module.exports = OverridableOriginalDependency;
