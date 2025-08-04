function Layout({ children }: { children: React.ReactNode }) {
  return <div className="max-w-[1280px] mx-auto flex">{children}</div>;
}

export default Layout;
