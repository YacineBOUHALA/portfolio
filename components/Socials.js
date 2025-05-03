import Link from 'next/link';

import {RiInstagramLine, RiFacebookLine, RiLinkedinLine, RiGithubLine} from 'react-icons/ri'

const Socials = () => {
  return <div className='flex items-center gap-x-5 text-lg'>
    <Link href={'https://fr.linkedin.com/in/yacine-bouhala-579421204'} className='hover:text-accent transition-all duration-300'>
      <RiLinkedinLine/>
    </Link>
    <Link href={'https://github.com/YacineBOUHALA'} className='hover:text-accent transition-all duration-300'>
      <RiGithubLine/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiFacebookLine/>
    </Link>
    <Link href={''} className='hover:text-accent transition-all duration-300'>
      <RiInstagramLine/>
    </Link>
  </div>;
};

export default Socials;
