import { config } from 'dotenv';
config();

import { S3 } from "@aws-sdk/client-s3";

const s3Client = new S3({
    forcePathStyle: false, // Configures to use subdomain/virtual calling format.
    endpoint: process.env.DO_SPACES_ENDPOINT,
    region: process.env.DO_SPACE_REGION,
    credentials: {
        accessKeyId: process.env.DO_SPACES_KEY,
        secretAccessKey: process.env.DO_SPACES_SECRET
    }
});

export { s3Client };
