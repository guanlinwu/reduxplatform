/**
 * nav
 */
import * as CONSTANTS from 'constants';

export function goForward(item){
  return {
    type: CONSTANTS.GO_NAV_FORWARD,
    item
  };
}