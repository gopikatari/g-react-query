import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

import Spinner from '../common/Spinner.jsx';
import get from 'lodash/get';
import { isEmpty } from 'lodash';
import { useGlobalContext } from '../context/context.jsx';

const Gallery = () => {
  const { searchTerm } = useGlobalContext();

  const url = `https://api.unsplash.com/search/photos?client_id=${
    import.meta.env.VITE_CLIENT_ID
  }&query=${searchTerm}`;
  const response = useQuery({
    queryKey: ['imageQuery', searchTerm],
    queryFn: async () => {
      const res = await axios.get(url);
      return res.data;
    },
  });

  if (get(response, 'isLoading', false)) {
    return <Spinner />;
  }
  if (get(response, 'isError', false)) {
    return (
      <div>
        <h2>There was an Error....</h2>
      </div>
    );
  }

  const results = get(response, 'data.results', []);
  if (isEmpty(results)) {
    return (
      <div>
        <h2>No Results found....</h2>
      </div>
    );
  }
  return (
    <section className='image-container'>
      {results &&
        results.map((item) => {
          const imgUrl = get(item, 'urls.regular');
          return <img className='img' src={imgUrl} key={item.id} />;
        })}
    </section>
  );
};

export default Gallery;
