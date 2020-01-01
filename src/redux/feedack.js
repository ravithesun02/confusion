import * as ActionTypes from './ActionTypes';

export const Feedback=(state={
    feedback:[]
},actions)=>{
    switch(actions.type)
    {
        case ActionTypes.ADD_FEEDBACK:
            return {...state,feedback:state.feedback.concat(actions.payload)};
        default:
            return state;
    }
}