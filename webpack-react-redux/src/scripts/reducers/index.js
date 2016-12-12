'use strict';

import { combineReducers } from 'redux';

/*
  Reducers

  Reducers match up the dispatched (fired) action with a function that should be called.

  It takes in a copy of state, modifies it, and returns the new state
  When state gets large, it makes sense to have multiple reducers that only deal with a piece of the state

*/

import { routerReducer } from 'react-router-redux'; // we need this for react-router
import nav from 'scripts/reducers/nav';
import actlist from 'scripts/reducers/actlist';
import actdetail from 'scripts/reducers/actdetail';
import slider from 'scripts/reducers/slider';

// Combine all our reducers togeher
const rootReducer = combineReducers({
    nav,
    actlist,
    actdetail,
    slider,
    routing: routerReducer
});

export default rootReducer;
