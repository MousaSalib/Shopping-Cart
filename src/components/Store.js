import React from 'react'
import { Col, Row } from 'react-bootstrap'
import storeItems from '../data/items.json'
import StoreItem from './StoreItem'
const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row xs={1} md={2} xl={3} className='g-3'>
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item}/>
          </Col>
        ))}
      </Row>
    </>
  )
}

export default Store