const fs = require('fs');
let c = fs.readFileSync('src/pages/Home.jsx', 'utf8');
c = c.replace(/<\/small><\/a>/g, '</a></small>');
fs.writeFileSync('src/pages/Home.jsx', c);
console.log("Fixed small/a nesting");
