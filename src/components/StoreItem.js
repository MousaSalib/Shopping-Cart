import React from 'react'
import { Button, Card } from 'react-bootstrap'
import formateCurrency from './formateCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'

const StoreItem = ({ id, price, name, imgUrl }) => {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(id);
  return (
    <>
        <Card>
            <Card.Img src={imgUrl} variant='top' style={{height: '200px', objectFit: "cover"}}/>
            <Card.Body>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>{formateCurrency(price)}</span>
                </Card.Title>
                <div className='mt-auto'>
                    {quantity === 0 ? ( <Button className='w-100' onClick={() => increaseCartQuantity(id)}>Add To Cart</Button> ) : ( 
                        <div className='d-flex align-items-center flex-column' style={{gap: "0.5rem"}}>
                            <div className='d-flax align-items-center justify-content-center'>
                                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <span className='fs-3 ms-2 me-2'>{quantity} in cart</span>
                                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button variant='danger' size='sm' onClick={() => removeFromCart(id)}>Remove</Button>
                        </div> 
                    )}
                </div>
            </Card.Body>
        </Card>
    </>
  )
}

export default StoreItem
