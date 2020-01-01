import * as ActionTypes from './ActionTypes';

export const Promotions=(state={
        isLoading:true,
        errmess:null,
        promotions:[]
    },actions)=>{
    switch(actions.type){
        case ActionTypes.ADD_PROMOS:
            return {...state,isLoading:false,errmess:null,promotions:actions.payload};
            
        case ActionTypes.PROMOS_LOADING:
            return {...state,isLoading:true,errmess:null,promotions:[]};

        case ActionTypes.PROMOS_FAILED:
            return {...state,isLoading:false,errmess:actions.payload,promotions:[]};

        default:
            return state;
    }
}