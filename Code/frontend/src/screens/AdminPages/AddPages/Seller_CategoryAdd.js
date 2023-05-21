import React,{ useEffect, useState } from 'react'
import MainScreen from '../../../components/MainScreen/MainScreen'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Accordion from 'react-bootstrap/Accordion';
import data from '../../../data/data'
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Form } from "react-bootstrap";

const Seller_CategoryAdd = () => {

  return (
    <MainScreen title="Welcome Piumi,Add your category here">
         Add Category<br/>
        <Link to='/sellerCategoryAll'>
        <Button  className='mt-4 mb-5'>
          View Category
        </Button>
        </Link>

        <Card>
        <Card.Header >Add New Product</Card.Header>
        <Card.Body>
          <Form >
           
            <Form.Group controlId="title">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="title"
                
                placeholder="Enter the food name"
              />
            </Form.Group>

            <Form.Group controlId="title">
               <Form.Label>Food Price</Form.Label>
               <Form.Control
                type="title"
                placeholder="Enter the price"
              />
            </Form.Group>

     <Form.Group controlId="title">
     <Form.Label>Dress Category</Form.Label>
     <div class="form-group col-lg flex-column d-flex" style={{}}>
      <select id="inputState" class="form-control"  required>
        <option selected placeholder="">Choose Product...</option>
        <option>Men</option>
        <option>Wemen</option>
        <option>Kids</option>
      </select>
    </div>
     </Form.Group>

          <Form.Group controlId="pic">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              id="custom-file"
              type="file"
              label="Upload Profile Picture"
              custom
            />
          </Form.Group>

            <Button type="submit" variant="primary" className="my-4">
            Create Product
            </Button>
            <Button className="mx-5"  variant="danger">
            Reset Feilds
            </Button>
        </Form>
      </Card.Body>

       <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
       </Card.Footer>

     </Card>

    </MainScreen>
  )
}

export default Seller_CategoryAdd