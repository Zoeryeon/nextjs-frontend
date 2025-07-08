// app/_lib/utils.ts
export function formatDate(date: Date): string {
  return date.toLocaleDateString('ko-KR', {
    year: '2-digit',
    month: 'long',
    day: '2-digit',
  });
}
