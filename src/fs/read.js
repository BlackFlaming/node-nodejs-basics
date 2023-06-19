import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from "fs";
import path from "path";

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    fs.readFile(path.join(__dirname, "files", "fileToRead.txt"), 'utf8', function (err, data) {
        if (err) {
            throw "FS operation failed"
        };
        
        console.log(data);
    })

};

await read();