import {
  fetchAllFields,
  deleteFieldById,
  editField,
  createField,
} from '../../data/fields.data';

import { fieldConstants, spinnerConstants } from '../constants';

const getAllFields = () => async (dispatch) => {
    try {
      const fieldsData = await fetchAllFields();
      dispatch({ type: fieldConstants.FETCH_FIELDS, payload: fieldsData });
    } catch (e) {
      // eslint-disable-next-line no-console
      console.error(e);
    }
}

const removefield = (id) => async (dispatch) => {
  deleteFieldById(id).then((response) => {
    dispatch({ type: spinnerConstants.SET_SPINNING, payload: false });
    if (response.status === 200) {
      dispatch({
        type: fieldConstants.REMOVE_FIELD,
        payload: id,
      });
    } else {
      dispatch({
        type: fieldConstants.REMOVE_FIELD,
        payload: false,
      });
    }
  });
};

const addField = fields => async (dispatch) => {
  createField(fields).then((response) => {
    dispatch({ type: spinnerConstants.SET_SPINNING, payload: false });
    if (response) {
      dispatch({ type: fieldConstants.ADD_FIELD, payload: fields });
    } else {
      dispatch({ type: fieldConstants.ADD_FIELD, payload: false });
    }
  });
};


const changeField = ( id, data) => async (dispatch) => {
  editField(id, data).then(response => {
    dispatch({ type: spinnerConstants.SET_SPINNING, payload: false });
    if (response) {
      dispatch({ type: fieldConstants.EDIT_FIELD, payload: { id, data } });
    } else {
      dispatch({ type: fieldConstants.EDIT_FIELD, payload: false  });
    }
  });
};


// eslint-disable-next-line import/no-anonymous-default-export
export default {
 getAllFields,
 removefield,
 addField,
 changeField,
};