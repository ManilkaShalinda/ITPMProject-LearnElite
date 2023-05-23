import { 
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
} from "../constants/categoryContants";
import axios from "axios";
import swal from "sweetalert";

//all note list
export const listCategory = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: PRODUCT_LIST_REQUEST,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    const { data } = await axios.get(`api/category`);
     console.log(data)
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: message,
    });
  }
};


//add notes
export const createCategoryAction = ( foodname, price, category, pic) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PRODUCT_CREATE_REQUEST,
    });

    const { data } = await axios.post(
      `api/category/create`,
      { foodname, price, category, pic },
    );
   console.log(foodname, price, category, pic)
    dispatch({
      type: PRODUCT_CREATE_SUCCESS,
      payload: data,
    });
    	swal({
			title: "Success !!!",
			text: "Donation Create Successful.",
			icon: "success",
			timer: 2000,
			button: false,
		});
    window.location.href = "/category";
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCT_CREATE_FAIL,
      payload: message,
    });
  }
};

//update 
//update 
export const updateCategoryAction = (id, foodname, price, category, pic) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: PRODUCT_UPDATE_REQUEST,
    });

    const { data } = await axios.put(
      `/api/category/${id}`,
      {foodname, price, category, pic }
    );
swal({
			title: "Success !!!",
			text: "Donation Updated Successful.",
			icon: "success",
			timer: 2000,
			button: false,
		});
    window.location.href = "/category";
    dispatch({
      type:PRODUCT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type: PRODUCT_UPDATE_FAIL,
      payload: message,
    });
  }
};


//delete note action
export const deleteCategoryAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type:  PRODUCT_DELETE_REQUEST,
    });

    const { data } = await axios.delete(`/api/category/${id}`);

    dispatch({
      type:  PRODUCT_DELETE_SUCCESS,
      payload: data,
    });
    swal({
			title: "Success !!!",
			text: "Donation Deleted Successful.",
			icon: "success",
			timer: 2000,
			button: false,
		});
    window.location.href = "/category";
    dispatch({
      type:PRODUCT_UPDATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({
      type:  PRODUCT_DELETE_FAIL,
      payload: message,
    });
  }
};