import Image from 'next/image';
import aboutImg from 'public/static/images/about.jpeg'
import { AiFillCaretDown } from 'react-icons/ai';

const About = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col pt-28 pl-16 mx-auto w-3/5 bg-white">
        <div className='flex flex-row justfity-start mb-2'>
          <AiFillCaretDown color='#b16c51' size={80} />
          <h2 className='text-text_dark text-5xl font-semibold mt-1'>SOBRE MIM</h2>
        </div>
        <div className='flex flex-col items-left ml-20 mr-20'>
          <span className='text-text_dark text-2xl font-light font-montserrat tracking-widest mb-3'>23 anos</span>
          <span className='text-text_dark text-2xl font-light font-montserrat tracking-widest mb-3'>FLORIANÓPOLIS - SC</span>
          <span className='text-text_dark text-2xl font-light font-montserrat tracking-widest mb-4'>modelo</span>
          <p className='font-montserrat text-text_dark font-light  text-2xl w-11/12'>
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
      <div className="w-2/5">
        <Image src={aboutImg} quality={100} className='h-screen'/>
      </div>
    </div>
  );
}

export default About;
