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
    label: 'Our Team',
    link: '/#band',
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
    label: 'Blog',
    link: '/#blog',
  },

  {
    label: 'About Us',
    link: '/#news-about-us',
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

  const match = dateString.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!match) return '';

  const [, year, month, day] = match;
  const date = new Date(
    Date.UTC(parseInt(year), parseInt(month) - 1, parseInt(day))
  );
  if (isNaN(date.getTime())) return '';

  if (monthNumber) {
    const monthStr = (date.getUTCMonth() + 1).toString().padStart(2, '0');
    const dayStr = date.getUTCDate().toString().padStart(2, '0');
    return `${monthStr}/${dayStr}`;
  }

  // Return day + month name (e.g., "12 May")
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    timeZone: 'UTC',
  });
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

export const formatDescription = (text?: string | null) => {
  if (!text) return '';

  const escapeMap: any = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  const escapedText = text.replace(/[&<>"']/g, (char) => escapeMap[char]);

  return escapedText.replace(/\n/g, '<br>');
};
