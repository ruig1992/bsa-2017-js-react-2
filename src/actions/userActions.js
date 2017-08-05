import * as actions from '../constants/user/actionTypes';

export function addUser(user) {
  return {
    type: actions.ADD_USER,
    user: { ...user, id: Date.now(), hidden: false },
  };
}

export function deleteUser(id) {
  return {
    type: actions.DELETE_USER,
    id,
  };
}

export function changeFilterValue(filterValue) {
  return {
    type: actions.CHANGE_FILTER_VALUE,
    filterValue,
  };
};
