import {CartDisplay} from '../components/Cart/cartDisplay'

export const Cart = () => {
    return(
        <>
            <h1 className="page-title" ><i>Items in Cart </i> </h1>
            <CartDisplay />
        </>
    )
}