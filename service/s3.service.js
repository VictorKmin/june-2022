const S3 = require('aws-sdk/clients/s3');
const path = require('node:path');
const uuidV1 = require('uuid').v1;

const { S3_BUCKET_REGION, S3_ACCESS_KEY, S3_SECRET_KEY, S3_BUCKET_NAME } = require("../config/config");

const s3Bucket = new S3({
  region: S3_BUCKET_REGION,
  accessKeyId: S3_ACCESS_KEY,
  secretAccessKey: S3_SECRET_KEY
});

async function uploadPublicFile(fileToUpload, itemType, itemId) {

  return s3Bucket.upload({
    ContentType: fileToUpload.mimetype,
    ACL: "public-read",
    Body: fileToUpload.data,
    Bucket: S3_BUCKET_NAME,
    Key: buildFileName(fileToUpload.name, itemType, itemId)
  }).promise()
}

function buildFileName(fileName, itemType, itemId) {
  const ext = path.extname(fileName); // image.jpg => .jpg

  return `${itemType}/${itemId}/${uuidV1()}${ext}`
}

module.exports = {
  uploadPublicFile
}
