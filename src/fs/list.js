import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from "fs";
import path from "path";

const list = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    fs.readdir(path.join(__dirname, "files"), function (err, files) {
        if (err) {
            throw "FS operation failed"
        }

        let filesNames = [];

        files.forEach(fileName => {
            filesNames.push(fileName);
        })

        console.log(filesNames);
    })
};

await list();