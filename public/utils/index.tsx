export const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export const STORAGE_URL = process.env.NEXT_PUBLIC_STORAGE_URL;

export const navigationItems = [
  {
    label: 'Home',
    link: '/#',
  },
  {
    label: 'About',
    link: '/#about',
  },
  {
    label: 'Discography',
    link: '/#discography',
  },
  {
    label: 'Concerts',
    link: '/#concerts',
  },
  {
    label: 'Gallery',
    link: '/#gallery',
  },
  {
    label: 'News',
    link: '/#news',
  },
  {
    label: 'Contact',
    link: '/#contact',
  },
];

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

export const isValidPhone = (phone: string | null) => {
  return (
    typeof phone === 'string' &&
    /^\+\d{7,15}$/.test(phone.replace(/[^\d+]/g, ''))
  );
};

export const isValidEmail = (email: string | null) => {
  return typeof email === 'string' && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
