// import fetch from 'node-fetch';
// import querystring from 'querystring';
import querystring from 'node:querystring';

// API source - https://data.gov.in/resource/all-india-pincode-directory
const baseUrl = 'https://api.data.gov.in/resource/6176ee09-3d56-4a3b-8115-21841576b2f6';

const createRequestUrl = (offset) => {
    const parameters = {
        'api-key': '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b',
        format: 'json',
        limit: 10,
        offset,
    };
    return baseUrl + '?' + querystring.stringify(parameters);
};

const fetchData = async (offset) => {
    const response = await fetch(createRequestUrl(offset));
    const { total, count, limit, offset: responseOffset, records } = await response.json();
    console.log(`Data for offset ${responseOffset} received`);
    console.log('total', total);
    console.log('count', count);
    console.log('limit', limit);
    console.log('offset', responseOffset);
    return records;
};

// Define the offsets for the calls
const offsets = [31, 51, 61];


const promises = offsets.map(offset => fetchData(offset));

// Use Promise.all to wait for all promises to resolve
const dataArray = await Promise.all(promises);

// Combine the data using the spread operator
const combinedData = dataArray.flat();


console.log('Combined Data:');
console.log(combinedData);
console.log('Script microtask execution complete.');
