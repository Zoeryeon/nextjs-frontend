// app/products/[productId]/page.tsx
export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  // params는 Promise로 정의되어 있으므로 await를 사용하여 값을 가져옴
  const { productId } = await params;

  return (
    <main className="p-[30px]">
      <h2 className="text-[25px] font-bold">
        details about product {productId}
      </h2>
    </main>
  );
}
