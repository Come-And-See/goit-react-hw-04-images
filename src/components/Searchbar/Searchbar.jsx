import * as css from './Searchbar.styled'
import { FaSearch } from 'react-icons/fa';
import PropTypes from 'prop-types';

export const Searchbar = ({ upQuery }) => {


    return (
        <css.Searchbar>
            <css.SearchForm onSubmit={upQuery}>
                <css.SearchFormButton type="submit">
                    <FaSearch />
                    <css.SearchFormButtonLabel></css.SearchFormButtonLabel>
                </css.SearchFormButton>

                <css.SearchFormInput
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </css.SearchForm>
        </css.Searchbar>
    )
}



Searchbar.propTypes = {
    upQuery: PropTypes.func.isRequired,
   };