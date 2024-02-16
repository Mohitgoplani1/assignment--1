import fs from 'fs';
import { getDirName } from './util.js';
const __dirname = getDirName();
fs.readFile(`${__dirname}/poem.txt`, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the file:', err);
        return;
    }
    console.log('File content:\n');
    console.log(data);
});