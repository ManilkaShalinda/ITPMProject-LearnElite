import React,{useEffect, useState} from 'react'
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/esm/Container';
import MainScreen from '../../component/MainScreen';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
import { useDispatch,useSelector } from 'react-redux';
import { deleteCategoryAction, listCategory } from '../../actions/categoryAction'
import ErrorMessage from '../../component/ErrorMessage';
import Table from 'react-bootstrap/Table';
import { FaUserTimes, FaUserPlus, FaUserEdit, FaPrint } from "react-icons/fa";
import "./category.css"
const Category = ({history,search}) => {


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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="GeeksForGeeks">
      <div className="my-5 ">
        <MainScreen titles="Welcome Nadun">
          <Link to="/categorycreate">
            <Button style={{ marginLeft: 5, marginBottom: 6 }} size="lg">
              Create New Post
            </Button>
          </Link>
          <Button
            style={{ marginLeft: "1em" }}
            onClick={handlePrint}
            className="no-print"
          >
            Print
            <FaPrint />
          </Button>

          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Coutse tital</th>
                <th>Intent learners</th>
                <th>Lecturer name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {category
                ?.reverse()
                .filter((filterCategory) =>
                  filterCategory.category
                    .toLowerCase()
                    .includes(search.toLowerCase())
                )
                .map((category, index) => (
                  <tr>
                    <td>{index + 1}</td>

                    <td>{category.foodname}</td>
                    <td>{category.category}</td>
                    <td>{category.pic}</td>
                    <td>{category.price}</td>
                    <td>
                      <Button
                        href={`/categoryUpdate/${category._id}`}
                        className="mx-4"
                      >
                        Edit
                      </Button>
                      <Button
                        variant="danger"
                        onClick={() => deleteHandler(category._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </MainScreen>
      </div>
    </div>
  );
}

export default Category