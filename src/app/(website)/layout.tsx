import Header from '@/components/header';
import '@/styles/globals.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body className="h-screen w-screen antialiased">
      <div className="flex h-full w-full flex-col">
        <Header />

        <main className="flex-grow overflow-auto">{children}</main>
      </div>
    </body>
  );
}
