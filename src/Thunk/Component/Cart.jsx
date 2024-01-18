import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Count, Decrement, Delete, DeleteAll, Increment } from './Files/Action';
import '../Assets/css/main.css'

const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const total = useSelector((state) => state.total)
    const [noRecords, setNoRecords] = useState(false);

    const Discount = 0.10
    const dispatch = useDispatch();

    useEffect(() => {
        if (cart.length === 0) {
            setNoRecords(true);
        } else {
            setNoRecords(false);
        }
        dispatch(Count())
    }, [cart])


    const handleDelete = (id) => {
        dispatch(Delete(id))
    }

    const handleIncrement = (id) => {
        dispatch(Increment(id))
    }
    const handleDecrement = (id) => {
        dispatch(Decrement(id))
    }
    const handleDeleteAll = () => {
        dispatch(DeleteAll())
    }
    return (
        <div className='container px-3 mt-6'>
            <div className="row">
                <div className="col-9">
                    <div className="dark-card p-0 ">
                        <div className="d-flex flex-wrap justify-content-between p-3 align-content-center">
                            <div className="cart-heading p-2">
                                <h5 className="m-0 text-light">My Cart</h5>
                            </div>
                            <div>
                                <Link className='btn btn-success px-3 py-6 fs-6 me-2' to={'/product'}>Product<i class="fa-solid fa-cart-shopping ms-2"></i></Link>
                                <Link className='btn btn-danger  px-3 py-6 fs-6' onClick={handleDeleteAll} >Delete All<i className="fa-solid fa-trash-can ms-2"></i></Link>
                            </div>
                        </div>
                        <div className="cart-body p-3 " style={{ height: "60vh", overflowY: "scroll" }}>
                            <table class="table">
                                <thead>
                                    <tr className='text-light'>
                                        <th className='text-center' scope="col">PRODUCT</th>
                                        <th className='text-center' scope="col">QUANTITY</th>
                                        <th className='text-center' scope="col">PRICE</th>
                                        <th className='text-center' scope="col">SUB TOTAL</th>
                                        <th className='text-center' scope="col">ACTION</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {noRecords ? (
                                        <>
                                            <td className='text-center fw-bold  pe-0 py-5' colSpan={5}>Your Cart is Empty</td>
                                        </>
                                    ) : (
                                        cart && cart.map((item, id) => {
                                            console.log(item.id)
                                            return (
                                                <tr key={id}>
                                                    <td >
                                                        <div className="bg-lightr d-inline-block">
                                                            <img src={item.image} alt="" className='img-fluid p-2' style={{ height: '70px', width: "70px", borderRadius: "3px" }} />
                                                        </div>
                                                        <span className='ms-3'>{item.name}</span></td>
                                                    <td className='text-center'>
                                                        <button className='btn text-white rounded-0 ' style={{ border: "1px solid #bfc8de" }} onClick={() => handleDecrement(id)}>-</button>
                                                        <span className='btn text-theme rounded-0 text-light' style={{ border: "1px solid #bfc8de" }}>{item.qty}</span>

                                                        <button className='btn  text-white rounded-0 ' style={{ border: "1px solid #bfc8de" }} onClick={() => handleIncrement(id)}>+</button>
                                                    </td>
                                                    <td className='text-center'>${item.price}</td>
                                                    <td className='text-center'>${item.price * item.qty}</td>
                                                    <td className='text-center'><button className='btn' onClick={() => handleDelete(id)}><i class="fa-solid fa-trash-can text-danger fs-5"></i></button></td>
                                                </tr>
                                            )
                                        })
                                    )
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="dark-card text-center p-0">
                        <div className="cart-heading p-2 text-light">
                            <h5 className="m-0 text-theme ">Price Details</h5>
                        </div>
                        <div className="p-3">
                            <table class="table">
                                <tbody>
                                    <tr className='fs-6'>
                                        <td>Sub Total</td>
                                        <td>{total}</td>
                                    </tr>
                                    <tr className='fs-6'>
                                        <td>Discount</td>
                                        <td>10 %</td>
                                    </tr>
                                    <tr className='fs-6'>
                                        <td>Shipping</td>
                                        <td>Free</td>
                                    </tr>
                                    <tr className='fw-bold fs-5'>
                                        <td >Total</td>
                                        <td>$ {total - (Discount * total)}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <button className='btn btn-success w-100 mt-2'>Checkout Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
