import { spinnerConstants } from '../constants';

const initialState = {
  spinning: false,
};

function detactNodesData(
  state = initialState,
  action
) {
  switch (action.type) {
    case spinnerConstants.SET_SPINNING:
      return {
        spinning: action.payload,
      };
    default:
      return state;
  }
}

export default detactNodesData;
