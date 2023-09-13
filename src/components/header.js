import Image from 'next/image';
import heroImage from 'public/static/images/header-main.jpeg'

const Header = () => {
  return (
    <header className="flex flex-row h-screen">
      <div className="flex flex-col items-center justify-center mx-auto w-1/2 bg-primary">
        <div className='triangle'></div>
        <h1 className='text-text_dark'>ANNY WEST</h1>
        <h2 className='text-text_dark'>modelo</h2>
      </div>
      <div className="w-1/2">
        <Image src={heroImage} quality={100} className='h-screen'/>
      </div>
    </header>
  );
}

export default Header;
