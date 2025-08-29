import { useEffect, useState } from 'react';

type Image = {
  id: string;
  image_url: string;
};

export default function ImageGallery() {
  const [images, setImages] = useState<Image[]>([]);
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
      } catch (err: any) {
        setError(err.message || 'Unknown error');
      } finally {
        setLoading(false);
      }
    }

    fetchImages(); // fetch immediately on mount
  }, []);

  if (loading) return <p>Loading images...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h3>All Uploaded Images</h3>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        {images.map((img) => (
          <img key={img.id} src={img.image_url} alt="Uploaded" style={{ width: 200 }} />
        ))}
      </div>
    </div>
  );
}
