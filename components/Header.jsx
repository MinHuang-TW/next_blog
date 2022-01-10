import Link from 'next/link';

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-white/60 py-8'>
        <div className='md:float-left block'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-white hover:text-white/75 transition duration-500'>
              Quantum Fern
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {/* {categories.map(({ name, slug }) => (
            <Link key={slug} href={`/category/${slug}`}>
              <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                {name}
              </span>
            </Link>
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default Header;