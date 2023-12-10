import React from 'react';
import ThemeToggle from './components/themeToggle';
import SearchForm from './components/searchFrom';
import Gallery from './components/Gallery';

const App = () => {
  return (
    <main className='page'>
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </main>
  );
};

export default App;
