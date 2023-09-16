import Image from 'next/image';
import heroImage from 'public/static/images/header-main.jpeg'
import { AiFillCaretDown } from 'react-icons/ai';

const Header = () => {
  return (
    <header className="flex sm:flex-row flex-col h-screen">
      <div className="flex flex-col items-center justify-center mx-auto lg:w-1/2 md:w-2/5 sm:w-2/5 w-full sm:h-screen pt-3 h-1/3 bg-primary">
        <AiFillCaretDown color='#b16c51' size={100} />
        <h1 className='xl:text-header lg:text-6xl md:text-5xl sm:text-4xl  text-5xl text-text_dark font-semibold font-lovelo'>ANNY WEST</h1>
        <h2 className='xl:text-6xl md:text-4xl sm:text-3xl sm:text-3xl text-3xl text-text_dark font-light font-montserrat tracking-widest'>modelo</h2>
      </div>
      <div className="sm:w-3/5 md:w-3/5">
        <Image src={heroImage} quality={80} className='h-screen'/>
      </div>
    </header>
  );
}

export default Header;
