import Image from 'next/image';
import aboutImg from 'public/static/images/about.jpeg'
import { AiFillCaretDown } from 'react-icons/ai';

const About = () => {
  return (
    <div className="flex sm:flex-row flex-col h-screen">
      <div className="flex flex-col pt-4 w-full pl-5 pb-4 sm:pt-8 md:pt-28 md:pl-16 h-2/5 xs:h-2/5 sm:h-full sm:mx-auto sm:w-1/2 md:w-3/5 w-3/5 bg-white">
        <div className='flex sm:flex-row flex-col items-center justfity-start mb-1 sm:mb-2 h-1/5 sm:mb-0'>
          <AiFillCaretDown color='#b16c51' size={60} />
          <h2 className='text-text_dark text-2xl ml-1 sm:sm:text-4xl md:text-5xl mt-1 sm:mt-2 font-lovelo'>SOBRE MIM</h2>
        </div>
        <div className='pl-2 sm:pl-4 flex'>
          <div className='w-0.5 sm:w-2 h-6/6 bg-dark ml-2'></div>
          <div className='flex flex-col items-left ml-5 sm:ml-10'>
            <span
              className='text-text_dark text-base sm:text-1xl font-light font-montserrat tracking-widest mb-1 sm:mb-1'>
              23 anos
            </span>
            <span
              className='text-text_dark text-base sm:text-1xl font-light font-montserrat tracking-widest mb-1 sm:mb-1'>
              FLORIANÓPOLIS - SC
            </span>
            <span
              className='text-text_dark text-base sm:text-1xl font-light font-montserrat tracking-widest mb-2 sm:mb-4'>
              Modelo
            </span>
            <p className='font-montserrat text-md xs:text-md sm:text-left sm:text-base text-text_dark font-light w-11/12'>
              <strong>Hi! </strong>
              Eu sou a Anny West, seja bem-vindo(a) a me conhecer de uma forma mais profunda.
              <br/>
              Ser modelo e jornalista são minhas profissões, minhas paixões e o que faz minha criatividade
              expandir e essa forma de me expressar se torna trabalho e produção.
              <br/>
              Compartilhar um pouco da minha essência e do meu trabalho é uma forma de propagar a minha arte.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full xs:h-3/5 sm:w-1/2 w-2/5 h-1/5">
        <Image src={aboutImg} quality={100} className='xs:h-full sm:h-screen'/>
      </div>
    </div>
  );
}

export default About;
