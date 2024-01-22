/* eslint-disable react/prop-types */
import EditFormOpen from './editProductsForm/EditFormOpen'

export const ProductById = ({ product }) => {
    return (
        <>
            <EditFormOpen
                product={product}
            >
            </EditFormOpen>

        </>
    )
}
