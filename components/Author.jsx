import Image from 'next/image';

const Author = ({ author }) => (
  <div className='author-card p-8 mb-8 rounded-lg flex items-center flex-col lg:flex-row gap-6'>
    {author.photo && (
      <Image
        className='align-middle rounded-full'
        src={author.photo.url}
        width={100}
        height={100}
        alt={author.name}
        unoptimized
      />
    )}
    <div className='text-white text-center lg:text-left'>
      <h3 className='text-xl font-bold mb-2'>{author.name}</h3>
      <p>{author.bio}</p>
    </div>
  </div>
);

export default Author;
