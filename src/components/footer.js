import { AiFillCaretDown } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className='bg-white flex flex-col items-center pb-20'>
      <div className="flex flex-col items-center pt-28 mb-5">
        <AiFillCaretDown color='#b16c51' size={80} />
        <h1 className='text-text_dark text-6xl font-lovelo mt-1'>ANNY WEST</h1>
        <h2 className='text-text_dark text-4xl font-light font-montserrat tracking-widest'>modelo</h2>
      </div>
      <div className="flex flex-col items-center italic font-montserrat text-text_dark font-light font-1xl tracking-widest gap-1">
        <span><a href='https://www.instagram.com/annywest/' target='_blank'>@annywest</a></span>
        <span>(61)98573-4655</span>
        <span>annywestsoares@gmail.com</span>
      </div>
    </footer>
  )
}

export default Footer;
