import deepAssingn from 'deep-assign';

import { initialState } from './initialState';
import * as types from './types';

const reducers = {
  [types.INIT_STORE](old_state, action) {
    let state = deepAssingn({}, old_state, action.state);
    return state;
  },
  [types.TEST](old_state, action) {
    let state = deepAssingn({}, old_state, action.state);
    if( state.tests + action.num > 0 ) state.tests += action.num;
    return state;
  }
};

const reducer = (state = initialState, action) => {
  return action.type in reducers ? reducers[action.type](state, action) : state;
};

export default reducer;
