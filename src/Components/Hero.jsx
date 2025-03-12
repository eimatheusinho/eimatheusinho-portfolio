import MinhaFoto from '../assets/img/minhaFoto.jpg';
import DownloadIcon from '../assets/download.png';
import Curriculo from '../assets/Resume/Currículo_MatheusCW.pdf'; 

export const Hero = () => {
  return (
    <section className='w-full py-30 bg-[#201f1f] mt-18'>
      <div className='max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20 px-6 md:px-4'>

        <div className='text-white text-center md:text-left md:w-1/2'>
          <p className='text-blue-400 font-medium py-1'>Olá, meu nome é</p>
          <h1 className='text-4xl font-bold mb-4'>Matheus E. Santos</h1>
          <p className='text-lg text-white/80 mb-6'>
            Bem-vindo ao meu portfólio, aqui você encontrará meus projetos, habilidades e um pouco sobre minha trajetória!
          </p>
          <div className='py-2'>
            <a href={Curriculo} target="_blank" rel="noopener noreferrer" className="inline-block">
              <button className='cursor-pointer relative py-2 px-4 rounded-lg font-medium text-white text-s bg-blue-500 hover:bg-blue-600 flex items-center gap-2 transition'>
                Currículo
                <img src={DownloadIcon} alt="Download" className='w-4 h-4' />
              </button>
            </a>
          </div>
        </div>

        <div className='h-64 w-64 border border-white/15 rounded-xl overflow-hidden shadow-md'>
          <img src={MinhaFoto} alt="Foto" className='h-full w-full object-cover' />
        </div>

      </div>
    </section>
  );
};

export default Hero;
