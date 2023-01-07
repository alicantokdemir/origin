export function getMonthText(date: Date): string {
  return date.toLocaleString('default', { month: 'long' });
}

export function getYear(date: Date): string {
  return date.toLocaleString('default', { year: 'numeric' });
}

export function getMonthsDiff(d2: Date, d1: Date): number {
  let months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth();
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}
