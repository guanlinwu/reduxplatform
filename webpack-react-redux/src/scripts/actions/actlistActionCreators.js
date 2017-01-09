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
    fetch('/api/actlist')
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