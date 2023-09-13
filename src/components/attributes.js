import Image from 'next/image';
import charsImg from 'public/static/images/chars.jpeg'
import { AiFillCaretDown } from 'react-icons/ai';

const Attributes = () => {
    return (
        <div className="flex flex-row h-screen">
        <div className="w-2/5">
          <Image src={charsImg} quality={100} className='h-screen'/>
        </div>
        <div className="flex flex-col items-center justify-center mx-auto w-3/5 bg-primary text-text_dark">
          <div className='flex flex-row items-center justify-start'>
            <AiFillCaretDown color='#b16c51' size={80} />
            <h2 className='text-text_dark text-5xl font-semibold mt-4'>CARACTERÍSTICAS FÍSICAS</h2>
          </div>
          <div>
            <div>
                <span>Altura</span>
                <span>1,70cm</span>
            </div>
            <div>
                <span>Vestuário</span>
                <span>P ou 38</span>
            </div>
            <div>
                <span>Peso</span>
                <span>56kg</span>
            </div>
            <div>
                <span>Sapatos</span>
                <span>37</span>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Attributes;
