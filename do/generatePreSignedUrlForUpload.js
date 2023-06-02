// Imports your configured client and any necessary S3 commands.
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { s3Client } from "../client/index.js";

// Specifies path, file, and content type.
const bucketParams = {
    Bucket: "example-bucket-name",
    Key: "file.ext",
    ContentType: "text"
};

// Generates the URL.
export const generatePreSignedUrlForUpload = async () => {
    try {
        const url = await getSignedUrl(s3Client, new PutObjectCommand(bucketParams), { expiresIn: 15 * 60 }); // Adjustable expiration.
        console.log("URL:", url);
        return url;
    } catch (err) {
        console.log("Error", err);
    }
};
