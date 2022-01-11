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
    <div className='hidden md:float-left md:contents gap-4'>
      {[
        { label: 'ABOUT ME', path: '/about' },
        { label: 'BLOG', path: '/' },
      ].map(({ label, path }) => (
        <Link key={label} href={path}>
          <span className='md:float-right text-white hover:text-white/60 transition duration-500 uppercase ml-8 leading-[2.75rem] cursor-pointer'>
            {label}
          </span>
        </Link>
      ))}
    </div>
  </header>
);

export default Header;
