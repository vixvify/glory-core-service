import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { config } from "../core/config";

const { accountId, accessKeyId, secretAccessKey, bucketName, publicUrl } = config.r2;

let s3Client: S3Client | null = null;
if (accountId && accessKeyId && secretAccessKey) {
  s3Client = new S3Client({
    region: "auto",
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
  });
}

export async function uploadToR2(file: File, folder: string = "movies"): Promise<string> {
  if (!s3Client) {
    throw new Error(
      "Cloudflare R2 is not configured. Please check your R2 environment variables (R2_ACCOUNT_ID, R2_ACCESS_KEY_ID, R2_SECRET_ACCESS_KEY)."
    );
  }

  if (!bucketName) {
    throw new Error("R2_BUCKET_NAME is not configured.");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const ext = file.name.split(".").pop() || "jpg";
  const fileName = `${folder}/${crypto.randomUUID()}.${ext}`;

  await s3Client.send(
    new PutObjectCommand({
      Bucket: bucketName,
      Key: fileName,
      Body: buffer,
      ContentType: file.type,
    })
  );

  const baseUrl = publicUrl.endsWith("/") ? publicUrl.slice(0, -1) : publicUrl;
  return `${baseUrl}/${fileName}`;
}
