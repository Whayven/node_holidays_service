const daysUntil = (date: Date) => {
  const now = new Date();
  const diff = date.getTime() - now.getTime();
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
  return days > 0 ? days : null;
};

const isWeekend = (date: Date) => {
  const day = date.getDay();
  return day === 5 || day === 6;
};

export { daysUntil, isWeekend };
