// Imports your configured client and any necessary S3 commands.
import { DeleteObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../client/index.js";

// Specifies a path within your bucket and the file to delete.
const bucketParams = { Bucket: "cohort3", Key: "example.txt" };

// Returns a list of objects in your specified path.
export const deleteFile = async () => {
    try {
        const data = await s3Client.send(new DeleteObjectCommand(bucketParams));
        console.log("Success", data);
        return data;
    } catch (err) {
        console.log("Error", err);
    }
};
