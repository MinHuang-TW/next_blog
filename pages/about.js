import { getAboutDetails } from '../services';
import Image from 'next/image';

const about = ({ author }) => (
  <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
    <section className='author-card p-8 rounded-lg lg:text-center flex flex-col justify-between gap-8'>
      <div className='text-white'>
        <Image
          className='rounded-full'
          src={author.photo.url}
          width={160}
          height={160}
          alt={author.name}
        />
        <h1 className='text-xl font-bold my-4'>{author.name}</h1>
        <p>{author.bio}</p>
      </div>
      <div className='flex gap-6 justify-start lg:justify-center'>
        <a
          className='cursor-pointer fill-white hover:opacity-50 transition duration-500'
          href='https://www.linkedin.com/in/chunwei-hsu-73a990129/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='24'
            height='24'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M6.94 5a2 2 0 1 1-4-.002 2 2 0 0 1 4 .002zM7 8.48H3V21h4V8.48zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91l.04-1.68z' />
          </svg>
        </a>
        <a
          className='cursor-pointer fill-white hover:opacity-50 transition duration-500'
          href='mailto:c.hsu.delft@gmail.com'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            width='24'
            height='24'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm17 4.238l-7.928 7.1L4 7.216V19h16V7.238zM4.511 5l7.55 6.662L19.502 5H4.511z' />
          </svg>
        </a>
      </div>
    </section>
    <section className='bg-white shadow-lg rounded-lg p-8 lg:col-span-3'>
      <div className='border-l-2 border-l-teal-500 pl-3 text-gray-500 italic mb-8'>
        Hi ! I am glad that you are reading this very first post of this blog.
        Let me describe a bit about myself and the objectives of this blog.
      </div>
      <div className='mb-8'>
        <h2 className='text-lg font-semibold my-3'>About me</h2>
        <p>
          I am a physicist by training; I have been living in Asia, North
          America and Europe for many years. During these years, I have
          accumulated quite some stories and observations that I would like to
          share with the world. At the time of this very first post post, I am a
          doing experimental researches in the field of Quantum Physics and
          Nanotechnology as a PhD Candidate.
        </p>
      </div>
      <div className='mb-8'>
        <h2 className='text-lg font-semibold my-3'>Objectives</h2>
        <p>
          There are few topics which I plan to share including: Quantum physics,
          Technology, Thoughts about education and research, and some other
          personal observations about the modern society. For example, I plan to
          write my first few posts about the higher education systems that I
          have experienced across the 3 continents, and also a comment about
          regarding the chip shortage which happens during this Covid-19
          pandemic. I also plan to write some practical articles related to
          physics and experiments, such as some tutorials for some common
          questions young students might encounter.
        </p>
      </div>
      <p>
        I hope this blog can be a place to share more of my ideas and can be
        beneficial for the readers.
      </p>
    </section>
  </div>
);

export default about;

export const getStaticProps = async () => {
  const author = await getAboutDetails();
  return {
    props: { author },
  };
};
