import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from "fs";
import path from "path";

const remove = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    fs.unlink(path.join(__dirname, "files", "fileToRemove.txt"), function (err) {
        if (err) {
            throw "FS operation failed"
        }
    })
};

await remove();