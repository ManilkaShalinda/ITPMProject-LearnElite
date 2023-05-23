import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useDispatch,useSelector } from 'react-redux';
import { deleteCategoryAction, listCategory } from '../../actions/categoryAction';
import MainScreen from '../../components/MainScreen/MainScreen';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image'
import TopHome from '../HomePage/TopHome';


const HomeDonation = ({history, search}) => {

  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { loading,category,error} = categoryList;
 

 
  useEffect(()=>{
    dispatch(listCategory());
   },[dispatch]);
 
   //delete function
   const deleteHandler = (id) => {
    if(window.confirm("Are You Sure want to delete this ?")){
     dispatch(deleteCategoryAction(id))
    }
   };

  return (
    <div>
    <TopHome/>
        <MainScreen titles='Our Donations' >
    {
      category?.reverse().map((category,index)=>(  
    <Row className='m-5 shadow p-3 mb-5 bg-body bg-light rounded' style={{width:"1000px"}}>
        <Col className='px-5 '>
           <p className='pt-3 mx-5 text-center' style={{fontSize:'30px'}}>Donated : {category.foodname}</p>
           <p className='pt-0 mx-5' style={{fontSize:'20px'}}>{category.price}</p>
           <p className='pt-0 mx-5' style={{fontSize:'15px'}}>We are passionate about providing equal opportunities for all children 
           to receive a quality education, regardless of their background or location. 
           Our platform is dedicated to bridging the gap in education by providing access to 
           quality learning resources and support to children in rural areas. Join us in our 
           mission to empower the next generation of learners</p>
           <Button className='px-5' style={{marginLeft:'50px'}} 
                   href= {`/oneInnovation/${category._id}`}
                   
           >Learn More</Button>
         </Col>
         <Col className=' text-center' >
         <Image 
          src={category.pic}
          class="rounded float-right w-80" 
          style={{width: '40%', objectFit: "cover",
                    height: "250px"}} 
          alt="image" />
         </Col>
    </Row>
        
        ))
      }

    </MainScreen>

    </div>
  )
}

export default HomeDonation