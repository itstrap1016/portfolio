function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-[740px] pr-5 py-20 min-h-screen flex flex-col gap-[144px] max-lg:w-full max-lg:pr-0 max-lg:pt-24 max-lg:pb-0 max-lg:gap-[96px] max-sm:gap-[64px]">
      {children}
    </main>
  );
}

export default MainLayout;
