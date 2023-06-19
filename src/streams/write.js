import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from "fs";
import path from "path";

const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    
    const writeStream = fs.createWriteStream(path.join(__dirname, "files", "fileToWrite.txt"));

    process.stdin.on("data", (data) => {
        writeStream.write(data)
    })
};

await write();