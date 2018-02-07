const fs = require('fs');

const source = fs.createReadStream('./src/README.MD');
const dest = fs.createWriteStream('./README.MD');

source.pipe(dest);
source.on('end', () => { });
source.on('error', (err) => { });
