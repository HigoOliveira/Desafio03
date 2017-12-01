// Type actions
export const Types = {
  GET: 'users/GET',
  LOAD: 'users/LOAD',
};

// Reducers

const initialState = [];

export default function users(state = initialState, action) {
  switch (action.Types) {
    case Types.GET:
      return [...state, action.payload.user];
    default:
      return state;
  }
}
