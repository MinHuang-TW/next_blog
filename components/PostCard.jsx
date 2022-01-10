import { useReadingTime } from 'react-reading-time-estimator';
import moment from 'moment';
import Link from 'next/link';
import Image from 'next/image';

const PostCard = ({ post }) => {
  const { text } = useReadingTime(post?.content?.text);
  return (
    <Link href={`/post/${post.slug}`}>
      <article className='bg-white shadow-lg rounded-lg p-0 mb-8 cursor-pointer transition duration-500'>
        <div className='relative overflow-hidden pb-80'>
          <Image
            className='rounded-t-lg'
            src={post.featuredImage.url}
            alt={post.title}
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            priority
          />
        </div>
        <div className='p-6'>
          <small className='text-gray-500'>
            {moment(post.createdAt).format('MMM DD, YYYY')}
          </small>
          <h1 className='my-2 text-2xl font-semibold'>{post.title}</h1>
          <p className='text-gray-700 font-normal mb-8'>{post.excerpt}</p>
          <div className='flex items-center justify-between w-full text-gray-500'>
            <div className='flex items-center gap-2 mr-8'>
              {post.author?.photo && (
                <img
                  className='align-middle rounded-full'
                  height={30}
                  width={30}
                  src={post.author.photo.url}
                  alt={post.author.name}
                />
              )}
              <p className='inline align-middle'>{post.author.name}</p>
            </div>
            <small className='uppercase mx-2'>{text}</small>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default PostCard;
