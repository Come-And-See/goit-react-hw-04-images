import { Triangle } from 'react-loader-spinner'
import * as css from './Loader.styled'

export const Loader = () => {
    return (
        <css.Loader> <Triangle
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            visible={true}
        /></css.Loader>
    )
}