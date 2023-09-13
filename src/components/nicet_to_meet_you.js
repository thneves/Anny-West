import Image from 'next/image';
import prazerImg from 'public/static/images/prazer.jpeg'

const NiceToMeetYou = () => {
  return(
    <div>
      <span>PRAZER,</span>
      <Image src={prazerImg} quality={100} className='h-screen'/>
    </div>
  )
}

export default NiceToMeetYou;
