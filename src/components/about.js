import Image from 'next/image';
import aboutImg from 'public/static/images/about.jpeg'

const About = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col items-center justify-center mx-auto w-3/5 bg-white">
        <div className='flex flex-row items-center justify-start'>
          <div className='triangle'></div>
          <h2 className='text-text_dark text-5xl font-semibold mt-4'>SOBRE MIM</h2>
        </div>
        <div className='flex flex-col items-left ml-20 mr-20'>
          <span className='text-text_dark text-3xl font-light font-montserrat tracking-widest'>23 anos</span>
          <span className='text-text_dark text-3xl font-light font-montserrat tracking-widest'>FLORIANÓPOLIS - SC</span>
          <span className='text-text_dark text-3xl font-light font-montserrat tracking-widest'>modelo</span>
          <p className='font-montserrat text-text_dark'>
            <strong>Hi! </strong>
            Eu sou a Anny West, seja bem-vindo(a) a me conhecer de uma forma mais profunda.
            <br/>
            Ser modelo e jornalista são minhas profissões, minhas paixões e o que faze minha criatividade
            expandir e a forma de me expressa se torna trabalho e produção.
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
