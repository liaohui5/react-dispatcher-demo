"use strict";

const { readFileSync, writeFileSync } = require("fs");

class TodoDB {
  constructor(filePath) {
    this.filePath = filePath;
  }

  // object
  read() {
    return JSON.parse(readFileSync(this.filePath, "utf-8"));
  }

  // json string
  write(jsonStr) {
    try {
      let str = JSON.stringify(jsonStr);
      writeFileSync(this.filePath, str);
    } catch (e) {
      console.log("[TodoDB error]:" + e.message);
    }
  }
}

module.exports = TodoDB;
