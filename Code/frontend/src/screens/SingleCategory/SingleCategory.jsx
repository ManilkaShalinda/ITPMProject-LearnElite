import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateCategoryAction } from "../../actions/categoryAction";
import MainScreen from "../../components/MainScreen/MainScreen";

const SingleCategory = ({ match, history }) => {
  const [foodname, setFoodname] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [pic, setPic] = useState("");
  const [date, setDate] = useState("");
  const params = useParams();

  
  const {id} = useParams();
   const dispatch = useDispatch();
  const categoryUpdate = useSelector((state) => state.categoryUpdate);
  const { loading } = categoryUpdate;


  useEffect(() => {
    const fetching = async () => {
      try {
        const { data } = await axios.get(`/api/category/${id}`);
        setFoodname(data.foodname);
        setPrice(data.price);
        setCategory(data.category);
        setPic(data.pic);
      } catch (error) {
        console.error(error);
      }
    };
    fetching();
  }, [id]);

  const resetHandler = () => {
    setFoodname("");
    setPrice("");
    setCategory("");
    setPic("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateCategoryAction(id, foodname, price, category, pic));
    if (!foodname || !price || !category || !pic) return;
    // resetHandler();
    // history.push("/category");
  };

  const postDetails = (pics) => {
    if (!pics) {
      // Handle empty picture
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
      // Handle unsupported file types
    }
  };

  return (
    <>
    <MainScreen>
      <Card>
        <Card.Header>Update Product</Card.Header>
        <Card.Body>
          <Form onSubmit={updateHandler}>
            <Form.Group controlId="title">
              <Form.Label>Food Name</Form.Label>
              <Form.Control
                type="title"
                value={foodname}
                placeholder="Enter the food name"
                onChange={(e) => setFoodname(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="title">
              <Form.Label>Food Price</Form.Label>
              <Form.Control
                type="title"
                value={price}
                placeholder="Enter the price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="content"
                value={category}
                placeholder="Enter the Category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="pic">
              <Form.Label>Profile Picture</Form.Label>
              <Form.Control
                onChange={(e) => postDetails(e.target.files[0])}
                id="custom-file"
                type="file"
                label="Upload Profile Picture"
                custom
              />
            </Form.Group>

            <Button type="submit" variant="primary" className="my-4">
              Update
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
      </MainScreen>
    </>
  );
};

export default SingleCategory;