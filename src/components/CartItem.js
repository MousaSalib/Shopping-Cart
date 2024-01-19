import React from 'react'
import { Button, Stack } from 'react-bootstrap'
import storeItems from '../data/items.json'
import formatCurrency from './formateCurrency'
import { useShoppingCart } from '../context/ShoppingCartContext'
const CartItem = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart()
    const item = storeItems.find((i) => i.id === id);
    if(item == null) return null;
  return (
    <>
        <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
            <img src={item.imgUrl} alt='cart-img' style={{width : "125px", height : "75px", objectFit: "cover"}}/>
            <div className='me-auto'>
              <div>
                {item.name} {" "}
                {quantity > 1 && (
                  <span className='text-muted' style={{ fontSize : "0.65rem" }}>x {quantity}</span>
                )}
                <div className='text-muted' style={{ fontSize : '0.75rem'}}>
                  {formatCurrency(item.price)}
                </div>
              </div>
            </div>
            <div>{formatCurrency(item.price * quantity)}</div>
            <Button variant='outline-danger' size='sm' onClick={() => removeFromCart(id)}>
                  &times;
            </Button>
        </Stack>
    </>
  )
}

export default CartItem