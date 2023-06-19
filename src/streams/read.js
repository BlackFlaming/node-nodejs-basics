import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from "fs";
import path from "path";

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const readStream = fs.createReadStream(path.join(__dirname, "files", "fileToRead.txt"));

    readStream.on("data", function (chunk) {
        process.stdout.write(chunk);
    });
};

await read();