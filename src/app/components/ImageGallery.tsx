// src/app/components/ImageGallery.tsx
import { useEffect, useState } from 'react';
import Image from 'next/image';

type ImageType = {
  id: string;
  image_url: string;
};

export default function ImageGallery() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchImages() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/images`);
        if (!res.ok) throw new Error('Failed to fetch images');
        const data = await res.json();
        setImages(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Unknown error');
        }
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, []);

  if (loading) return <p>Loading images...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>All Uploaded Images</h3>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {images.map((img) => (
          <div key={img.id} style={{ width: 200, height: 150, position: 'relative' }}>
            <Image
              src={img.image_url}
              alt="Uploaded"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 200px"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
