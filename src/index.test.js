"use strict";

const { describe, it } = require("node:test");
const unrtfPath = require("./index");

describe("unrtfPath", () => {
	it("Returns a path to the unrtf executable", (t) => {
		t.plan(1);
		t.assert.match(unrtfPath, /\\src\\lib\\win32\\unrtf-0.19.3\\bin$/);
	});
});
