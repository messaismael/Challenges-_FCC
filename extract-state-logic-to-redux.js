// define ADD, addMessage(), messageReducer(), and store here:
const ADD = "ADD";

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
}

const defaultState = [];

const messageReducer = (state=defaultState, action) => {

  switch (action.type) {
    case ADD:
      return [...state, action.message]
    break
   default:
      return state;
    break
  }
}

 const store = Redux.createStore( messageReducer);