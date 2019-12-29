import * as ActionTypes from './ActionTypes';

export const Dishes=(state={
    isLoading:true,
    errmess:null,
    dishes:[]
},actions)=>{
    switch(actions.type){
        case ActionTypes.ADD_DISHES:
            return {...state,isLoading:false,errmess:null,dishes:actions.payload};
            
        case ActionTypes.DISHES_LOADING:
            return {...state,isLoading:true,errmess:null,dishes:[]};

        case ActionTypes.DISHES_FAILED:
            return {...state,isLoading:false,errmess:actions.payload,dishes:[]};
    

        default:
            return state;
    }
}