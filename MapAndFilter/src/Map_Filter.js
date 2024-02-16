import fs from 'fs';
import { getDirName } from './util.js';
const __dirname = getDirName();


const responsePath = `${__dirname}/response.json`;
const responseContent = fs.readFileSync(responsePath, 'utf8');


const response = JSON.parse(responseContent);


const mappedData = response.map(item => {
  return {
    name: item.name,
    year: item.vehicle.year
  };
});

console.log('Mapped Data:');
console.log(mappedData);


const filteredData = response.filter(item => item.vehicle.year > 2020);

console.log('\nFiltered Data (Year > 2020):');
console.log(filteredData);
