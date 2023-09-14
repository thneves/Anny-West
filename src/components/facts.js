import Image from 'next/image';
import factsImg from 'public/static/images/facts.jpeg'
import { AiFillCaretDown } from 'react-icons/ai';

const Facts = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col  pt-28 pl-16 mx-auto w-1/2 bg-primary">
        <div className='flex flex-row items-center justify-start mb-6'>
          <AiFillCaretDown color='#b16c51' size={80} />
          <h2 className='text-text_dark text-5xl font-lovelo d mt-4'>CURIOSIDADES</h2>
        </div>
        <div className='flex flex-col gap-5 items-left ml-20 mr-20'>
          <div className='flex flex-col'>
            <span className='text-text_dark text-4xl font-semibold tracking-widest'>Hobby Favorito</span>
            <span className='text-text_dark text-3xl font-light font-montserrat tracking-widest'>Jornalismo</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-text_dark text-4xl font-semibold tracking-widest'>Esportes</span>
            <span className='text-text_dark text-3xl font-light font-montserrat tracking-widest'>Surfe e atividades ao ar livre</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-text_dark text-4xl font-semibold tracking-widest'>Cor Favorita</span>
            <span className='text-text_dark text-3xl font-light font-montserrat tracking-widest'>Azul</span>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <Image src={factsImg} quality={100} className='h-screen'/>
      </div>
    </div>
  );
}

export default Facts;
