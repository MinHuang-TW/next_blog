import { useRouter } from 'next/router';
import Link from 'next/link';

import { getPosts, getPostDetails } from '../../services';
import {
  PostDetail,
  PostWidget,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from '../../components';

const PostDetails = ({ post }) => {
  const router = useRouter();
  const categories = post?.categories.map(({ slug }) => slug);

  if (router.isFallback) return <Loader />;
  return (
    <div className='grid gap-8 grid-cols-1 lg:grid-cols-12'>
      <div className='col-span-1 lg:col-span-8'>
        <PostDetail post={post} />
        <Author author={post.author} />
        <CommentsForm slug={post.slug} />
        <Comments slug={post.slug} />
      </div>
      <div className='col-span-1 lg:col-span-4'>
        <div className='relative lg:sticky lg:top-8 top-0'>
          <PostWidget slug={post.slug} categories={categories} />
          {/* <Categories /> */}
          <div className='bg-white shadow-lg rounded-lg p-8'>
            <h3 className='text-xl font-semibold border-b pb-4'>Categories</h3>
            <div className='flex flex-wrap gap-2 mt-4'>
              {post?.categories.map(({ name, slug }) => (
                <Link
                  key={slug}
                  className='text-md w-auto'
                  href={`/category/${slug}`}
                >
                  <small className='px-3 py-1 rounded-full border border-teal-500 text-teal-500 hover:text-white hover:bg-teal-500 transition duration-500 cursor-pointer'>
                    {name}
                  </small>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;

export const getStaticProps = async ({ params }) => {
  const data = await getPostDetails(params.slug);
  return {
    props: { post: data },
  };
};

export const getStaticPaths = async () => {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
};
