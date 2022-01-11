import { useState, useEffect } from 'react';
import { submitComment } from '../services';

const CommentsForm = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [values, setValues] = useState({
    name: '',
    email: '',
    comment: '',
    storeData: false,
  });

  const handleChange = ({ currentTarget: input }) => {
    const data = { ...values };
    data[input.name] = input.type === 'checkbox' ? input.checked : input.value;
    setValues(data);
  };

  const renderInput = (name, type = 'text') => {
    const props = {
      name,
      value: values[name],
      placeholder: name.charAt(0).toUpperCase() + name.slice(1),
      onChange: handleChange,
      className: `outline-none w-full rounded-lg focus:ring-2 focus:ring-teal-400 bg-gray-100 text-gray-700 transition duration-300 ${
        type === 'textarea' ? 'p-4' : 'px-4 py-2'
      }`,
    };
    if (type === 'textarea') return <textarea {...props} />;
    return <input type={name === 'email' ? name : type} {...props} />;
  };

  const handleSubmit = () => {
    setError(false);

    const { name, email, comment, storeData } = values;
    if (!name || !email || !comment) return setError(true);

    const commentObj = { name, email, comment, slug };
    if (storeData) {
      localStorage.setItem('name', name);
      localStorage.setItem('email', email);
    } else {
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }

    submitComment(commentObj).then((res) => {
      if (!res.createComment) return;

      if (!storeData) {
        values.name = '';
        values.email = '';
      }
      values.comment = '';
      setValues((prevState) => ({ ...prevState, ...values }));

      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000);
    });
  };

  useEffect(() => {
    setLocalStorage(window.localStorage);
    const initalValues = {
      name: window.localStorage.getItem('name') || '',
      email: window.localStorage.getItem('email') || '',
      storeData:
        window.localStorage.getItem('name') ||
        window.localStorage.getItem('email') ||
        false,
    };
    setValues(initalValues);
  }, []);

  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Leave a reply
      </h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        {renderInput('comment', 'textarea')}
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2'>
        {renderInput('name')}
        {renderInput('email')}
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <div className='container'>
          <input
            className='accent-teal-600'
            type='checkbox'
            id='storeData'
            name='storeData'
            onChange={handleChange}
            checked={values['storeData']}
            value={true}
          />
          <label
            htmlFor='storeData'
            className='text-gray-500 select-none cursor-pointer ml-2'
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
        {showSuccessMessage && (
          <span className='text-lg float-right font-semibold text-teal-500 m-2'>
            Comment submitted for review
          </span>
        )}
      </div>
    </div>
  );
};

export default CommentsForm;
