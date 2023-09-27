import Header from '../components/header'
import About from '../components/about'
import Footer from '@/components/footer'
import Attributes from '@/components/attributes'
import Facts from '@/components/facts'
import NiceToMeetYou from '@/components/nicet_to_meet_you'

export default function Home() {
  return (
    <main className='min-w-[280px]'>
      <Header />
      <About  />
      <Attributes />
      <NiceToMeetYou />
      {/*<Facts />
       <Footer />*/}
    </main>
  )
}
