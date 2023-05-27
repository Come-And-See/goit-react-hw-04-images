import React, { useEffect } from 'react';
import * as css from './Modal.styled'
import PropTypes from 'prop-types';

export const Modal = ({ imgUrl, closeModal }) => {


    useEffect(() => {
        window.addEventListener('keydown', closeM);

        return () => {
            window.removeEventListener('keydown', closeM);
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const closeM = (e) => {
        if (e.target === e.currentTarget || e.code === "Escape") {
            closeModal();
        }
    }


    return (
        <css.Overlay onClick={closeM}>
            <css.Modal>
                <img src={imgUrl} alt="" />
            </css.Modal>
        </css.Overlay>
    )
}



Modal.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
};