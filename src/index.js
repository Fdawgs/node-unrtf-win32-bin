"use strict";

const { join } = require("node:path");

/** @description Path to the Windows 32-bit unrtf binary. */
const unrtfPath = join(__dirname, "lib/win32/unrtf-0.19.3/bin");

module.exports = unrtfPath;
