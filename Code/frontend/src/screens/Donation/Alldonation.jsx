import React,{useEffect, useState} from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useDispatch,useSelector } from 'react-redux';
import { deleteCategoryAction, listCategory } from '../../actions/categoryAction';
import MainScreen from '../../component/MainScreen';
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image'


const Alldonation = ({history, search}) => {

  const dispatch = useDispatch();
  const categoryList = useSelector((state) => state.categoryList);
  const { loading,category,error} = categoryList;
 
 const userLogin = useSelector(state =>state.userLogin)
 const {userInfo } = userLogin;
 
  useEffect(()=>{
    dispatch(listCategory());
    if(!userInfo){
     history.push('/');
    }
   },[dispatch]);
 
   //delete function
   const deleteHandler = (id) => {
    if(window.confirm("Are You Sure want to delete this ?")){
     dispatch(deleteCategoryAction(id))
    }
   };

  return (
    <div>
        {/* <CardDonation/> */}

        <MainScreen titles='Our Donations' >
        
      {/* <Table responsive>
      <thead>
       
      </thead>
      <tbody>
      {
        category?.reverse()
        .map((category,index)=>(
        <tr>
          <td>{index+1}</td>
          <td><img
                  style={{
                    objectFit: "cover",
                    height: "50px",
                  }}
                  src={category.pic}
                  // src="https://i.ibb.co/w73cvYc/istockphoto-1019835828-612x612.jpg"
                  alt=""
                /></td>
          <td>{category.foodname}</td>
          <td>{category.price}</td>
          <td>{category.category}</td>
          <td>
              <Button href= {`/categoryUpdate/${category._id}`} className="mx-4">Edit</Button>
              <Button variant="danger" onClick={()=>deleteHandler(category._id)}>
                Delete
              </Button>
          </td>
        </tr>

        
        
        ))
      }
      </tbody>
    </Table> */}
    {
      category?.reverse().map((category,index)=>(  
    <Row className='m-5 shadow p-3 mb-5 bg-body bg-light rounded' style={{width:"1000px"}}>
        <Col className='px-5 '>
           <p className='pt-3 mx-5 text-center' style={{fontSize:'30px'}}>New Innovation : {category.foodname}</p>
           <p className='pt-0 mx-5' style={{fontSize:'20px'}}>{category.price}</p>
           <p className='pt-0 mx-5' style={{fontSize:'15px'}}>The advertisers and user guarantees that his or her Content do
              The advertisers and user guarantees that his or her Content do 
              The advertisers and user guarantees that his or her Content do The
              advertisers and user guarantees that his or her Content do The
              advertisers and user guarantees that his or her Content do
              The advertisers and user guarantees that his or her Content do
              The advertisers and user guarantees that his or her Content do{category.category}</p>
           {/* <Button className='px-5' style={{marginLeft:'90px'}} 
                   href= {`/oneInnovation/${category._id}`}
                   
           >Learn More</Button> */}
         </Col>
         <Col className=' text-center' >
         <Image 
          src={category.innovationImage}
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

export default Alldonation