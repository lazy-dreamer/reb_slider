export const getTodayIsoMidnight = (): string => {
  const today: Date = new Date();
  const year: number = today.getUTCFullYear();
  const month: string = String(today.getUTCMonth() + 1).padStart(2, '0');
  const day: string = String(today.getUTCDate()).padStart(2, '0');
  return `${year}-${month}-${day}T00:00:00+00:00`;
}
