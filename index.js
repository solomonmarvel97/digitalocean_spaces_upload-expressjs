import express from 'express';

const app = express();

import {create} from "./do/create.js"
import {deleteBucket} from "./do/deleteBucket.js"
import {deleteFile} from "./do/deleteFile.js"
import {download} from "./do/download.js"
import {generatePreSignedUrlForDownload} from "./do/generatePreSignedUrlForDownload.js"
import {generatePreSignedUrlForUpload} from "./do/generatePreSignedUrlForUpload.js"
import {list} from "./do/list.js"
import {listFiles} from "./do/listFiles.js"
import {upload} from "./do/upload.js"


// Endpoint: POST /create
app.post('/create', async (req, res) => {
  // Logic for creating a new bucket
  const data = await create()
  res.status(201).json({status: "ok", data: data, message: "Created Successfully"});
});

// Endpoint: DELETE /deleteBucket
app.delete('/deleteBucket', async (req, res) => {
  // Logic for deleting a bucket
  const data = await deleteBucket()
  res.status(200).json({status: "ok", data: data, message: "Delete Bucket endpoint"});
});

// Endpoint: DELETE /deleteFile
app.delete('/deleteFile', async (req, res) => {
  // Logic for deleting a file
  const data = await deleteFile()
  res.status(200).json({status: "ok", data: data, message: "Delete File endpoint"});
});

// Endpoint: GET /download
app.get('/download', async (req, res) => {
  // Logic for downloading a file
  const data = await download()
  res.status(200).json({status: "ok", data: data, message: "Download endpoint"});
});

// Endpoint: GET /generatePreSignedUrlForDownload
app.get('/generatePreSignedUrlForDownload', async (req, res) => {
  // Logic for generating a pre-signed URL for file download
  const data = await generatePreSignedUrlForDownload()
  res.status(200).json({status: "ok", data: data, message: "Generate Pre-Signed URL for Download endpoint"});
});

// Endpoint: GET /generatePreSignedUrlForUpload
app.get('/generatePreSignedUrlForUpload', async (req, res) => {
  // Logic for generating a pre-signed URL for file upload
  const data = await generatePreSignedUrlForUpload()
  res.status(200).json({status: "ok", data: data, message: "Generate Pre-Signed URL for Upload endpoint"});
});

// Endpoint: GET /list
app.get('/list', async (req, res) => {
  // Logic for listing endpoints (buckets)
  const data = await list()
  res.status(200).json({status: "ok", data: data, message: "List endpoint"});
});

// Endpoint: GET /listFile
app.get('/listFiles', async (req, res) => {
  // Logic for listing files
  const data = await listFiles()
  res.status(200).json({status: "ok", data: data, message: "List File endpoint"});
});

// Endpoint: POST /upload
app.post('/upload', async (req, res) => {
  // Logic for uploading a file
  const data = await upload()
  res.status(200).json({status: "ok", data: data, message: "List File endpoint"});
});


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
