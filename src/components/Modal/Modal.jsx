import React, { Component } from 'react';
import * as css from './Modal.styled'
import PropTypes from 'prop-types';

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener('keydown', this.closeModal);
    }
    componentWillUnmount() {
        window.removeEventListener('keydown', this.closeModal);

    }

    closeModal = (e) => {
        if (e.target === e.currentTarget || e.code === "Escape") {
            this.props.closeModal()
        }
    }

    render() {
        const { imgUrl } = this.props
        return (
            <css.Overlay onClick={this.closeModal}>
                <css.Modal>
                    <img src={imgUrl} alt="" />
                </css.Modal>
            </css.Overlay>
        )
    }
}



Modal.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
};