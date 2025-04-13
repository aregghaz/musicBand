export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};

export const formatDateToMonthAndDay = (
  dateString?: string | null,
  monthNumber: boolean = false
) => {
  if (!dateString) return null;

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return '';

  if (monthNumber) {
    // Return month number + day
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${month}/${day}`;
  }

  // Return month name + day
  return date.toLocaleDateString('en-GB', { day: '2-digit', month: 'short' });
};


export const getYearFromDate = (dateString?: string | null): number | null => {
  if (!dateString) {
    return null;
  }

  const date = new Date(dateString);
  return isNaN(date.getTime()) ? null : date.getFullYear();
};
