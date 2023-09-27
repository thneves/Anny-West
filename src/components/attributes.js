import Image from 'next/image';
import charsImg from 'public/static/images/chars.jpeg'
import { AiFillCaretDown } from 'react-icons/ai';

const Attributes = () => {
    return (
        <div className="flex sm:flex-row flex-col-reverse h-screen">
        <div className="sm:w-1/2 md:w-2/5 xs:w-full xs:h-3/5">
          <Image src={charsImg} quality={100} className='h-screen'/>
        </div>
        <div className="relative flex flex-col pt-4 md:pt-28 md:pl-16 bg-primary text-text_dark mx-auto xs:w-full sm:w-1/2 md:w-3/5 xs:h-2/5 sm:h-full">

        <div className='absolute left-0 bottom-0 w-4 h-2/5 bg-icon'></div>
          <div className='flex md:flex-row flex-col items-center justfity-start mb-2'>
            <AiFillCaretDown color='#b16c51' size={30} />
            <h2 className='text-text_dark text-2xl xs:text-xl sm:text-2xl md:text-5xl mt-1 font-lovelo'>CARACTERÍSTICAS<br className='xs:hidden'></br> FÍSICAS</h2>
          </div>
          <div className='sm:grid grid-cols-2 sm:gap-8  gap-2 xs:flex xs:flex-col xs:mx-auto sm:ml-20 mt-7'>
            <div className='flex flex-col'>
                <span className='font-bold xs:text-base sm:text-2xl md:text-2xl lg:text-3xl tracking-widest'>Altura</span>
                <span className='font-light font-montserrat xs:text-base sm:text-2xl md:text-2xl lg:text-3xl tracking-widest'>1,70cm</span>
            </div>
            <div className='flex flex-col'>
                <span className='font-bold xs:text-base sm:text-2xl md:text-2xl lg:text-3xl tracking-widest'>Vestuário</span>
                <span className='font-light font-montserrat xs:text-base sm:text-2xl md:text-2xl lg:text-3xl tracking-widest'>P ou 38</span>
            </div>
            <div className='flex flex-col'>
                <span className='font-bold xs:text-base sm:text-2xl md:text-2xl lg:text-3xl tracking-widest'>Peso</span>
                <span className='font-light font-montserrat xs:text-base sm:text-2xl md:text-2xl lg:text-3xl tracking-widest'>56kg</span>
            </div>
            <div className='flex flex-col'>
                <span className='font-bold xs:text-base sm:text-2xl md:text-2xl lg:text-3xl tracking-widest'>Sapatos</span>
                <span className='font-light font-montserrat xs:text-base sm:text-2xl md:text-2xl lg:text-3xl tracking-widest'>37</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Attributes;
