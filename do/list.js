// Imports your configured client and any necessary S3 commands.
import { ListBucketsCommand } from "@aws-sdk/client-s3";
import { s3Client } from "../client/index.js";

// Returns a list of Spaces in your region.
export const list = async () => {
  try {
    const data = await s3Client.send(new ListBucketsCommand({}));
    console.log("Success", data.Buckets);
    return data; // For unit tests.
  } catch (err) {
    console.log("Error", err);
  }
};
