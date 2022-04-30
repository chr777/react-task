import { spinnerConstants } from '../constants';

const setSpinning = (isSpinning) => (dispatch) => dispatch({
  type: spinnerConstants.SET_SPINNING,
  payload: isSpinning,
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  setSpinning,
};
