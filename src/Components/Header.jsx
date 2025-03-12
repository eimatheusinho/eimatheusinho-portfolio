  import { useState } from "react";
  import LogoIcon from "../assets/pra-cima.png";
  import MenuIcon from "../assets/menu.png";
  import CloseIcon from "../assets/close.png";

  export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(""); 

    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };

    const handleLinkClick = (section) => {
      setActiveSection(section);
      setMenuOpen(false);
    };

    return (
      <header className="py-9.5 fixed border-b border-white/20 w-full top-0 left-0 z-50 bg-[#201f1f] shadow-md">
        <div
          className="text-white/90 text-l gap-3.5 font-medium cursor-pointer fixed top-6 left-4 md:left-8 rounded-lg flex justify-center items-center"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img src={LogoIcon} alt="Logo" className="h-8 w-8 cursor-pointer relative top-[-1px]" />
          MATHEUS SANTOS
        </div>

        <div className="fixed top-3 left-1/2 -translate-x-1/2 inline-flex justify-center items-center 
          md:border border-white/15 rounded-xl bg-[#fff1]/80">
          <div className="hidden md:flex gap-5 text-sm md:p-2">
            {["Sobre", "Tecnologias", "Projetos", "Contato"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => handleLinkClick(section)}
                className={`text-white hover:text-gray-300 transition px-4 py-2 rounded-lg 
                ${activeSection === section ? "outline outline-white/50" : ""}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>

        <div className="fixed top-6 right-4 md:right-20 flex gap-4 items-center">
          <button className="relative text-lg cursor-pointer text-white/90"></button>

          <button onClick={toggleMenu} className="md:hidden z-50">
            <img src={MenuIcon} alt="Menu" className="h-8 w-8" />
          </button>
        </div>

        <div className={`fixed top-0 right-0 h-screen w-3/4 bg-[#242424] shadow-lg transform transition-transform duration-300 
          ${menuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}>

        <div className="flex justify-end p-4">
          <button onClick={() => setMenuOpen(false)} className="text-white hover:text-gray-400 transition">
            <img src={CloseIcon} alt="Fechar" className="h-8 w-8" />
          </button>
        </div>

          <div className="flex flex-col items-center pt-20 gap-6">
            {["Sobre", "Tecnologias", "Projetos", "Contato"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => handleLinkClick(section)}
                className={`text-white text-lg hover:text-gray-300 transition px-4 py-2 rounded-lg 
                ${activeSection === section ? "border border-white/50" : ""}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </header>
    );
  };

  export default Header;
