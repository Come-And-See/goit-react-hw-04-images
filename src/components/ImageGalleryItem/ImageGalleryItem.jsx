import React, { Component } from "react";
import * as css from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';
import PropTypes from 'prop-types';


export class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
        largeImageURL: '',
    }



    openModal = (largeImageURL) => {
        this.setState({ isModalOpen: true, largeImageURL })
    }


    closeModal = () => {
        this.setState({ isModalOpen: false })
    }



    render() {
        const { isModalOpen, largeImageURL } = this.state
        const { data } = this.props
        return (
            <>
                {data.map((item) => (
                    <css.ImageGalleryItem key={item.id}>
                        <css.Image src={item.webformatURL} alt={item.tags} onClick={() => this.openModal(item.largeImageURL)} />
                    </css.ImageGalleryItem>
                ))}

                {isModalOpen && <Modal closeModal={this.closeModal} imgUrl={largeImageURL} />}
            </>
        )
    }
}




ImageGalleryItem.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        })
    ).isRequired,

};