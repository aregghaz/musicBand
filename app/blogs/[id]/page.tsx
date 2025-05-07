import BlogInner from '@components/BlogInnerComponents/BlogInner';
import { BASE_URL, STORAGE_URL } from '@utils/index';
import { notFound } from 'next/navigation';

interface Blog {
  data: {
    createdAt: string;
    title: string;
    description: string;
    image: string;
  };
}

export async function generateMetadata({ params }: any): Promise<any> {
  const res = await fetch(`${BASE_URL}/blogs/${params.id}`, {
    cache: 'no-store',
  });
  const blog: Blog = await res.json();

  const data = blog?.data;

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

export default async function BlogPage({ params }: any) {
  const res = await fetch(`${BASE_URL}/blogs/${params.id}`, {
    cache: 'no-store',
  });
  if (res.status === 404) {
    notFound();
  }
  const blog: Blog = await res.json();

  return <BlogInner blog={blog?.data} />;
}
