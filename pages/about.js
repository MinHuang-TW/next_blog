import { getAboutDetails } from '../services';
import Image from 'next/image';

const about = ({ author }) => (
  <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
    <section className='author-card p-8 rounded-lg lg:text-center'>
      <Image
        className='rounded-full'
        src={author.photo.url}
        width={160}
        height={160}
        alt={author.name}
      />
      <div className='text-white mt-4'>
        <h1 className='text-xl font-bold mb-3'>{author.name}</h1>
        <p>{author.bio}</p>
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
