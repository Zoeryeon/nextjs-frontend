// app /(main) /laout.tsx
import Header from '@/app/ui/home/Header';
import Footer from '@/app/ui/home/Footer';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
