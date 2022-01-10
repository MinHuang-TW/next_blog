import moment from 'moment';
import Link from 'next/link';

const PostCard = ({ post }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 pb-12 mb-8'>
      <div className='relative overflow-hidden pb-80 mb-6'>
        <img
          className='object-top absolute h-70 w-full object-cover rounded-t-lg'
          src={post.featuredImage.url}
          alt={post.title}
        />
      </div>
      <h1 className='transition duration-500 text-center mb-8 cursor-pointer hover:text-pink-600 text-2xl font-semibold'>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className='block lg:flex text-center items-center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
          {post.author?.photo && (
            <img
              className='align-middle rounded-full'
              height={30}
              width={30}
              src={post.author.photo.url}
              alt={post.author.name}
            />
          )}
          <p className='inline align-middle text-gray-700 ml-2'>
            {post.author.name}
          </p>
        </div>
        <div className='font-medium text-gray-700'>
          <span>{moment(post.createdAt).format('MMM DD, YYYY')}</span>
        </div>
      </div>
      <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>
        {post.excerpt}
      </p>
      <div className='text-center'>
        <Link href={`/post/${post.slug}`}>
          <span className='transition duration-500 hover:bg-pink-500 bg-pink-600 rounded-full text-white font-medium px-6 py-3 cursor-pointer'>
            Read more
          </span>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
