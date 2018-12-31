/**
 * discover reducers
 */
import * as CONSTANTS from 'constants';

const SUBCRIBE= 'subscribe';

export default function discover(state = {}, action) {
  switch (action.type) {
	case CONSTANTS.LOAD_CATEGORIES:
		let categories = {...state.categories};
		categories[action.category] = [
			...action.item
		];
		return {
			categories : categories
		};
	case CONSTANTS.TOGGLE_SUBCRIBE:
			let {index, belongTo}   = action.item,//belongTo: 属于类别. index: 该数组的索引
			categoryArr   = state.categories[belongTo],
			category      = categoryArr[index],
			{isSubscribe} = category;
		if(isSubscribe) {
			/*
			 如果订阅，则取消订阅，发送请求
			 */
			let categories      = {...state.categories};
			let from            = category.from;
			let fromCategoryArr = state.categories[from];
			categories[belongTo] = [
				...categoryArr.slice(0, index),
				...categoryArr.slice(index+1)
			];
			categories[from] = fromCategoryArr.concat({
				...category,
				isSubscribe : !isSubscribe
			});
			return {
				categories : categories
			};
		}
		else {
			/*
			 如果没有订阅，则订阅，发送请求
			 */
			let categories           = {...state.categories};
			let SubscribeCategoryArr = state.categories[SUBCRIBE];
			categories[belongTo] = [
				...categoryArr.slice(0, index),
				...categoryArr.slice(index+1)
			];
			categories[SUBCRIBE] = SubscribeCategoryArr.concat({
				...category,
				isSubscribe : !isSubscribe
			});
			return {
				categories : categories
			};
		}
    default:
      return state;
  }
}