
import React, { useEffect, useState } from "react";
import MainScreen from "../../component/MainScreen";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {updateCategoryAction} from '../../actions/categoryAction'
import Loarding from "../../component/Loarding";
import ReactMarkdown from "react-markdown";
import './../../component/print.css'
import "./singalcat.css"

const SingleCategory= ({ match, history }) => {

  const [foodname, setFoodname] = useState();
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState();
  const [pic, setPic] = useState();
   const [date, setDate] = useState("");


  const dispatch = useDispatch();

  const categoryUpdate = useSelector((state) => state.categoryUpdate );
  const { loading } = categoryUpdate ;


  const deleteHandler = (id) => {
   
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/category/${match.params.id}`);

    setFoodname(data.foodname);
    setPrice(data.price);
    setCategory(data.category);
    setPic(data.pic);
    setDate(data.updatedAt);
    };
    fetching();
  }, [match.params.id, date]);

  const resetHandler = () => {
    setFoodname("");
    setPrice("");
    setCategory("");
    setPic("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateCategoryAction(match.params.id,foodname, price, category, pic));
    if (!foodname || !price || !category || !pic) return;
    resetHandler();
    history.push("/category");
  };

  const postDetails = (pics) => {
    if (!pics) {
    
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "LAYOUTindex");
      data.append("cloud_name", "dknttakfo");
      fetch("https://api.cloudinary.com/v1_1/dknttakfo/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPic(data.url.toString());
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
     
    }
  };


  return (
    <>
      <div className="GeeksForGeeks">
        <MainScreen titles="">
          <h1 className="update">Update</h1>
          <div className="uppara">
            All he could think about was how it would all end. There was still a
            bit of uncertainty in the equation, but the basics were there for
            anyone to see. No matter how much he tried to see the positive, it
            wasn't anywhere to be seen. The end was coming and it wasn't going
            to be pretty.
          </div>
          <div className="full">
            <Card>
              <Card.Header className="up">Update Course</Card.Header>
              <Card.Body>
                <Form onSubmit={updateHandler}>
                  <Form.Group controlId="title">
                    <Form.Label>Course Title</Form.Label>
                    <Form.Control
                      type="title"
                      value={foodname}
                      placeholder="Enter title"
                      onChange={(e) => setFoodname(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="content">
                    <Form.Label>Intent learners</Form.Label>
                    <Form.Control
                      type="content"
                      value={category}
                      placeholder="Enter the Type"
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="pic">
                    <Form.Label>Lecturer name</Form.Label>
                    <Form.Control
                      type="content"
                      value={pic}
                      placeholder="Enter the Type"
                      onChange={(e) => setPic(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="title">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      className="v3"
                      type="title"
                      value={price}
                      placeholder="Enter the Description"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </Form.Group>

                  {loading && <Loarding size={50} />}
                  <Button type="submit" variant="primary" className="my-4">
                    Update
                  </Button>
                  {/* <Button className="mx-5" onClick={resetHandler} variant="danger">
              Reset Feilds
            </Button> */}
                </Form>
              </Card.Body>

              <Card.Footer className="text-muted">
                Creating on - {new Date().toLocaleDateString()}
              </Card.Footer>
            </Card>
          </div>
        </MainScreen>
      </div>
    </>
  );
}

export default SingleCategory