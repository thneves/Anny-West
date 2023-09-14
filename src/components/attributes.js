import Image from 'next/image';
import charsImg from 'public/static/images/chars.jpeg'
import { AiFillCaretDown } from 'react-icons/ai';

const Attributes = () => {
    return (
        <div className="flex flex-row h-screen">
        <div className="w-2/5">
          <Image src={charsImg} quality={100} className='h-screen'/>
        </div>
        <div className="flex flex-col pt-28 pl-16 mx-auto w-3/5 bg-primary text-text_dark">
          <div className='flex flex-row justfity-start mb-2'>
            <AiFillCaretDown color='#b16c51' size={80} />
            <h2 className='text-text_dark text-5xl mt-1 font-lovelo'>CARACTERÍSTICAS<br></br> FÍSICAS</h2>
          </div>
          <div className='grid grid-cols-2 gap-y-8  ml-20 mt-7 w-3/5'>
            <div className='flex flex-col'>
                <span className='font-bold text-3xl tracking-widest mr-[-100px]'>Altura</span>
                <span className='font-light font-montserrat text-3xl tracking-widest'>1,70cm</span>
            </div>
            <div className='flex flex-col'>
                <span className='font-bold text-3xl tracking-widest'>Vestuário</span>
                <span className='font-light font-montserrat text-3xl tracking-widest'>P ou 38</span>
            </div>
            <div className='flex flex-col'>
                <span className='font-bold text-3xl tracking-widest'>Peso</span>
                <span className='font-light font-montserrat text-3xl tracking-widest'>56kg</span>
            </div>
            <div className='flex flex-col'>
                <span className='font-bold text-3xl tracking-widest'>Sapatos</span>
                <span className='font-light font-montserrat text-3xl tracking-widest'>37</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Attributes;
