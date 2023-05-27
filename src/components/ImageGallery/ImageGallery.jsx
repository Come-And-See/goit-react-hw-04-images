import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"
import * as css from './ImageGallery.styled'
import PropTypes from 'prop-types';


export const ImageGallery = ({ ...otherProps }) => {
    return (
        <css.ImageGallery>
            <ImageGalleryItem {...otherProps} />
        </css.ImageGallery>
    )
}




ImageGallery.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            webformatURL: PropTypes.string.isRequired,
            tags: PropTypes.string.isRequired,
            largeImageURL: PropTypes.string.isRequired,
        })
    ).isRequired,

};

