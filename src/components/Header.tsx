import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

function NavBtn({ name }: { name: string }) {
  return (
    <li>
      <a href="#" className="flex items-center py-3 gap-4">
        <span className="w-8 h-[1px] bg-sub02"></span>
        <span className="text-sub02 text-xs">{name}</span>
      </a>
    </li>
  );
}

function LinkBtn({
  href = "#",
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <li className="w-6 h-6">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full h-full"
      >
        {children}
      </a>
    </li>
  );
}

function Header() {
  return (
    <header className="w-[640px] pl-10 pr-5 py-20 min-h-screen max-h-screen flex flex-col justify-between sticky top-0">
      <section>
        <section className="mb-16">
          <h1 className="text-5xl font-bold mb-3 text-main">HanSeung Lee</h1>
          <h2 className="text-xl font-medium mb-4 text-main">
            Front End Engineer
          </h2>
          <p className="">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </section>
        <nav>
          <h2 className="sr-only">Navigation</h2>
          <ul>
            <NavBtn name="ABOUT" />
            <NavBtn name="EXPERIENCE" />
            <NavBtn name="PROJECT" />
          </ul>
        </nav>
      </section>
      <section>
        <h2 className="sr-only">LINKS</h2>
        <ul className="flex items-center gap-5">
          <LinkBtn href="#">
            <FaGithub className="w-full h-full hover:text-main" />
          </LinkBtn>
          <LinkBtn href="#">
            <SiVelog className="w-full h-full hover:text-main" />
          </LinkBtn>
        </ul>
      </section>
    </header>
  );
}

export default Header;
