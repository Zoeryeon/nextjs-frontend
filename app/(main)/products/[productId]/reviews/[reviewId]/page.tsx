// products/[productId]/reviews/[reviewId]/page.tsx
import { notFound } from 'next/navigation';

export default async function ProductReview({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  const { productId, reviewId } = await params;

  // reviewId가 999보다 크면 404 페이지로 이동
  if (parseInt(reviewId) > 999) {
    notFound();
  }

  return (
    <main className="p-[30px]">
      <h2 className="text-[25px] font-bold">
        Review {reviewId} for product {productId}
      </h2>
    </main>
  );
}
