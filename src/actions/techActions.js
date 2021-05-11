import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  SET_LOADING,
  TECHS_ERROR,
  LOGIN,
  LOGIN_FAIL,
} from "./types";

// ** GET TECHS ***
export const getTechs = () => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/techs");
    const data = await res.json();

    dispatch({
      type: GET_TECHS,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// ** ADD TECHS ***
export const addTech = (tech) => async (dispatch) => {
  try {
    setLoading();
    //console.log(tech);
    const res = await fetch("/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({
      type: ADD_TECH,
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};
// ** DELETE TECHS **
export const deleteTech = (id) => async (dispatch) => {
  try {
    setLoading();
    await fetch(`/techs/${id}`, {
      method: "DELETE",
    });

    dispatch({
      type: DELETE_TECH,
      payload: id,
    });
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

// ** LOGIN **

export const login = (formData) => async (dispatch) => {
  try {
    setLoading();
    const res = await fetch("/user");
    const data = await res.json();
    console.log(data[0].email);
    if (
      formData.email === data[0].email &&
      formData.password === data[0].password
    ) {
      localStorage.setItem("login", "true");
      dispatch({
        type: LOGIN,
      });
    } else {
      dispatch({
        type: LOGIN_FAIL,
      });
    }
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.response.statusText,
    });
  }
};

export const loadUser = () => {
  if (localStorage.login) {
    return {
      type: LOGIN,
    };
  } else {
    return {
      type: LOGIN_FAIL,
    };
  }
};

// ** SET LOADING **
export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
