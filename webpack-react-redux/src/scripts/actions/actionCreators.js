/*
* 行为
*/
'use strict';

export function increment(i) {
  console.log(i);
  return {
    type: 'INCREMENT_LIKES',
    index: i
  };
}

/*
*  Comments
*/

export function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author, // same as author: author
    comment // same as comment: comment
  };
}

export function removeComment(postId, i){
  return {
    type: 'REMOVE_COMMENT',
    i,
    postId
  };
}

/**
 * nav
 */
export function goForward(item){
  return {
    type: 'GO_NAV_FORWARD',
    item
  };
}

/**
 * actlist
 */
export function toggleFavor(item){
  return {
      type : 'TOGGLE_FAVOR',
      item
  };
}
//fetch
export function fetchActList(){
  return dispatch => {
    fetch('/actlist')
      .then(response => response.json())
      .then(json => dispatch(loadActList(json)));
  };
}

export function loadActList(item){
  return {
      type : 'LOAD_ACTLIST',
      item
  };
}


// import * as actlistAction from 'scripts/actions/actlistAction';
// import * as navAction from 'scripts/actions/navAction';

// export default  {
//   actlistAction,
//   navAction
// };