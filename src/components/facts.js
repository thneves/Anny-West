import Image from 'next/image';
import factsImg from 'public/static/images/facts.jpeg'
import { AiFillCaretDown } from 'react-icons/ai';

const Facts = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col items-center justify-center mx-auto w-1/2 bg-primary">
        <div className='flex flex-row items-center justify-start'>
          <AiFillCaretDown color='#b16c51' size={80} />
          <h2 className='text-text_dark text-5xl font-semibold mt-4'>CURIOSIDADES</h2>
        </div>
        <div className='flex flex-col items-left ml-20 mr-20'>
          <div>
            <span className='text-text_dark text-3xl font-light font-montserrat tracking-widest'>Hobby Favorito</span>
            <span className='text-text_dark text-3xl font-light font-montserrat tracking-widest'>Jornalismo</span>
          </div>
          <div>
            <span className='text-text_dark text-3xl font-light font-montserrat tracking-widest'>Esportes</span>
            <span className='text-text_dark text-3xl font-light font-montserrat tracking-widest'>Surf e atividades ao ar livre</span>
          </div>
          <div>
            <span className='text-text_dark text-3xl font-light font-montserrat tracking-widest'>Cor Favorita</span>
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
