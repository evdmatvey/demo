export const formatMonthYear = (date: Date, locale = 'ru-RU'): string => {
  const month = new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);
  const capitalized = month.charAt(0).toUpperCase() + month.slice(1);

  const year = new Intl.DateTimeFormat(locale, { year: 'numeric' }).format(
    date,
  );

  return `${capitalized}, ${year}`;
};

export const formatDayMonthYear = (date: Date, locale = 'ru-RU'): string => {
  const month = new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  const day = date.getDate();
  const year = date.getFullYear();

  return `${day} ${capitalizedMonth} ${year}`;
};

export const formatWeekdayDayMonth = (date: Date, locale = 'ru-RU'): string => {
  const weekday = new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(
    date,
  );
  const capitalizedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);

  const day = date.getDate();

  const month = new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  return `${capitalizedWeekday}, ${day} ${capitalizedMonth}`;
};

export const formatDayMonthTime = (date: Date, locale = 'ru-RU'): string => {
  const day = date.getDate();

  const month = new Intl.DateTimeFormat(locale, { month: 'long' }).format(date);
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day} ${capitalizedMonth} ${hours}:${minutes}`;
};

export const formatDate = (date: Date, locale = 'ru-RU'): string => {
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays < 2) {
    return formatDayMonthTime(date, locale);
  }

  if (diffDays < 7) {
    return formatWeekdayDayMonth(date, locale);
  }

  if (diffDays < 30) {
    return formatDayMonthYear(date, locale);
  }

  return formatMonthYear(date, locale);
};
