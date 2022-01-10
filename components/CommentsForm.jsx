import { useState, useEffect, useRef } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  const handleSubmit = () => {
    setError(false);
    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;
    if (!comment || !name || !email) return setError(true);

    const commentObj = { name, email, comment, slug };
    if (storeData) {
      window.localStorage.setItem('name', name);
      window.localStorage.setItem('email', email);
    } else {
      window.localStorage.removeItem('name', name);
      window.localStorage.removeItem('email', email);
    }

    submitComment(commentObj).then((result) => {
      setShowSuccessMsg(true);
      setTimeout(() => setShowSuccessMsg(false), 3000);
    });
  };

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem('name');
    emailEl.current.value = window.localStorage.getItem('email');
  }, []);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Leave a reply
      </h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea
          ref={commentEl}
          className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-teal-400 bg-gray-100 text-gray-700 transition duration-300'
          name='comment'
          placeholder='Comment'
        />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input
          type='text'
          ref={nameEl}
          name='name'
          placeholder='Name'
          className='px-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-teal-400 bg-gray-100 text-gray-700 transition duration-300'
        />
        <input
          type='email'
          ref={emailEl}
          name='email'
          placeholder='Email'
          className='px-4 py-2 outline-none w-full rounded-lg focus:ring-2 focus:ring-teal-400 bg-gray-100 text-gray-700 transition duration-300'
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div className='container'>
          <input
            type='checkbox'
            ref={storeDataEl}
            id='storeData'
            name='storeData'
            value={true}
          />
          <label
            htmlFor='storeData'
            className='text-gray-500 cursor-pointer ml-2'
          >
            Remember my name and email
          </label>
        </div>
      </div>
      {error && <p className='text-xs text-red-500'>All fields are required</p>}
      <div className='mt-8'>
        <button
          type='button'
          className='transition duration-500 ease-in-out hover:bg-teal-600 bg-teal-500 inline-block text-lg rounded-full text-white px-6 py-2'
          onClick={handleSubmit}
        >
          Submit
        </button>
        {showSuccessMsg && (
          <span className='text-xl float-right font-semibold mt-3 text-green-500'>
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
