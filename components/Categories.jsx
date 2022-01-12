import { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = ({ posts }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-8'>
      <h2 className='text-xl mb-8 font-semibold border-b pb-4'>Categories</h2>
      {categories.map(({ name, slug }) => {
        let counter = 0;
        posts?.filter(({ node: { categories } }) => {
          if (categories.some((c) => c.slug === slug)) counter = counter + 1;
        });
        return (
          <Link key={slug} href={`/category/${slug}`}>
            <span className='hover:text-teal-600 transition duration-200 cursor-pointer block pb-3 mb-3'>
              {`${name} (${counter})`}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default Categories;
