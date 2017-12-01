// Action Types
export const Types = {
  SEARCH: 'users/SEARCH',
  ADD: 'users/ADD',
};

// Reducer

const initialState = [];

export default function users(state = initialState, action) {
  switch (action.type) {
    case Types.ADD:
    {
      const {
        id,
        login,
        avatar_url,
        bio,
      } = action.payload.user;

      return [...state,
        {
          id,
          login,
          avatar_url,
          bio,
          coordinate: action.payload.coordinate,
        }];
    }
    default:
      return state;
  }
}

// Action Creators

export function addUser(user, coordinate) {
  return {
    type: Types.SEARCH,
    payload: {
      user,
      coordinate,
    },
  };
}
