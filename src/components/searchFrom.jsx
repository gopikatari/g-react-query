import React from 'react';
import { useGlobalContext } from '../context/context';

const SearchForm = () => {
  const { setSearchTeam } = useGlobalContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchTeam(searchValue);
  };
  return (
    <section className='search-form-container'>
      <h2 className='form-title'>Unsplash images</h2>
      <form className='form-search' onSubmit={handleSubmit}>
        <input
          type='text'
          name='search'
          placeholder='cat'
          className='form-input-search'
        />
        <input type='submit' value='search' className='btn btn-submit' />
      </form>
    </section>
  );
};

export default SearchForm;
