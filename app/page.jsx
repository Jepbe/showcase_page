import Navbar from './ui/navbar'
import Overlayiccons from './ui/overlayiccons/overlayicccons';
import Projects from './ui/projects/projects';

export default function Home() {
  return ( 
<>
    <main className='flex justify-center items-center h-[90vh]'>
      <h1>Hello...</h1>
      <Projects />
    </main>


<Overlayiccons/>
</>
  )
}
