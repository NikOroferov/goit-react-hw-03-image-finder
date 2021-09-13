import React, { Component } from 'react';
import './ImageGallery.css';

import ImageGalleryItem from 'componts/ImageGalleryItem/ImageGalleryItem';
import Button from 'componts/Button/Button';
import getImageApi from 'services/api-service';
import Modal from 'componts/Modal/Modal';
import Loader from 'react-loader-spinner';

class ImageGallery extends Component {
  state = {
    page: 1,
    imagesInfo: [],
    status: 'idle',
    id: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const { searchValue } = this.props;

    if (prevProps.searchValue !== searchValue) {
      this.setState({
        status: 'pending',
        page: 1,
        imagesInfo: [],
      });

      getImageApi(searchValue, page).then(responce => {
        if (responce.data.total !== 0) {
          this.setState({
            imagesInfo: responce.data.hits,
            status: 'resolve',
          });
        } else {
          this.setState({ status: 'rejected' });
        }
      });
    }

    if (prevProps.searchValue === searchValue && prevState.page !== page) {
      getImageApi(searchValue, page).then(responce => {
        const newImages = responce.data.hits;
        this.setState({
          imagesInfo: [...prevState.imagesInfo, ...newImages],
          status: 'resolve',
        });
      });
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  handleLoadMore = prevState => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  formSubmitHandler = id => {
    this.setState({ id: id });
    this.toggleModal();
  };

  getInfoById = () => {
    const currentId = +this.state.id;

    return this.state.imagesInfo.find(image => image.id === currentId);
  };

  render() {
    const { status, imagesInfo, showModal } = this.state;

    if (status === 'idle') {
      return <h2>Пожалуйста, введите поисковый запрос</h2>;
    }

    if (status === 'pending') {
      return <Loader type="Oval" color="#00BFFF" height={80} width={80} />;
    }

    if (status === 'rejected') {
      return <h2>Иллюстрации по запросу {this.props.searchValue} не найдены</h2>;
    }

    if (status === 'resolve') {
      return (
        <div className="content">
          <ul className="ImageGallery">
            <ImageGalleryItem images={imagesInfo} onClick={this.formSubmitHandler} />
          </ul>
          <Button value="Load more" onClick={this.handleLoadMore} />

          {showModal && <Modal onClose={this.toggleModal} src={this.getInfoById()} />}
        </div>
      );
    }
  }
}

export default ImageGallery;
