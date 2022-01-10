import { useState, useEffect } from 'react';
import Link from 'next/link';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((result) => setCategories(result));
  }, []);
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>Categories</h3>
      {categories.map(({ slug }) => (
        <Link key={slug} href={`/category/${slug}`}>
          <span className='hover:text-teal-600 cursor-pointer block pb-3 mb-3'>
            {slug}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
