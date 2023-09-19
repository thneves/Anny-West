import Image from 'next/image';
import charsImg from 'public/static/images/chars.jpeg'
import { AiFillCaretDown } from 'react-icons/ai';

const Attributes = () => {
    return (
        <div className="flex flex-row h-screen">
        <div className="sm:w-1/2 md:w-2/5 xs:w-2/3">
          <Image src={charsImg} quality={100} className='h-screen'/>
        </div>
        <div className="relative flex flex-col pt-4 md:pt-28 md:pl-16 bg-primary text-text_dark mx-auto xs:w-1/3 sm:w-1/2 md:w-3/5 ">

        <div className='absolute left-0 bottom-0 w-4 h-2/5 bg-icon'></div>
          <div className='flex md:flex-row flex-col items-center justfity-start mb-2'>
            <AiFillCaretDown color='#b16c51' size={30} />
            <h2 className='text-text_dark text-2xl xs:text-xl sm:text-3xl md:text-5xl mt-1 font-lovelo'>CARACTERÍSTICAS<br></br> FÍSICAS</h2>
          </div>
          <div className='md:grid grid-cols-2  xs:mx-auto sm:ml-20 mt-7 w-3/5'>
            <div className='flex flex-col'>
                <span className='font-bold xs:text-2xl text-3xl tracking-widest'>Altura</span>
                <span className='font-light font-montserrat xs:text-2xl sm:text-3xl tracking-widest'>1,70cm</span>
            </div>
            <div className='flex flex-col'>
                <span className='font-bold xs:text-2xl sm:text-3xl tracking-widest'>Vestuário</span>
                <span className='font-light font-montserrat xs:text-2xl sm:text-3xl tracking-widest'>P ou 38</span>
            </div>
            <div className='flex flex-col'>
                <span className='font-bold xs:text-2xl sm:text-3xl tracking-widest'>Peso</span>
                <span className='font-light font-montserrat xs:text-2xl sm:text-3xl tracking-widest'>56kg</span>
            </div>
            <div className='flex flex-col'>
                <span className='font-bold xs:text-2xl sm:text-3xl tracking-widest'>Sapatos</span>
                <span className='font-light font-montserrat xs:text-2xl sm:text-3xl tracking-widest'>37</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Attributes;
