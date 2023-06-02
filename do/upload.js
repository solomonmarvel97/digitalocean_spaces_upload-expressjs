// Imports your configured client and any necessary S3 commands.
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../client/index.js";

// Specifies a path within your bucket and the file to upload.
export const bucketParams = {
    Bucket: "cohort3",
    Key: "example.txt",
    Body: "content"
};

// Uploads the specified file to the chosen path.
export const run = async () => {
    try {
        const data = await s3Client.send(new PutObjectCommand(bucketParams));
        console.log(
            "Successfully uploaded object: " +
        bucketParams.Bucket +
        "/" +
        bucketParams.Key
        );
        return data;
    } catch (err) {
        console.log("Error", err);
    }
};

run();
