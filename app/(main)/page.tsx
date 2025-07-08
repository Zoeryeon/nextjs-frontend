// app /page.tsx
import { formatDate } from '@/app/_lib/utils';

export default function Home() {
  const now = formatDate(new Date());
  return (
    <main className="p-[30px]">
      <h2 className="text-[25px] font-bold">홈페이지 {now}</h2>
    </main>
  );
}
