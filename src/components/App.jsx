import React, { Component } from "react"
import { Searchbar } from "./Searchbar/Searchbar";
import * as css from './App.styled'
import axios from "axios";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Loader } from "./Loader/Loader";
import { Button } from "./Button/Button";


export class App extends Component {
  state = {
    query: '',
    img: [],
    isLoading: false,
    page: 1,
    total: 0,
    isLoadMore: false

  }



  componentDidUpdate(_, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      this.fetchData();
    }
  }



  upQuery = (e) => {
    e.preventDefault();
    const value = e.currentTarget[1].value;
    this.setState({ query: value, page: 1, img: [] });

  }




  fetchData = () => {

    this.setState({ isLoading: true })
    const { query, page, total } = this.state;
    axios.defaults.baseURL = 'https://pixabay.com/api/'
    const KEY = '11680265-49a2c7c2ef17772c90d3b7b54'

    axios.get(`?key=${KEY}&q=${query}&image_type=photo&page=${page}&per_page=12`).then(response => {
      this.setState(prevState => ({ img: [...prevState.img, ...response.data.hits], isLoading: false, total: prevState.total + response.data.hits.length }))
      if (total >= response.data.totalHits) {
        this.setState({ isLoadMore: true })
      }
    })
      .catch(error => {
        console.log(error);
        this.setState({ isLoading: false });
      });

  }

  LoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1
    }))
  }




  render() {
    const { upQuery, LoadMore } = this;
    const { img, isLoading, isLoadMore } = this.state;
    return (
      <css.App>
        <Searchbar upQuery={upQuery} />
        <ImageGallery data={img} />
        {isLoading && <Loader />}
        {img.length > 0 && !isLoadMore && <Button LoadMore={LoadMore} />}

      </css.App>
    );
  }
};



