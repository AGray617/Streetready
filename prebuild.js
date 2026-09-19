var fs = require('fs');
var c = fs.readFileSync('src/App.js', 'utf8');
var r = c.split('<style>{');
if (r.length > 1) {
  var after = r[1].split('`}</style>');
  r[1] = after[1] || '';
  c = r.join('');
  fs.writeFileSync('src/App.js', c);
  console.log('Style block removed.');
} else {
  console.log('No style block found.');
}
