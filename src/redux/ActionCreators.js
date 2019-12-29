import * as ActionTypes from './ActionTypes';
import {DISHES} from '../shared/dishes';

export const addComment=(dishId,rating,author,comment)=>({
    type:ActionTypes.ADD_COMMENT,
    payload:{
        dishId:dishId,
        rating:rating,
        author:author,
        comment:comment
    }
});
//fetchDishes is a thunk as it is returning a function and it has access to dispatch as well to getState()

export const fetchDishes=()=>(dispatch)=>{
    dispatch(dishesLoading(true));

    setTimeout(()=>{
       dispatch(addDishes(DISHES));
    },2000);
}

export const dishesLoading=()=>({
    type:ActionTypes.DISHES_LOADING
});

export const dishesFailed=(errmess)=>({
    type:ActionTypes.DISHES_FAILED,
    payload:errmess
});

export const addDishes=(dishes)=>({
    type:ActionTypes.ADD_DISHES,
    payload:dishes
});