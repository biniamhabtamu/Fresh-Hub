import { createClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase environment variables")
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper function to upload image to Supabase Storage
export const uploadPaymentScreenshot = async (file: File, userId: string): Promise<string> => {
  const fileExt = file.name.split(".").pop()
  const fileName = `${userId}-${Date.now()}.${fileExt}`
  const filePath = `payment-screenshots/${fileName}`

  const { error: uploadError } = await supabase.storage.from("premium-requests").upload(filePath, file)

  if (uploadError) {
    throw new Error(`Upload failed: ${uploadError.message}`)
  }

  // Get public URL
  const { data } = supabase.storage.from("premium-requests").getPublicUrl(filePath)

  return data.publicUrl
}

// Helper function to get image URL
export const getImageUrl = (path: string): string => {
  const { data } = supabase.storage.from("premium-requests").getPublicUrl(path)

  return data.publicUrl
}
