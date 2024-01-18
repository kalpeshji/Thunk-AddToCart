import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddToCart, { Count, addToCartAsync } from './Files/Action'
import { Link } from 'react-router-dom'

const Product = () => {

    const product = useSelector((state) => state.product)
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch();

    const handleAdd = (id) => {
        dispatch(AddToCart(id))
        dispatch(Count())
    }
    return (
        <div className=' container px-3 h-100'>
            < div className="div" >
                <Link className='btn btn-light position-relative p-1' to={'/cart'}><i class="fa-solid fa-cart-shopping"></i>
                    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {count}
                    </span>
                </Link>
            </ div>
            <div className="d-flex g-2 flex-wrap  ">
                {
                    product && product.map((item, id) => {
                        return (
                            <div key={id} className="col-3 mt-6" >
                                <div className="dark-card me-3 ">
                                    <div className="bg-lightr">
                                        <img src={item.image} alt="" className='img-fluid w-100 p-5' style={{ height: '320px', borderRadius: "3px" }} />
                                    </div>
                                    <div className="des d-flex flex-wrap mt-3 justify-content-between ">
                                        <div className='text-white'>
                                            <h6 className='mb-3 text-center'>{item.name}</h6>
                                            <p>{item.info}</p>
                                            <p>Price : ${item.price}</p>
                                        </div>
                                        <button className='btn btn-light w-100' onClick={() => handleAdd(id)}>ADD TO CART<i class="fa-solid fa-cart-shopping ms-2"></i></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Product
