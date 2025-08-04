import { FiExternalLink } from "react-icons/fi";

interface CommonListsProps {
  data: ListProps[];
  heading: string;
}

interface ListProps {
  image?: string;
  date?: string;
  title: string;
  content: string;
  skills: string[];
  linkUrl?: string;
}

function Skill({ text }: { text: string }) {
  return (
    <li className="bg-point02 px-3 py-1 rounded-full flex justify-center items-center">
      <span className="text-point text-xs font-medium">{text}</span>
    </li>
  );
}

function List({ image, date, title, content, skills, linkUrl }: ListProps) {
  const handleClick = () => {
    if (linkUrl) {
      window.open(linkUrl, "_blank", "noopener,noreferrer");
    }
  };
  return (
    <li
      className={`flex justify-between ${
        linkUrl &&
        "group hover:bg-white/5 hover:backdrop-blur-sm p-4 rounded-lg transition-all duration-150 cursor-pointer"
      }`}
      onClick={handleClick}
    >
      {image && (
        <div className="w-[120px] h-[70px] outline-2 outline-border rounded-[2px] mt-2">
          <img src={image} alt={title} className="block w-full h-full" />
        </div>
      )}
      {date && (
        <div>
          <span className="text-sub02 text-sm font-medium">{date}</span>
        </div>
      )}
      <div className="flex flex-col">
        <div className="max-w-[380px]">
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
        </ul>
      </div>
    </li>
  );
}

function CommonLists({ data, heading }: CommonListsProps) {
  return (
    <section>
      <h2 className="sr-only">{heading}</h2>
      <ul className="flex flex-col gap-12 p-3">
        {data.map((item, index) => (
          <List {...item} key={index} />
        ))}
      </ul>
    </section>
  );
}

export default CommonLists;
