import AlbumInner from '@components/AlbumInnerComponents/AlbumInner';
import { BASE_URL, STORAGE_URL } from '@utils/index';
import { notFound } from 'next/navigation';

interface Album {
  data: {
    createdAt: string;
    title: string;
    description: string;
    image: string;
  };
}

export async function generateMetadata({ params }: any): Promise<any> {
  const res = await fetch(`${BASE_URL}/albums/${params.id}`, {
    cache: 'no-store',
  });
  const album: Album = await res.json();

  const data = album?.data;

  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [`${STORAGE_URL}${data.image}`],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: [`${STORAGE_URL}${data.image}`],
    },
  };
}

export default async function AlbumPage({ params }: any) {
  const res = await fetch(`${BASE_URL}/albums/${params.id}`, {
    cache: 'no-store',
  });
  if (res.status === 404) {
    notFound();
  }
  const album: Album = await res.json();

  return <AlbumInner album={album?.data} />;
}
