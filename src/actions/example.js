import axios from "axios";

export const GET_LIST = "GET_LIST";
export const ADD = "ADD";
export const DELETE = "DELETE";
export const DETAIL = "DETAIL";
export const UPDATE = "UPDATE";

export const getListDataa = () => {
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_LIST,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get data
    axios({
      method: "GET",
      url: "",
      timeout: 120000,
    })
      .then((response) => {
        // success
        dispatch({
          type: GET_LIST,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //failed
        dispatch({
          type: ADD,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addData = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: ADD,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //post data
    axios({
      method: "POST",
      url: "",
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        // success
        dispatch({
          type: ADD,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //failed
        dispatch({
          type: ADD,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteData = (id) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: DELETE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //delete data
    axios({
      method: "DELETE",
      url: "" + id,
      timeout: 120000,
    })
      .then((response) => {
        // success
        dispatch({
          type: DELETE,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //failed
        dispatch({
          type: DELETE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const detailData = (data) => {
  return (dispatch) => {
    dispatch({
      type: DETAIL,
      payload: {
        data: data,
      },
    });
  };
};

export const updateData = (data) => {
  return (dispatch) => {
    //loading
    dispatch({
      type: UPDATE,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //update data
    axios({
      method: "PUT",
      url: "" + data.id,
      timeout: 120000,
      data: data,
    })
      .then((response) => {
        // success
        dispatch({
          type: UPDATE,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        //failed
        dispatch({
          type: UPDATE,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
