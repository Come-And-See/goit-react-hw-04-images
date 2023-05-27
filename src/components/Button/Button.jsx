import * as css from './Button.styled'
import PropTypes from 'prop-types';

export const Button = ({ LoadMore }) => {
    return (
        <css.Button type="button" onClick={LoadMore}>
            Load more
        </css.Button>
    );
};



Button.propTypes = {
    LoadMore: PropTypes.func.isRequired,
};