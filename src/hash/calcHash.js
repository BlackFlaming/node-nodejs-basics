import crypto from "crypto";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from "fs";
import path from "path";


const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    
    fs.readFile(path.join(__dirname, "files", "fileToCalculateHashFor.txt"), "utf-8", (err, data) => {
        const hashSum = crypto.createHash('sha256').update(data);
        const hex = hashSum.digest('hex');
        
        console.log(hex);
    });
    
};

await calculateHash();