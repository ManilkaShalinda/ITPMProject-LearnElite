import React,{useState,useEffect} from 'react'
import MainScreen from '../../component/MainScreen'
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Form } from "react-bootstrap";
import Loarding from '../../component/Loarding';
import { createCategoryAction } from '../../actions/categoryAction';
import ErrorMessage from '../../component/ErrorMessage';
import "./Createcat.css"

const CreateCategory = ({history}) => {

  const [foodname, setFoodname] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [pic, setPic] = useState("");
  const [picMessage, setPicMessage] = useState(null);
 

  const dispatch = useDispatch();

  const categoryCreate = useSelector((state) => state.categoryCreate);
  const { loading, error, product} = categoryCreate;

  console.log( product);

  const resetHandler = () => {
    setFoodname("");
    setPrice("");
    setCategory("");
    setPic("");
  };


const postDetails = (pics) => {
    if (!pics) {
      return setPicMessage("Please Select an Image");
    }
    if (pics.type === "image/jpeg" || pics.type === "image/png" || pics.type === "image/jpg") {
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
      return setPicMessage("Please Select an Image");
    }
  };

  const submitHandler = (e) => {
   e.preventDefault();
    dispatch(createCategoryAction(foodname, price, category, pic));
    if (!foodname || !price || !category || !pic) return;

    resetHandler();
    history.push("/category");
  };

  

  useEffect(() => {}, []);
  return (
    <div className="GeeksForGeeks">
      <div>
        <MainScreen titles="">
          <h1 className="update">Add course</h1>
          <div className="uppara">
            All he could think about was how it would all end. There was still a
            bit of uncertainty in the equation, but the basics were there for
            anyone to see. No matter how much he tried to see the positive, it
            wasn't anywhere to be seen. The end was coming and it wasn't going
            to be pretty.
          </div>
          <div className="full">
            <Card>
              <Card.Header className="up">Add New Course</Card.Header>
              <Card.Body>
                <Form onSubmit={submitHandler}>
                  <Form.Group controlId="title">
                    <Form.Label>Course Title</Form.Label>
                    <Form.Control
                      type="title"
                      value={foodname}
                      placeholder="Enter title"
                      onChange={(e) => setFoodname(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="title">
                    <Form.Label>Intent learners</Form.Label>
                    <div
                      class="form-group col-lg flex-column d-flex"
                      style={{}}
                    >
                      <select
                        id="inputState"
                        class="form-control"
                        onChange={(e) => {
                          setCategory(e.target.value);
                        }}
                        required
                      >
                        <option selected placeholder="">
                          Choose Type...
                        </option>
                        <option>Primary leval</option>
                        <option>Ordinary leval</option>
                        <option>Advance leval</option>
                      </select>
                    </div>
                  </Form.Group>

                  <Form.Group controlId="title">
                    <Form.Label>Lecturer name</Form.Label>
                    <Form.Control
                      type="title"
                      value={pic}
                      placeholder="Mr. Samantha"
                      onChange={(e) => setPic(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="title">
                    <Form.Label>Description</Form.Label>
                    <div className="v">
                      <Form.Control
                        className="v2"
                        type="title"
                        value={price}
                        placeholder=""
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </Form.Group>

                  {/*         
          {picMessage && (
            <ErrorMessage  variant='danger'>{picMessage}</ErrorMessage>
          )}
           <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Uploard Food Image</Form.Label>
            <Form.Control type="file"
                            value={pic}
          // onChange={(e)=> postDetails(e.target.file[0])}
                            onChange={(e)=> setPic(e.target.value)}/>
          </Form.Group> */}

                  {loading && <Loarding size={50} />}
                  <Button type="submit" variant="primary" className="my-4">
                    Add Course
                  </Button>
                  <Button
                    className="mx-5"
                    onClick={resetHandler}
                    variant="danger"
                  >
                    Reset Feilds
                  </Button>
                </Form>
              </Card.Body>

              <Card.Footer className="text-muted">
                Creating on - {new Date().toLocaleDateString()}
              </Card.Footer>
            </Card>
          </div>
        </MainScreen>
      </div>
    </div>
  );
}

export default CreateCategory;