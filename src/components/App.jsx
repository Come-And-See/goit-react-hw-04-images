import React, { useState, useEffect } from "react"
import { Searchbar } from "./Searchbar/Searchbar";
import * as css from './App.styled'
import axios from "axios";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";


export const App = () => {
  const [query, setQuery] = useState('');
  const [img, setImg] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isLoading, setisLoading] = useState(false);


  const fetchData = () => {
    axios.defaults.baseURL = 'https://pixabay.com/api/'
    const KEY = '11680265-49a2c7c2ef17772c90d3b7b54'

    axios.get(`?key=${KEY}&q=${query}&image_type=photo&page=${page}&per_page=12`).then(response => {
      setImg([...img, ...response.data.hits])
      setTotal(total + response.data.hits.length);
      setisLoading(false);
    })
      .catch(error => {
        console.log(error);
        setisLoading(false);
      });


  }


  useEffect(() => {
    if (query !== '') {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, page]);



  const upQuery = (e) => {
    e.preventDefault();
    const value = e.currentTarget[1].value;
    setQuery(value);
    setPage(1);
    setImg([]);
    setisLoading(true);
  }


  const LoadMore = () => {
    setisLoading(true);
    setPage(prevState => (
      prevState + 1
    ))
  }


  return (
    <css.App>
      <Searchbar upQuery={upQuery} />
      <ImageGallery data={img} />
      {isLoading && <Loader />}
      {img.length > 0 && <Button LoadMore={LoadMore} />}

    </css.App>
  );

};



