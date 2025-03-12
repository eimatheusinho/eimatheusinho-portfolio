import FigmaIcon from "../assets/tools/figma.png";
import CIcon from "../assets/tools/c.png";
import MysqlIcon from "../assets/tools/mysql.png";
import JiraIcon from "../assets/tools/jira.png";
import JsIcon from "../assets/tools/js.png";
import ReactIcon from "../assets/tools/react.png";
import TrelloIcon from "../assets/tools/trello.png";
import TailIcon from "../assets/tools/tailwind.png";

export const Tech = () => {
  const tools = [
    {
      id: 1,
      name: "Figma",
      icon: FigmaIcon,
      description: "Editor Gráfico"
    },
    {
      id: 2,
      name: "C++",
      icon: CIcon,
      description: "Linguagem"
    },
    {
      id: 3,
      name: "JavaScript",
      icon: JsIcon,
      description: "Linguagem"
    },
    {
      id: 4,
      name: "MySQL",
      icon: MysqlIcon,
      description: "Banco de dados"
    },
    {
      id: 5,
      name: "Trello",
      icon: TrelloIcon,
      description: "Gerenciamento"
    },
    {
      id: 6,
      name: "Jira",
      icon: JiraIcon,
      description: "Gerenciamento"
    },
    {
      id: 7,
      name: "React",
      icon: ReactIcon,
      description: "Biblioteca JS"
    },
    {
      id: 8,
      name: "TailwindCSS",
      icon: TailIcon,
      description: "Framework CSS"
    }
  ];

  return (
    <section id="Tecnologias" className="w-full bg-[#201f1f] py-20 scroll-mt-10">
      <div className="max-w-4xl mx-auto px-6 md:px-10">
        
        <div className="text-white text-center md:text-left mb-10">
          <h1 className="text-4xl font-bold mb-4">Tecnologias</h1>
          <p className="text-lg text-white/80">
            Conheça as principais tecnologias e ferramentas que utilizo e tenho conhecimento.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="flex items-center gap-4 p-4 bg-[#292828] hover:bg-[#222020] border border-white/10 rounded-xl"
            >
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-10 h-10 object-contain"
              />

              <div>
                <h2 className="text-white font-semibold text-base">{tool.name}</h2>
                <p className="text-white/60 text-sm">{tool.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tech;
