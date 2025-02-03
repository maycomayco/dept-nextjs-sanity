import '@/styles/globals.css';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-screen antialiased">
      <div className="flex h-full w-full flex-col">
        <main className="flex-grow overflow-auto bg-[url(/light-bg.svg)] bg-cover bg-repeat">
          {children}
        </main>
      </div>
    </div>
  );
}
