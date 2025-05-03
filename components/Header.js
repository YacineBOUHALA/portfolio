import Image from 'next/image';
import Link from 'next/link';
import Socials from '../components/Socials'

const Header = () => {
  return <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-1'>

        <Link href={'/'}>
          <div className='h-[50px] w-[260px] flex items-center justify-center'>
            <span className='font-extrabold font-mono text-[35px]'>yacine</span>
            <span className='font-[200] pl-1 font-sora text-[35px]' >bouhala</span> 
            <span className='text-red-700 font-bold md:text-lg'>.</span>
          </div>
        </Link>
        <Socials/>
      </div>
    </div>
  </header>;
};

export default Header;
