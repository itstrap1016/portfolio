import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

interface NavBtnProps {
  href: string;
  name: string;
  active: boolean;
  onClick: () => void;
}

interface LinkBtnProps {
  href: string;
  children: React.ReactNode;
}

const getSectionPos = () => {
  const hash = window.location.hash.replace("#", "");
  const validSections = ["about", "experience", "project"];
  return validSections.includes(hash) ? hash : "about";
};

function NavBtn({ href, name, active, onClick }: NavBtnProps) {
  return (
    <li>
      <a href={href} className="flex items-center py-3 gap-4" onClick={onClick}>
        <span
          className={`h-[1px] transition-all duration-100 ${
            active ? "w-16 bg-main" : "w-8 bg-sub02"
          }`}
        ></span>
        <span
          className={`text-xs transition-all duration-100 ${
            active ? "text-main font-bold" : "text-sub02 font-normal"
          }`}
        >
          {name}
        </span>
      </a>
    </li>
  );
}

function LinkBtn({ href = "#", children }: LinkBtnProps) {
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
  const [activeSection, setActiveSection] = useState(getSectionPos);

  useEffect(() => {
    const observerOptions = {
      rootMargin: "-20% 0px -80% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);

          if (window.location.hash !== `#${sectionId}`) {
            window.history.replaceState(null, "", `#${sectionId}`);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // 관찰할 섹션들 찾기 및 등록
    const aboutSection = document.getElementById("about");
    const experienceSection = document.getElementById("experience");
    const projectSection = document.getElementById("project");

    if (aboutSection) observer.observe(aboutSection);
    if (experienceSection) observer.observe(experienceSection);
    if (projectSection) observer.observe(projectSection);

    // hashchange 이벤트 리스너 (직접 URL 변경 시)
    const handleHashChange = () => {
      setActiveSection(getSectionPos);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header className="w-[540px] pl-10 pr-5 py-20 min-h-screen max-h-screen flex flex-col justify-between sticky top-0">
      <section>
        <section className="mb-16">
          <h1 className="text-5xl font-bold mb-3 text-main">HanSeung Lee</h1>
          <h2 className="text-xl font-medium mb-4 text-main">
            Front End Engineer
          </h2>
          <p className="">
            I build accessible, pixel-perfect digital
            <br />
            experiences for the web.
          </p>
        </section>
        <nav>
          <h2 className="sr-only">Navigation</h2>
          <ul>
            <NavBtn
              name="ABOUT"
              href="#about"
              active={activeSection === "about"}
              onClick={() => setActiveSection("about")}
            />
            <NavBtn
              name="EXPERIENCE"
              href="#experience"
              active={activeSection === "experience"}
              onClick={() => setActiveSection("experience")}
            />
            <NavBtn
              name="PROJECT"
              href="#project"
              active={activeSection === "project"}
              onClick={() => setActiveSection("project")}
            />
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
