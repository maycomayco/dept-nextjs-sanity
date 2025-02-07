import Footer from '@/components/footer';
import Header from '@/components/header';
import '@/styles/globals.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="w-screen antialiased">
      <div className="flex w-full flex-col">
        <Header />

        <main className="flex-grow overflow-auto">{children}</main>

        <Footer />
      </div>
    </body>
  );
}
