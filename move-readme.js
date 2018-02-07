const fs = require('fs');

const sourcePath = './app/src/README.MD';
const rootPath = './app/README.MD';

// Check if README.MD exists in root

if (fs.existsSync(rootPath)) {
    console.log('README.MD - File already exists');
} else {
    console.log('README.MD - File does not exists. Lets create it...');
    const source = fs.createReadStream(sourcePath);
    const dest = fs.createWriteStream(rootPath);
    source.pipe(dest);
    source.on('end', () => { console.log('README.MD - File successully created'); });
    source.on('error', (err) => { console.error('README.MD - Something went wrong!'); });
}


