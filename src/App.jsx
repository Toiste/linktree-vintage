import profilePhoto from './assets/mulherVintage.jpeg'
import {facebook, instagram, youtube, pinterest, tiktok} from './assets/index.js'
import Button from './ui/components/button.jsx'

function App() {

  return (
    <main className='flex relative w-screen h-screen justify-center items-center'>
      <div className='flex flex-col items-center'>
        <img src={profilePhoto} alt="Profile photo" className='border-solid border-4 border-[#6C8A59] rounded-full h-[150px] w-[150px] sm:h-[200px] sm:w-[200px]' />
        <h1 className='text-[20px] sm:text-[26px] text-[#161C12] mt-[25px] font-black'>Lindsey Amaral</h1>
        <h2 className='text-[14px] sm:text-[20px] text-[#161C12]'>fashion tip,daily vlog, health</h2>
        <div className='flex flex-col space-y-[20px] mt-[45px]'>
         <Button>My blog about fashion</Button>
         <Button>trip schedule</Button>
         <Button>Improve your Health</Button>
         <Button>Online Store</Button>
        </div>
        
        <div className='flex mt-[24px] space-x-[15px]'>
          <a href="#"><img src={facebook} alt="facebook icon" className='sm:h-[30px] sm:w-[30px]' /></a>
          <a href="#"><img src={instagram} alt="instagram icon" className='sm:h-[30px] sm:w-[30px]' /></a>
          <a href="#"><img src={youtube} alt="youtube icon" className='sm:h-[30px] sm:w-[30px]' /></a>
          <a href="#"><img src={pinterest} alt="pinterest icon" className='sm:h-[30px] sm:w-[30px]' /></a>
          <a href="#"><img src={tiktok} alt="tiktok icon" className='sm:h-[30px] sm:w-[30px]' /></a>
        </div>
        <p className=' text-[10px] sm:text-[16px] mt-[15px]'>Welcome to my social Networks</p>
      </div>
      
    </main>
  )
}

export default App
