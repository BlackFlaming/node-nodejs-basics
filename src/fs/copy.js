import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from "fs";
import path from "path";


const copy = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    fs.cp(path.join(__dirname, "files"), path.join(__dirname, "files_copy"), { recursive: true, errorOnExist: true, force: false }, function (err) {
        if (err) {
            throw "FS operation failed"
        }
    });
};

await copy();
