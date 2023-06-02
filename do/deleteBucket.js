// Imports your configured client and any necessary S3 commands.
import { DeleteBucketCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../client/index.js";

// Specifies the name of the bucket to delete.
export const bucketParams = { Bucket: "cohort3" };

// Deletes specified bucket.
export const run = async () => {
    try {
        const data = await s3Client.send(new DeleteBucketCommand(bucketParams));
        return data;
        console.log("Success - bucket deleted");
    } catch (err) {
        console.log("Error", err);
    }
};

run();
