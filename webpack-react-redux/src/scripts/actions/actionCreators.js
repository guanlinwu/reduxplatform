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
