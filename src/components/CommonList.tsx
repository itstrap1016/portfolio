import { FiExternalLink, FiGithub } from "react-icons/fi";

interface CommonListsProps {
  data: ListProps[];
  heading: string;
  id: string;
}

interface ListProps {
  image?: string;
  date?: string;
  title: string;
  content: string;
  skills: string[];
  linkUrl?: string;
  githubLinkUrl?: string;
}

function Skill({ text }: { text: string }) {
  return (
    <li className="bg-point02 px-3 py-1 rounded-full flex justify-center items-center">
      <span className="text-point text-xs font-medium">{text}</span>
    </li>
  );
}

function List({
  image,
  date,
  title,
  content,
  skills,
  linkUrl,
  githubLinkUrl,
}: ListProps) {
  const handleClick = () => {
    if (linkUrl) {
      window.open(linkUrl, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <li>
      <div
        className={`flex justify-between gap-10 p-5 max-lg:p-0 max-sm:flex-col max-sm:gap-4 ${
          linkUrl &&
          "group lg:hover:bg-white/5 lg:hover:backdrop-blur-sm rounded-lg transition-all duration-150 cursor-pointer"
        }`}
        onClick={handleClick}
      >
        {image && (
          <div className="w-[130px] h-[80px] outline-2 outline-border rounded-[2px] mt-2 max-lg:w-[200px] max-lg:h-[125px] max-lg:mt-0 max-md:w-[150px] max-md:h-[92px] max-sm:w-[200px] max-sm:h-[125px] max-sm:order-1">
            <img
              src={image}
              alt={title}
              className="block w-full h-full object-cover"
            />
          </div>
        )}
        {date && (
          <div className="min-w-[130px] flex-shrink-0">
            <span className="text-sub02 text-sm font-medium">{date}</span>
          </div>
        )}
        <div className="flex flex-col w-[calc(100%-170px)] max-lg:w-[calc(100%-240px)] max-md:w-[calc(100%-190px)] max-sm:w-full">
          <div>
            <h3
              className={`text-main mb-2 font-medium ${
                linkUrl &&
                "group-hover:text-point transition-colors duration-150 flex items-center gap-1.5"
              }`}
            >
              {title}
              {linkUrl && (
                <FiExternalLink className="group-hover:-translate-y-0.5 duration-150" />
              )}
            </h3>
            <p className="text-sm mb-4">{content}</p>
          </div>
          <ul className="flex flex-wrap gap-1.5">
            {skills.map((text, index) => (
              <Skill key={index} text={text} />
            ))}
            {githubLinkUrl && (
              <a
                href={githubLinkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-sub02 hover:text-main border border-sub02/30 hover:border-main/40 rounded-full px-3 py-1 transition-colors duration-150"
                onClick={(e) => e.stopPropagation()}
              >
                <FiGithub className="w-3 h-3" />
                GitHub 바로가기
              </a>
            )}
          </ul>
        </div>
      </div>
    </li>
  );
}

function CommonLists({ data, heading, id }: CommonListsProps) {
  return (
    <section id={id}>
      <h2
        className={`hidden text-xl text-main font-bold mb-9 max-lg:block max-sm:mb-6`}
      >
        {heading}
      </h2>
      <ul className="flex flex-col gap-12">
        {data.map((item, index) => (
          <List {...item} key={index} />
        ))}
      </ul>
    </section>
  );
}

export default CommonLists;
