export const diffInDays =  (date1: string, date2: string): number | null => {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  
  const diffMs = d1.getTime() - d2.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  return diffDays >= 0 ? diffDays : null;
}
