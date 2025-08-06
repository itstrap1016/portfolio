function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1280px] mx-auto flex max-lg:block max-lg:px-12 max-lg:py-16 max-md:py-12 max-md:px-6">
      {children}
    </div>
  );
}

export default Layout;
