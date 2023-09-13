import Image from 'next/image';
import heroImage from 'public/static/images/header-main.jpeg'
import { AiFillCaretDown } from 'react-icons/ai';

const Header = () => {
  return (
    <header className="flex flex-row h-screen">
      <div className="flex flex-col items-center justify-center mx-auto w-1/2 bg-primary">
        <AiFillCaretDown color='#b16c51' size={80} />
        <h1 className='text-text_dark text-header font-semibold mt-4'>ANNY WEST</h1>
        <h2 className='text-text_dark text-6xl font-light font-montserrat tracking-widest'>modelo</h2>
      </div>
      <div className="w-1/2">
        <Image src={heroImage} quality={100} className='h-screen'/>
      </div>
    </header>
  );
}

export default Header;
