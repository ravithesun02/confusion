import * as ActionTypes from './ActionTypes';

export const Comments=(state={
        errmess:null,
        comments:[]
    },actions)=>{
    switch(actions.type){
        case ActionTypes.ADD_COMMENTS:
            return {...state,errmess:null,comments:actions.payload};
        case ActionTypes.COMMENT_FAILED:
            return {...state,errmess:actions.payload,comments:[]};
        case ActionTypes.ADD_COMMENT:
            var comment=actions.payload;
            return {...state,comments:state.comments.concat(comment)};

        default:
            return state;
    }
}