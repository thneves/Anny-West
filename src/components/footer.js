import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className="triangle">
       <FontAwesomeIcon icon={faPlay} className='text-icon icon-config'></FontAwesomeIcon>
        <h1 className='text-text_dark text-6xl font-semibold mt-4'>ANNY WEST</h1>
        <h2 className='text-text_dark text-4xl font-light font-montserrat tracking-widest'>modelo</h2>
      </div>
      <div className="font-montserrat font-light font-1xl">
        <span >@annywest</span>
        <span>(61)98573-4655</span>
        <span>annywestsoares@gmail.com</span>
      </div>
    </footer>
  )
}

export default Footer;
