// Imports your configured client and any necessary S3 commands.
import { CreateBucketCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../client/index.js";

// Specifies the new Space's name.
const bucketParams = { Bucket: "new-bucket" };

// Creates the new Space.
export const create = async () => {
    try {
        const data = await s3Client.send(new CreateBucketCommand(bucketParams));
        console.log("Success", data.Location);
        return data;
    } catch (err) {
        console.log("Error", err);
    }
};
