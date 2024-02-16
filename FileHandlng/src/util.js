import path from 'path';
import { fileURLToPath } from 'url';


export const getFileName = () => fileURLToPath(import.meta.url);


export const getDirName = () => path.dirname(fileURLToPath(import.meta.url));


export default {
    getFileName,
    getDirName,
};