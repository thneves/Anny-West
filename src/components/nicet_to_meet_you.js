import Image from 'next/image';
import prazerImg from 'public/static/images/prazer.jpeg'

const NiceToMeetYou = () => {
  return(
    <div className='bg-half-colors h-screen relative flex'>
        <h5 className='absolute xs: mt-2 sm:left-28 sm:top-40 font-lovelo text-text_dark sm:text-5xl xs:text-4xl'>PRAZER,</h5>
        <div className='xs:hidden absolute bottom-32 w-1/12 h-2/5 bg-icon'></div>
      <Image src={prazerImg} quality={100} className='h-4/5 sm:w-2/6 mx-auto self-center'/>
    </div>
  )
}

export default NiceToMeetYou;
