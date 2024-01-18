import React from 'react'
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
