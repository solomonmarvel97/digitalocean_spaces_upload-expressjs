// Imports your configured client and any necessary S3 commands.
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { writeFileSync } from "fs";
import { s3Client } from "../client/index.js";

// Specifies a path within your bucket and the file to download.
const bucketParams = {
    Bucket: "cohort3",
    Key: "example.txt"
};

// Function to turn the file's body into a string.
const streamToString = (stream) => {
    const chunks = [];
    return new Promise((resolve, reject) => {
        stream.on('data', (chunk) => chunks.push(Buffer.from(chunk)));
        stream.on('error', (err) => reject(err));
        stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    });
};

// Downloads your file and saves its contents to /tmp/local-file.ext.
const run = async () => {
    try {
        const response = await s3Client.send(new GetObjectCommand(bucketParams));
        const data = await streamToString(response.Body);
        writeFileSync("/tmp/local-file.ext", data);
        console.log("Success", data);
        return data;
    } catch (err) {
        console.log("Error", err);
    }
};

run();
