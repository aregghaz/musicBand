'use server';
export const fetchLazyData = async (url: string) => {
    
  const response = await fetch(url);
  return response.json();
};
