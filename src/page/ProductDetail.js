import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct] = useState(null);
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/HCJIN/front-hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }
  useEffect(()=>{
    getProductDetail();
  },[])
  return (
    <Container>
      <Row>
        <Col className='product-img'>
          <img src={product?.img} />
        </Col>
        <Col>
          <div className='Detail-title'>{product?.title}</div>
          <div className='Detail-price'>￦{product?.price}</div>
          <div className='Detail-choice'>{product?.choice == true ? "Conscious choice" : ''}</div>
          <DropdownButton as={ButtonGroup} title="사이즈 선택" id="bg-vertical-dropdown-3">
            <Dropdown.Item eventKey="1">S</Dropdown.Item>
            <Dropdown.Item eventKey="2">M</Dropdown.Item>
            <Dropdown.Item eventKey="3">L</Dropdown.Item>
          </DropdownButton>
          <br/>
          <Button variant="dark" className='choice-button'>추가</Button>
        </Col>

      </Row>
    </Container>
  )
}

export default ProductDetail