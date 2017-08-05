import * as actions from '../constants/user/actionTypes';

const initialState = {
  filterValue: '',
  users: [
    {id: 1, name: 'Leanne Graham'},
    {id: 2, name: 'Ervin Howell'},
  ],
};

export default function (state = initialState, action) {
  switch(action.type) {
    case actions.ADD_USER: {
      return {
        ...state,
        users: [...state.users, action.user]
      };
    }

    case actions.DELETE_USER: {
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id)
      };
    }

    case actions.CHANGE_FILTER_VALUE: {
      return {
        ...state,
        filterValue: action.filterValue.toLowerCase().trim()
      };
    }

    default: {
      return state;
    }
  }
};
