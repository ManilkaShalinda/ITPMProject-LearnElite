import React,{ useEffect, useState } from 'react'
import MainScreen from '../../../components/MainScreen/MainScreen'
import {Link} from 'react-router-dom'
import Button from 'react-bootstrap/esm/Button'
import Card from 'react-bootstrap/Card';
import axios from 'axios'
import Accordion from 'react-bootstrap/Accordion';
// import data from '../../../data/data'
import { useDispatch,useSelector } from 'react-redux'
import { listCategory } from '../../../actions/categoryAction';

const Seller_CategoryAll = () => {
   
    const dispatch =useDispatch();

    const categoryList = useSelector((state) =>state.categoryList);
    const { loading,category,error} =categoryList;

    const admin_Login = useSelector((state)=> state.admin_Login);
    const { adminInfo } = admin_Login;

    // const [category,setCategory] = useState([]);

    // const fetchCategory = async() =>{
    //   const {data} = await axios.get('/api/category');
    //   setCategory(data); 
    // }
    console.log(category);
  

     //use the action function here in categoryAction.js
    useEffect(() => {
      dispatch(listCategory())
    }, [dispatch])
    
    const deleteHandler = (id) =>{
      if(window.confirm('Are You Sure')){
      }
    }

  return (
    <div>
         <MainScreen>
         All Category<br/>
        <Link to='/sellerCategoryAdd'>
        <Button  className='mt-4 mb-5'>
          Create New Category
        </Button>
      </Link>

      {
         category?.map((data) =>(
          <Accordion key= {data._id}>
          <Card className='mb-5'>
          <Card.Header as="h5">{data.foodname}</Card.Header>
          <Card.Body>
            <Card.Title>{data.price}</Card.Title>
            <Card.Text>
              {data.category}
            </Card.Text>
            <Card.Text>
              {data.pic}
            </Card.Text>
            <Button href={`/category/${data._id}`} className='mx-5' variant="primary">Edit</Button>
            <Button variant="danger" onClick={()=> deleteHandler(data._id)}>Delete</Button>
          </Card.Body>
        </Card>
        </Accordion>
        ))
      }
    </MainScreen>
    </div>
  )
}

export default Seller_CategoryAll