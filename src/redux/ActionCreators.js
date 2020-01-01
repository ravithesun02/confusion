import * as ActionTypes from './ActionTypes';
import {baseURL} from '../shared/baseUrl';


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

    fetch(baseURL+'dishes')
        .then(response=>response.json())
        .then(dishes=>dispatch(addDishes(dishes)))
    
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

export const fetchComments=()=>(dispatch)=>{
    fetch(baseURL+'comments')
    .then(response=>response.json())
    .then(comments=>dispatch(addComments(comments)))
}

export const addComments=(comments)=>({
    type:ActionTypes.ADD_COMMENTS,
    payload:comments
});

export const commentsFailed=(errmess)=>({
    type:ActionTypes.COMMENT_FAILED,
    payload:errmess
});

export const fetchPromos=()=>(dispatch)=>{
    dispatch(promosLoading(true));

    fetch(baseURL+'promotions')
    .then(response=>response.json())
    .then(promotions=>dispatch(addPromos(promotions)))
}

export const promosLoading=()=>({
    type:ActionTypes.PROMOS_LOADING
});

export const addPromos=(promotions)=>({
    type:ActionTypes.ADD_PROMOS,
    payload:promotions
});

export const promosFailed=(errmess)=>({
    type:ActionTypes.PROMOS_FAILED,
    payload:errmess
});

export const fetchLeaders=()=>(dispatch)=>{
    dispatch(leadersLoading(true));

    fetch(baseURL+'leaders')
        .then(response=>response.json())
        .then(leaders=>dispatch(addLeaders(leaders)))
}

export const leadersLoading=()=>({
    type:ActionTypes.LEADERS_LOADING
});

export const leadersFailed=(errmess)=>({
    type:ActionTypes.LEADERS_FAILED,
    payload:errmess
});

export const addLeaders=(leaders)=>({
    type:ActionTypes.ADD_LEADERS,
    payload:leaders
});
