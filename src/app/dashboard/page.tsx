"use client";
import React, { useEffect, useState } from "react";
import ImageUploader from "../components/ImageUploader";
import ImageGallery from "../components/ImageGallery";
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

function DashboardPage() {
  const [userId, setUserId] = useState<string | null>(null);
  

  useEffect(() => {
    async function fetchUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUserId(user?.id ?? null);
    }
    fetchUser();
  }, []);

  if (!userId) {
    return <div>Please login to see your dashboard.</div>;
  }

  return (
    <div>
      
      <h1>Hey Dashboard</h1>
      <ImageUploader  />
      <ImageGallery />
    </div>
  );
}

export default DashboardPage;
