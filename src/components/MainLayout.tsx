function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-[740px] pl-5 pr-10 py-20 min-h-screen flex flex-col gap-[144px]">
      {children}
    </main>
  );
}

export default MainLayout;
