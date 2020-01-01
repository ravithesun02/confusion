import * as ActionTypes from './ActionTypes';

export const Leaders=(state={
    isLoading:true,
    errmess:null,
    leaders:[]
    },actions)=>{
    switch(actions.type){
        case ActionTypes.LEADERS_LOADING:
            return {...state,isLoading:true,errmess:null,leaders:[]};
        case ActionTypes.ADD_LEADERS:
            return {...state,isLoading:false,errmess:null,leaders:actions.payload};
        case ActionTypes.LEADERS_FAILED:
            return {...state,isLoading:false,errmess:actions.payload,leaders:[]};

        default:
            return state;
    }
}