const toPrepend = "//@include 'CSV.js'\n//@include 'utilities.js'\n"
const fs = require('fs');
const filepath = 'tmp/ScriptUIPanel.js';
const data = fs.readFileSync(filepath);
fs.writeFileSync(filepath, toPrepend + data);