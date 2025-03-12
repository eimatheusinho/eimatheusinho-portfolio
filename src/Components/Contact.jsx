import GitIcon from '../assets/github.png';
import InIcon from '../assets/linkedin.png';
import InstaIcon from '../assets/instagram.png';

export const Contact = () => {
  return (
    <section id="Contato" className="w-full bg-[#201f1f] py-20 scroll-mt-10">
      <div className="max-w-5xl mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-12">
        
        <div className="text-white text-center md:text-left max-w-md px-10">
          <h1 className="text-4xl font-bold mb-4">Entre em contato</h1>
          <p className="text-lg text-white/70 mb-6">
            Mande aqui sua proposta de trabalho!
          </p>
          
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="https://github.com/eimatheusinho" target="_blank" rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
              <img src={GitIcon} alt="GitHub" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/matheus-eduardo-dos-santos-ti/" target="_blank" rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
              <img src={InIcon} alt="LinkedIn" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/eimatheusinho/" target="_blank" rel="noopener noreferrer"
            className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition">
              <img src={InstaIcon} alt="Instagram" className="w-6 h-6" />
            </a>
          </div>
        </div>

        <form 
      action="https://getform.io/f/bdrnkkmb" 
      method="POST" 
      className="w-full md:w-1/2 bg-[#292828] p-6 rounded-lg border border-white/10"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full">
            <label className="text-white text-sm">Nome</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Seu nome" 
              className="w-full p-3 mt-1 bg-[#1f1e1e] border border-white/10 rounded-lg text-white outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="w-full">
            <label className="text-white text-sm">Email</label>
            <input 
              type="email" 
              name="email" 
              placeholder="Seu e-mail" 
              className="w-full p-3 mt-1 bg-[#1f1e1e] border border-white/10 rounded-lg text-white outline-none focus:border-blue-400"
              required
            />
          </div>
        </div>

        <div>
          <label className="text-white text-sm">Mensagem</label>
          <textarea 
            name="message" 
            rows="4" 
            placeholder="Sua mensagem..." 
            className="w-full p-3 mt-1 bg-[#1f1e1e] border border-white/10 rounded-lg text-white outline-none focus:border-blue-400"
            required
          ></textarea>
        </div>

        <button 
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 transition text-white font-semibold py-3 rounded-lg text-lg cursor-pointer"
        >
          Enviar
        </button>
      </div>
    </form>

      </div>
    </section>
  );
};

<form action="https://getform.io/f/bdrnkkmb"
  method="POST"
  classname="xl:pl-10 2x1:pl-20"
/>
export default Contact;
