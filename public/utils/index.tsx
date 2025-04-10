export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const formatDateToMonthAndDay = (dateString?: string | null) => {
  if (!dateString) {
    return null; // or return 'Invalid Date' or any default value you prefer
  }

  const date = new Date(dateString);
  return isNaN(date.getTime())
    ? ''
    : date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
};

export const getYearFromDate = (dateString?: string | null): number | null => {
  if (!dateString) {
    return null;
  }

  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date.getFullYear();
};
