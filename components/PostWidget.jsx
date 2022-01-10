import { useState, useEffect } from 'react';
import Link from 'next/link';
import moment from 'moment';

import { getRecentPosts, getSimilarPosts } from '../services';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        {slug ? 'Related posts' : 'Recent posts'}
      </h3>
      {relatedPosts.length ? (
        relatedPosts.map((post) => (
          <div key={post.title} className='flex items-center w-full mb-4'>
            <div
              className='flex-none w-14 h-14 rounded-full bg-center bg-cover'
              style={{ backgroundImage: `url(${post.featuredImage.url})` }}
            />
            <div className='flex-grow ml-4'>
              <small className='text-gray-500 block'>
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </small>
              <Link className='text-md' href={`/post/${post.slug}`}>
                {post.title}
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
