import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { config } from "../core/config";

const { url, serviceRoleKey, bucketName } = config.supabase;

let supabaseClient: SupabaseClient | null = null;
if (url && serviceRoleKey && (url.startsWith("http://") || url.startsWith("https://"))) {
  try {
    supabaseClient = createClient(url, serviceRoleKey, {
      auth: {
        persistSession: false,
      },
    });
  } catch (err) {
    console.error("Failed to initialize Supabase client:", err);
  }
}

export async function uploadToSupabase(file: File, folder: string = "movies"): Promise<string> {
  if (!supabaseClient) {
    throw new Error(
      "Supabase is not configured. Please check your Supabase environment variables (SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY)."
    );
  }

  if (!bucketName) {
    throw new Error("SUPABASE_BUCKET_NAME is not configured.");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const ext = file.name.split(".").pop() || "jpg";
  const fileName = `${folder}/${crypto.randomUUID()}.${ext}`;

  const { data, error } = await supabaseClient.storage
    .from(bucketName)
    .upload(fileName, buffer, {
      contentType: file.type,
      upsert: true,
    });

  if (error) {
    throw new Error(`Failed to upload to Supabase Storage: ${error.message}`);
  }

  const { data: publicUrlData } = supabaseClient.storage
    .from(bucketName)
    .getPublicUrl(fileName);

  if (!publicUrlData || !publicUrlData.publicUrl) {
    throw new Error("Failed to retrieve public URL from Supabase Storage.");
  }

  return publicUrlData.publicUrl;
}
