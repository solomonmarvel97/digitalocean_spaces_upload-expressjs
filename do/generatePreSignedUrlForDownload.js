// Imports your configured client and any necessary S3 commands.
import { GetObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { s3Client } from "../client/index.js";

// Specifies a path within your Space and the file to download.
const bucketParams = {
    Bucket: "cohort3",
    Key: "example.txt"
};

// Generates the URL.
export const generatePreSignedUrlForDownload = async () => {
    try {
        const url = await getSignedUrl(s3Client, new GetObjectCommand(bucketParams), { expiresIn: 15 * 60 }); // Adjustable expiration.
        console.log("URL:", url);
        return url;
    } catch (err) {
        console.log("Error", err);
    }
};
