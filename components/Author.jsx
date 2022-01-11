import Link from 'next/link';
import Image from 'next/image';

const Author = ({ author }) => (
  <div className='author-card p-8 mb-8 rounded-lg flex flex-col lg:flex-row items-center gap-6'>
    <Image
      className='rounded-full'
      src={author.photo.url}
      width={100}
      height={100}
      alt={author.name}
      unoptimized
    />
    <div className='flex-1 text-white grid gap-3 text-center lg:text-left'>
      <h3 className='text-xl font-bold'>{author.name}</h3>
      <p>{author.bio}</p>
      <Link href='/about'>
        <span className='border border-white px-4 py-1 rounded-full hover:bg-white hover:text-teal-500 transition duration-500 mt-2 place-self-start mx-auto lg:mx-0 cursor-pointer'>
          About me
        </span>
      </Link>
    </div>
  </div>
);

export default Author;
