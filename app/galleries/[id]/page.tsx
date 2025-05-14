import { notFound } from 'next/navigation';
import GalleryInner from '@components/GalleryInnerComponents/GalleryInnder';
import { BASE_URL } from '@utils/index';

interface GalleryCategory {
  data: {
    id: number;
    folderName: string;
    galleries: {
      id: number;
      galleryImage: string;
      galleryImageDescription: string | null;
    }[];
  };
}

export default async function GalleryPage({ params }: any) {
  const response = await fetch(`${BASE_URL}/gallery/categories/${params.id}`, {
    cache: 'no-store',
  });

  if (response.status === 404) {
    notFound();
  }

  const category: GalleryCategory = await response.json();

  if (!category) {
    notFound();
  }

  return (
    <GalleryInner
      folderName={category.data.folderName}
      galleries={category.data.galleries}
    />
  );
}
