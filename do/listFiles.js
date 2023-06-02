// Imports your configured client and any necessary S3 commands.
import { ListObjectsCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../client/index.js";

// Specifies a path within your bucket, e.g. example-bucket-name/example-directory.
export const bucketParams = { Bucket: "cohort3" };

// Returns a list of objects in your specified path.
export const run = async () => {
    try {
        const data = await s3Client.send(new ListObjectsCommand(bucketParams));
        console.log("Success", data);
        return data;
    } catch (err) {
        console.log("Error", err);
    }
};

run();
