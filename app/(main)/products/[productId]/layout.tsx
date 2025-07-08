// app/products/[productId]/layout.tsx
export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[500px]">
      <div className="p-[30px] w-[300px]">상품 상세 페이지</div>
      <div className="p-[30px] grow bg-amber-300">{children}</div>
    </div>
  );
}
