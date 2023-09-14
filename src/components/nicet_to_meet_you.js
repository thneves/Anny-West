import Image from 'next/image';
import prazerImg from 'public/static/images/prazer.jpeg'

const NiceToMeetYou = () => {
  return(
    <div className='bg-half-colors h-screen relative flex'>
        <h5 className='absolute left-28 top-40 font-lovelo text-text_dark text-5xl'>PRAZER,</h5>
        <div className='absolute bottom-32 w-1/12 h-2/5 bg-icon'></div>
      <Image src={prazerImg} quality={100} className='h-4/5 w-2/6 mx-auto self-center'/>
    </div>
  )
}

export default NiceToMeetYou;
