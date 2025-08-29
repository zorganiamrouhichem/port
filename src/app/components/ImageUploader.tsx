import { useState } from 'react';
import Image from 'next/image';

export default function ImageUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/images/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error('Upload failed:', res.status, errorText);
      return;
    }

    const data = await res.json();
    console.log('Upload successful:', data);

    if (data.image_url) {
      setImageUrl(data.image_url);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      {imageUrl && (
        <div style={{ marginTop: '1rem', position: 'relative', width: '100%', maxWidth: 600, height: 400 }}>
          <h3>Uploaded Image:</h3>
          <Image
            src={imageUrl}
            alt="Uploaded"
            fill
            style={{ objectFit: 'contain' }}
            priority // optional, for better loading priority
          />
        </div>
      )}
    </div>
  );
}
