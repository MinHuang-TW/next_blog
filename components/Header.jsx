import Link from 'next/link';

const Header = () => (
  <header className='w-full inline-block py-8'>
    <div className='md:float-left block'>
      <Link href='/'>
        <span className='cursor-pointer font-bold text-4xl text-white hover:text-white/75 transition duration-500'>
          Quantum Fern
        </span>
      </Link>
    </div>
    <div className='hidden md:float-left md:contents'>
      <span className='md:float-right text-white uppercase ml-4 leading-[2.75rem]'>
        About me
      </span>
    </div>
  </header>
);

export default Header;
