import { useRouter } from 'next/router';

import { getCategories, getCategoryPost } from '../../services';
import { PostCard, Loader } from '../../components';

const CategoryPost = ({ posts, slug }) => {
  const router = useRouter();
  const name = posts?.[0].node.categories.find(
    (category) => category.slug === slug
  ).name;

  if (router.isFallback) return <Loader />;
  return (
    <div>
      <h1 className='text-white text-2xl mb-6'>{`${name} ( ${posts.length} )`}</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'>
        {/* <div className='col-span-1 lg:col-span-8'> */}
        {posts.map((post, index) => (
          <PostCard key={index} post={post.node} />
        ))}
        {/* </div> */}
        {/* <div className='col-span-1 lg:col-span-4'>
          <div className='relative lg:sticky top-8'>
            <Categories posts={posts} />
          </div>
        </div> */}
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params: { slug } }) {
  const posts = await getCategoryPost(slug);

  return {
    props: { posts, slug },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}
