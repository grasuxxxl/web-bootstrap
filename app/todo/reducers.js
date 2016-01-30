export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

const defaultState = [{ text: 'Be awesome'}];

const addTodo = (state, payload) => state.concat(payload);

export default (state = defaultState, action) => {

  switch (action.type) {
    case ADD_TODO: return addTodo(state, action.payload);
    case REMOVE_TODO: return remove(state, action.payload);
    default: return state;
  };
  
};


export function add (payload) {
  return { type: ADD_TODO, payload };
};
export function remove (payload) {
  return { type: REMOVE_TODO, payload };
};
