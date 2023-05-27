import React, { useState } from "react";
import * as css from './ImageGalleryItem.styled';
import { Modal } from '../Modal/Modal';
import PropTypes from 'prop-types';


export const ImageGalleryItem = ({ data }) => {
    const [largeImageUrl, setLargeImageUrl] = useState('');
    const [isModalOpen, setisModalOpen] = useState(false);

    const openModal = (ImageURL) => {
        setLargeImageUrl(ImageURL)
        setisModalOpen(true);

    }

    const closeModal = () => {
        setisModalOpen(false);
    }

    return (
        <>
            {data.map((item) => (
                <css.ImageGalleryItem key={item.id}>
                    <css.Image src={item.webformatURL} alt={item.tags} onClick={() => openModal(item.largeImageURL)} />
                </css.ImageGalleryItem>
            ))}

            {isModalOpen && <Modal closeModal={closeModal} imgUrl={largeImageUrl} />}
        </>
    )

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