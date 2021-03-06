import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import moment from 'moment';

import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    let isMounted = true;
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        if (isMounted) setRelatedPosts(result);
      });
    } else {
      getRecentPosts().then((result) => {
        if (isMounted) setRelatedPosts(result);
      });
    }
    return () => (isMounted = false);
  }, [slug]);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 grid gap-8'>
      <h2 className='text-xl font-semibold border-b pb-4'>
        {slug ? 'Related posts' : 'Recent posts'}
      </h2>
      {relatedPosts.length ? (
        relatedPosts.map((post) => (
          <div key={post.title} className='flex items-center w-full'>
            <div className='flex-none relative overflow-hidden w-14 h-14 rounded-full'>
              <Image
                src={post.featuredImage.url}
                alt={post.title}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
            </div>
            <div className='flex-grow ml-4'>
              <small className='text-gray-500 block'>
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </small>
              <Link className='text-md' href={`/post/${post.slug}`}>
                <span className='hover:text-teal-600 transition duration-200 cursor-pointer'>
                  {post.title}
                </span>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p className='text-md'>{`No ${slug ? 'related' : 'recent'} post`}</p>
      )}
    </div>
  );
};

export default PostWidget;
