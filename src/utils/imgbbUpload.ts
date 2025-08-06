// src/utils/imgbbUpload.ts
export const uploadImageToImgBB = async (imageFile: File): Promise<string> => {
  const formData = new FormData();
  formData.append('image', imageFile);
  
  try {
    const response = await fetch(`https://api.imgbb.com/1/upload?key=cee6f899a1f2b76b6a01b89517662be0`, {
      method: 'POST',
      body: formData
    });
    
    const data = await response.json();
    
    if (!data.success) {
      throw new Error('Image upload failed');
    }
    
    return data.data.url;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw new Error('Failed to upload image. Please try again.');
  }
};