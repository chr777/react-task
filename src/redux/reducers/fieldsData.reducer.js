import { fieldConstants } from '../constants';

const initialState = {
  fields: [],
  fieldsGotResponse: false,
};
function fieldsData(state = initialState, action) {
  switch (action.type) {
    case fieldConstants.FETCH_FIELDS:
      return {
        fields: action.payload,
        fieldsGotResponse: true,
      };
    case fieldConstants.REMOVE_FIELD:
      return {
        ...state,
        fields: state.fields.filter(field => field.id !== action.payload),
      };
      case fieldConstants.ADD_FIELD:
        return {
          ...state,
          fields: state.fields.push({
                                      id: action.payload.id, 
                                      type: action.payload.data.type,
                                      details: {
                                        ...action.payload.data.details,
                                      }
                                  }),
        };
      case fieldConstants.EDIT_FIELD:
        return {
          ...state,
          fields: state.fields.map(field => (field.id === action.payload.id
            ? {
              ...field,
              type: action.payload.data.type,
              details: {
                 ...action.payload.data.details,
              }
            }
            : field)),
      };

    default:
      return state;
  }
}

export default fieldsData;
